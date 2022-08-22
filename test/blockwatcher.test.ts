import { join } from 'path';
import { ContractInfo } from '../src/abi/contract';
import { AbiRepository } from '../src/abi/repo';
import { BlockWatcher } from '../src/blockwatcher';
import { State } from '../src/state';
import { BatchedEthereumClient } from '../src/eth/client';
import { HttpTransport } from '../src/eth/http';
import { withRecorder } from '../src/eth/recorder';
import { suppressDebugLogging } from '../src/utils/debug';
import LRUCache from '../src/utils/lru';
import { TestOutput } from './testoutput';
import { MOCK_NODE_ADAPTER } from '../src/platforms/mock';

let logHandle: any;
beforeEach(() => {
    logHandle = suppressDebugLogging();
});
afterEach(() => {
    logHandle.restore();
});

test('blockwatcher', async () => {
    await withRecorder(
        new HttpTransport('https://rpc.gnosischain.com', {}),
        {
            name: 'xdai-blockwatcher',
            storageDir: join(__dirname, './fixtures/recorded'),
            replay: true,
        },
        async transport => {
            const ethClient = new BatchedEthereumClient(transport, { maxBatchSize: 100, maxBatchTime: 0 });
            const abiRepo = new AbiRepository({
                decodeAnonymous: true,
                fingerprintContracts: true,
                abiFileExtension: '.json',
                directory: join(__dirname, './abis'),
                searchRecursive: true,
                requireContractMatch: true,
                reconcileStructShapeFromTuples: false,
            });
            await abiRepo.initialize();
            const state = new State({
                path: join(__dirname, '../tmp/tmpcheckpoint.json'),
                saveInterval: 10000,
            });
            const checkpoint = state.getCheckpoint('main');
            checkpoint.setInitialBlockNumber(123);
            const output = new TestOutput();
            const contractInfoCache = new LRUCache<string, Promise<ContractInfo>>({ maxSize: 100 });
            const blockWatcher = new BlockWatcher({
                abiRepo,
                checkpoint,
                config: {
                    enabled: true,
                    blocksMaxChunkSize: 1,
                    pollInterval: 1,
                    maxParallelChunks: 1,
                    startAt: 'latest',
                    decryptPrivateTransactions: false,
                    retryWaitTime: 10,
                },
                ethClient,
                output,
                contractInfoCache,
                waitAfterFailure: 1,
                nodePlatform: MOCK_NODE_ADAPTER,
            });

            await blockWatcher.processChunk({ from: 6442472, to: 6442482 });

            expect(output.messages).toMatchSnapshot();
        }
    );
}, 15000);
