import fetch, { Response } from 'node-fetch';
import { EthRequest } from '../eth/requests';

export class AvalancheClient {
    private mainnet: string = 'https://api.avax.network/';
    private testnet: string = 'https://api.avax-test.network/';

    constructor() {}

    async peerCount(nodeIDs: [] = [], network: string = 'mainnet'): Promise<number> {
        const data: {} = {
            jsonrpc: '2.0',
            id: 1,
            method: 'info.peers',
            params: {
                nodeIDs: nodeIDs,
            },
        };
        const response: Response = await fetch(`${network === 'mainnet' ? this.mainnet : this.testnet}ext/info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const json: { result: any } = await response.json();
        return parseInt(json.result['numPeers']);
    }
}
