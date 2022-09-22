import fetch, { Response } from 'node-fetch';

export class AvalancheClient {
    private url: string;

    constructor(url: string = 'http://127.0.0.1:9650/') {
        this.url = url;
    }

    async peerCount(nodeIDs: [] = []): Promise<number> {
        const data: {} = {
            jsonrpc: '2.0',
            id: 1,
            method: 'info.peers',
            params: {
                nodeIDs: nodeIDs,
            },
        };
        const response: Response = await fetch(`${this.url}ext/info`, {
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
