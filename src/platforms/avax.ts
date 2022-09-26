import { AvalancheClient } from "../avax/client";
import { EthereumClient } from "../eth/client";
import { AvaxPeer } from "../eth/responses";
import { NodeInfo, NodeMetricsMessage } from "../msgs";
import { OutputMessage } from "../output";
import { createModuleDebug } from "../utils/debug";
import { captureDefaultMetrics, GenericNodeAdapter } from "./generic";

const { debug } = createModuleDebug('platforms:avax');

export class AvaxAdapter extends GenericNodeAdapter {
    avaxClient?: AvalancheClient;
    
    public async initialize(ethClient: EthereumClient) {
        await super.initialize(ethClient);

        this.avaxClient = new AvalancheClient();
    }

    // Node Info
    public async captureNodeInfo(ethClient: EthereumClient): Promise<NodeInfo> {
        debug('Retrieving nodeInfo from coreth node');
        const [baseNodeInfo] = await Promise.all([
            super.captureNodeInfo(ethClient)
        ]);
        baseNodeInfo.platform = 'coreth'
        return baseNodeInfo;
    }

    // Node Metrics
    public async captureNodeMetrics(ethClient: EthereumClient, captureTime: number): Promise<NodeMetricsMessage[]> {
        const [defaultMetrics] = await Promise.all([
            captureDefaultMetrics(ethClient, captureTime, this.supports),
        ]);
        defaultMetrics.metrics.peerCount = await this.avaxClient?.peerCount()
        return [defaultMetrics].filter(m => m != null) as NodeMetricsMessage[];
    }

    // Peer Info
    public async capturePeers(captureTime: number): Promise<OutputMessage[]> {
        const peers = await this.avaxClient?.peers()
        return peers.map((peer: AvaxPeer) => ({
            type: 'avaxPeer',
            time: captureTime,
            body: peer,
        }));
    }

    public async capturePeerInfo?(ethClient: EthereumClient, captureTime: number): Promise<OutputMessage[]> {
        return await this.capturePeers(captureTime);
    }

    // Pending Transactions
}