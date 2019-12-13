import { readFileSync } from 'fs-extra';
import { join } from 'path';
import {
    durationStringToMs,
    formatGethMemStats,
    formatGethMetrics,
    parseAbbreviatedNumber,
} from '../../src/platforms/geth';

test('parseAbbreviatedNumber', () => {
    expect(parseAbbreviatedNumber('123')).toBe(123);
    expect(parseAbbreviatedNumber('-123')).toBe(-123);
    expect(parseAbbreviatedNumber('1.23K')).toBe(1230);
    expect(parseAbbreviatedNumber('4.59M')).toBe(4_590_000);
    expect(parseAbbreviatedNumber('-26516807')).toBe(-26516807);
    expect(parseAbbreviatedNumber('2.37G')).toBe(2_370_000_000);
});

test('durationStringToMs', () => {
    expect(durationStringToMs('1ms')).toBe(1);
    expect(durationStringToMs('1s')).toBe(1000);
    expect(durationStringToMs('-1s')).toBe(-1000);
    expect(durationStringToMs('0.5ms')).toBe(0.5);
    expect(durationStringToMs('2562047h47m16.854775807s')).toMatchInlineSnapshot(`922365136854.7758`);
    expect(durationStringToMs('-2562047h47m16.854775807s')).toMatchInlineSnapshot(`-922365136854.7758`);
    expect(durationStringToMs('.5us')).toMatchInlineSnapshot(`0.0005`);
    expect(durationStringToMs('1s5ns')).toMatchInlineSnapshot(`1000.000005`);
    expect(durationStringToMs('s')).toBe(NaN);
    expect(durationStringToMs('123f')).toBe(NaN);
    expect(durationStringToMs('0x123')).toBe(NaN);
});

test('formatGethMetrics', () => {
    expect(
        formatGethMetrics(
            JSON.parse(readFileSync(join(__dirname, '../fixtures/geth_metrics_response.json'), { encoding: 'utf-8' }))
        )
    ).toMatchInlineSnapshot(`
        Array [
          Array [
            "geth.metrics.chain.inserts.avg01Min",
            51,
          ],
          Array [
            "geth.metrics.chain.inserts.avg05Min",
            177,
          ],
          Array [
            "geth.metrics.chain.inserts.avg15Min",
            249,
          ],
          Array [
            "geth.metrics.chain.inserts.maximum",
            31.790945,
          ],
          Array [
            "geth.metrics.chain.inserts.minimum",
            0.533687,
          ],
          Array [
            "geth.metrics.chain.inserts.overall",
            302,
          ],
          Array [
            "geth.metrics.chain.inserts.percentiles.5",
            1.622736,
          ],
          Array [
            "geth.metrics.chain.inserts.percentiles.20",
            1.886774,
          ],
          Array [
            "geth.metrics.chain.inserts.percentiles.50",
            2.147799,
          ],
          Array [
            "geth.metrics.chain.inserts.percentiles.80",
            4.579833,
          ],
          Array [
            "geth.metrics.chain.inserts.percentiles.95",
            10.52114,
          ],
          Array [
            "geth.metrics.db.preimage.hits.overall",
            0,
          ],
          Array [
            "geth.metrics.db.preimage.total.overall",
            0,
          ],
          Array [
            "geth.metrics.discv5.inboundTraffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.discv5.inboundTraffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.discv5.inboundTraffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.discv5.inboundTraffic.overall",
            0,
          ],
          Array [
            "geth.metrics.discv5.outboundTraffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.discv5.outboundTraffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.discv5.outboundTraffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.discv5.outboundTraffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.input.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.input.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.input.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.input.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.output.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.output.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.output.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.output.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.time.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.time.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.time.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.time.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.counter.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.counter.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.counter.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.counter.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.duration.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.duration.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.duration.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.compact.writedelay.duration.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.read.avg01Min",
            149,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.read.avg05Min",
            84580,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.read.avg15Min",
            558480,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.read.overall",
            4600,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.write.avg01Min",
            236220,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.write.avg05Min",
            867930,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.write.avg15Min",
            1450000,
          ],
          Array [
            "geth.metrics.eth.db.chaindata.disk.write.overall",
            1390000,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.drop.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.drop.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.drop.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.drop.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.in.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.in.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.in.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.in.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.maximum",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.minimum",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.percentiles.5",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.percentiles.20",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.percentiles.50",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.percentiles.80",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.req.percentiles.95",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.timeout.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.timeout.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.timeout.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.bodies.timeout.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.drop.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.drop.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.drop.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.drop.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.in.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.in.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.in.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.in.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.maximum",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.minimum",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.percentiles.5",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.percentiles.20",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.percentiles.50",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.percentiles.80",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.req.percentiles.95",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.timeout.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.timeout.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.timeout.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.headers.timeout.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.drop.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.drop.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.drop.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.drop.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.in.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.in.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.in.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.in.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.maximum",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.minimum",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.percentiles.5",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.percentiles.20",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.percentiles.50",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.percentiles.80",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.req.percentiles.95",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.timeout.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.timeout.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.timeout.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.receipts.timeout.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.drop.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.drop.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.drop.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.drop.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.in.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.in.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.in.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.downloader.states.in.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.bodies.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.bodies.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.bodies.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.bodies.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.headers.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.headers.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.headers.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.fetch.headers.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.in.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.in.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.in.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.in.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.out.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.out.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.out.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.bodies.out.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.in.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.in.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.in.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.in.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.out.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.out.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.out.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.filter.headers.out.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.dos.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.dos.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.dos.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.dos.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.drop.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.drop.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.drop.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.drop.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.in.avg01Min",
            20,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.in.avg05Min",
            69,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.in.avg15Min",
            97,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.in.overall",
            117,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.avg01Min",
            51,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.avg05Min",
            177,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.avg15Min",
            249,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.maximum",
            922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.minimum",
            3.004626,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.overall",
            302,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.percentiles.5",
            3.588335,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.percentiles.20",
            5.805709,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.percentiles.50",
            -922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.percentiles.80",
            -922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.announces.out.percentiles.95",
            -922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.dos.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.dos.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.dos.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.dos.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.drop.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.drop.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.drop.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.drop.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.in.avg01Min",
            256,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.in.avg05Min",
            868,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.in.avg15Min",
            1220,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.in.overall",
            1470,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.avg01Min",
            51,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.avg05Min",
            177,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.avg15Min",
            249,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.maximum",
            922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.minimum",
            1.345938,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.overall",
            302,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.percentiles.5",
            1.619732,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.percentiles.20",
            1.956826,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.percentiles.50",
            -922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.percentiles.80",
            -922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.fetcher.prop.broadcasts.out.percentiles.95",
            -922365136854.7758,
          ],
          Array [
            "geth.metrics.eth.misc.in.packets.avg01Min",
            3440,
          ],
          Array [
            "geth.metrics.eth.misc.in.packets.avg05Min",
            12110,
          ],
          Array [
            "geth.metrics.eth.misc.in.packets.avg15Min",
            17700,
          ],
          Array [
            "geth.metrics.eth.misc.in.packets.overall",
            20420,
          ],
          Array [
            "geth.metrics.eth.misc.in.traffic.avg01Min",
            910760,
          ],
          Array [
            "geth.metrics.eth.misc.in.traffic.avg05Min",
            3180000,
          ],
          Array [
            "geth.metrics.eth.misc.in.traffic.avg15Min",
            4520000,
          ],
          Array [
            "geth.metrics.eth.misc.in.traffic.overall",
            5390000,
          ],
          Array [
            "geth.metrics.eth.misc.out.packets.avg01Min",
            3510,
          ],
          Array [
            "geth.metrics.eth.misc.out.packets.avg05Min",
            12180,
          ],
          Array [
            "geth.metrics.eth.misc.out.packets.avg15Min",
            17660,
          ],
          Array [
            "geth.metrics.eth.misc.out.packets.overall",
            20520,
          ],
          Array [
            "geth.metrics.eth.misc.out.traffic.avg01Min",
            931920,
          ],
          Array [
            "geth.metrics.eth.misc.out.traffic.avg05Min",
            3240000,
          ],
          Array [
            "geth.metrics.eth.misc.out.traffic.avg15Min",
            4590000,
          ],
          Array [
            "geth.metrics.eth.misc.out.traffic.overall",
            5490000,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.packets.avg01Min",
            216,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.packets.avg05Min",
            737,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.packets.avg15Min",
            1030,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.packets.overall",
            1250,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.traffic.avg01Min",
            356670,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.traffic.avg05Min",
            1230000,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.traffic.avg15Min",
            1720000,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.in.traffic.overall",
            2069999.9999999998,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.packets.avg01Min",
            210,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.packets.avg05Min",
            723,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.packets.avg15Min",
            1010,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.packets.overall",
            1230,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.traffic.avg01Min",
            353370,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.traffic.avg05Min",
            1210000,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.traffic.avg15Min",
            1690000,
          ],
          Array [
            "geth.metrics.eth.prop.blocks.out.traffic.overall",
            2040000,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.packets.avg01Min",
            35,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.packets.avg05Min",
            126,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.packets.avg15Min",
            178,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.packets.overall",
            216,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.traffic.avg01Min",
            1330,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.traffic.avg05Min",
            4680,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.traffic.avg15Min",
            6590,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.in.traffic.overall",
            7970,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.packets.avg01Min",
            37,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.packets.avg05Min",
            139,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.packets.avg15Min",
            196,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.packets.overall",
            239,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.traffic.avg01Min",
            1390,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.traffic.avg05Min",
            5150,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.traffic.avg15Min",
            7270,
          ],
          Array [
            "geth.metrics.eth.prop.hashes.out.traffic.overall",
            8820,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.packets.avg01Min",
            956,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.packets.avg05Min",
            3460,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.packets.avg15Min",
            4880,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.packets.overall",
            5900,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.traffic.avg01Min",
            154760,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.traffic.avg05Min",
            558510,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.traffic.avg15Min",
            786940,
          ],
          Array [
            "geth.metrics.eth.prop.txns.in.traffic.overall",
            950970,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.packets.avg01Min",
            935,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.packets.avg05Min",
            3360,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.packets.avg15Min",
            4700,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.packets.overall",
            5650,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.traffic.avg01Min",
            151280,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.traffic.avg05Min",
            543430,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.traffic.avg15Min",
            759210,
          ],
          Array [
            "geth.metrics.eth.prop.txns.out.traffic.overall",
            912780,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.in.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.bodies.out.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.in.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.headers.out.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.in.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.receipts.out.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.in.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.eth.req.states.out.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.in.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.packets.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.packets.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.packets.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.packets.overall",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.traffic.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.traffic.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.traffic.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.les.misc.out.traffic.overall",
            0,
          ],
          Array [
            "geth.metrics.p2p.inboundConnects.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.p2p.inboundConnects.avg05Min",
            37,
          ],
          Array [
            "geth.metrics.p2p.inboundConnects.avg15Min",
            243,
          ],
          Array [
            "geth.metrics.p2p.inboundConnects.overall",
            2,
          ],
          Array [
            "geth.metrics.p2p.inboundTraffic.avg01Min",
            1500000,
          ],
          Array [
            "geth.metrics.p2p.inboundTraffic.avg05Min",
            5330000,
          ],
          Array [
            "geth.metrics.p2p.inboundTraffic.avg15Min",
            7920000,
          ],
          Array [
            "geth.metrics.p2p.inboundTraffic.overall",
            8910000,
          ],
          Array [
            "geth.metrics.p2p.outboundConnects.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.p2p.outboundConnects.avg05Min",
            74,
          ],
          Array [
            "geth.metrics.p2p.outboundConnects.avg15Min",
            485,
          ],
          Array [
            "geth.metrics.p2p.outboundConnects.overall",
            4,
          ],
          Array [
            "geth.metrics.p2p.outboundTraffic.avg01Min",
            1520000,
          ],
          Array [
            "geth.metrics.p2p.outboundTraffic.avg05Min",
            5350000,
          ],
          Array [
            "geth.metrics.p2p.outboundTraffic.avg15Min",
            7940000,
          ],
          Array [
            "geth.metrics.p2p.outboundTraffic.overall",
            8930000,
          ],
          Array [
            "geth.metrics.system.disk.readbytes.overall",
            10313500,
          ],
          Array [
            "geth.metrics.system.disk.readcount.avg01Min",
            22100,
          ],
          Array [
            "geth.metrics.system.disk.readcount.avg05Min",
            79390,
          ],
          Array [
            "geth.metrics.system.disk.readcount.avg15Min",
            120670,
          ],
          Array [
            "geth.metrics.system.disk.readcount.overall",
            132360,
          ],
          Array [
            "geth.metrics.system.disk.readdata.avg01Min",
            1730000,
          ],
          Array [
            "geth.metrics.system.disk.readdata.avg05Min",
            6360000,
          ],
          Array [
            "geth.metrics.system.disk.readdata.avg15Min",
            10460000,
          ],
          Array [
            "geth.metrics.system.disk.readdata.overall",
            10310000,
          ],
          Array [
            "geth.metrics.system.disk.writebytes.overall",
            29244562,
          ],
          Array [
            "geth.metrics.system.disk.writecount.avg01Min",
            31030,
          ],
          Array [
            "geth.metrics.system.disk.writecount.avg05Min",
            113120,
          ],
          Array [
            "geth.metrics.system.disk.writecount.avg15Min",
            184720,
          ],
          Array [
            "geth.metrics.system.disk.writecount.overall",
            183470,
          ],
          Array [
            "geth.metrics.system.disk.writedata.avg01Min",
            4960000,
          ],
          Array [
            "geth.metrics.system.disk.writedata.avg05Min",
            18240000,
          ],
          Array [
            "geth.metrics.system.disk.writedata.avg15Min",
            30720000,
          ],
          Array [
            "geth.metrics.system.disk.writedata.overall",
            29240000,
          ],
          Array [
            "geth.metrics.system.memory.allocs.avg01Min",
            1870000,
          ],
          Array [
            "geth.metrics.system.memory.allocs.avg05Min",
            7270000,
          ],
          Array [
            "geth.metrics.system.memory.allocs.avg15Min",
            14110000,
          ],
          Array [
            "geth.metrics.system.memory.allocs.overall",
            11100000,
          ],
          Array [
            "geth.metrics.system.memory.frees.avg01Min",
            2250000,
          ],
          Array [
            "geth.metrics.system.memory.frees.avg05Min",
            6920000,
          ],
          Array [
            "geth.metrics.system.memory.frees.avg15Min",
            11010000,
          ],
          Array [
            "geth.metrics.system.memory.frees.overall",
            10520000,
          ],
          Array [
            "geth.metrics.system.memory.inuse.avg01Min",
            -26516807,
          ],
          Array [
            "geth.metrics.system.memory.inuse.avg05Min",
            8700000000,
          ],
          Array [
            "geth.metrics.system.memory.inuse.avg15Min",
            57930000000,
          ],
          Array [
            "geth.metrics.system.memory.inuse.overall",
            266310000,
          ],
          Array [
            "geth.metrics.system.memory.pauses.avg01Min",
            3100000,
          ],
          Array [
            "geth.metrics.system.memory.pauses.avg05Min",
            367430000,
          ],
          Array [
            "geth.metrics.system.memory.pauses.avg15Min",
            2370000000,
          ],
          Array [
            "geth.metrics.system.memory.pauses.overall",
            46460000,
          ],
          Array [
            "geth.metrics.trie.cachemiss.overall",
            1786,
          ],
          Array [
            "geth.metrics.trie.cacheunload.overall",
            27,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.nodes.avg01Min",
            11,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.nodes.avg05Min",
            38,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.nodes.avg15Min",
            53,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.nodes.overall",
            64,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.size.avg01Min",
            2380,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.size.avg05Min",
            7920,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.size.avg15Min",
            10730,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.size.overall",
            12670,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.time.mean",
            0.00202,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.time.measurements",
            1,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.time.percentiles.5",
            0.00202,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.time.percentiles.20",
            0.00202,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.time.percentiles.50",
            0.00202,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.time.percentiles.80",
            0.00202,
          ],
          Array [
            "geth.metrics.trie.memcache.commit.time.percentiles.95",
            0.00202,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.nodes.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.nodes.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.nodes.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.nodes.overall",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.size.avg01Min",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.size.avg05Min",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.size.avg15Min",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.size.overall",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.time.mean",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.time.measurements",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.time.percentiles.5",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.time.percentiles.20",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.time.percentiles.50",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.time.percentiles.80",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.flush.time.percentiles.95",
            0,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.nodes.avg01Min",
            51,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.nodes.avg05Min",
            123,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.nodes.avg15Min",
            151,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.nodes.overall",
            171,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.size.avg01Min",
            11080,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.size.avg05Min",
            25840,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.size.avg15Min",
            31400,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.size.overall",
            35550,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.time.mean",
            0.010393000000000001,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.time.measurements",
            1,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.time.percentiles.5",
            0.010393000000000001,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.time.percentiles.20",
            0.010393000000000001,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.time.percentiles.50",
            0.010393000000000001,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.time.percentiles.80",
            0.010393000000000001,
          ],
          Array [
            "geth.metrics.trie.memcache.gc.time.percentiles.95",
            0.010393000000000001,
          ],
          Array [
            "geth.metrics.txpool.invalid.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.pending.discard.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.pending.nofunds.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.pending.ratelimit.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.pending.replace.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.queued.discard.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.queued.nofunds.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.queued.ratelimit.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.queued.replace.overall",
            0,
          ],
          Array [
            "geth.metrics.txpool.underpriced.overall",
            0,
          ],
        ]
    `);
});

test('formatGethMemStats', () => {
    expect(
        formatGethMemStats(
            JSON.parse(readFileSync(join(__dirname, '../fixtures/geth_memstats_response.json'), { encoding: 'utf-8' }))
        )
    ).toMatchInlineSnapshot(`
        Array [
          Array [
            "geth.memStats.alloc",
            352699992,
          ],
          Array [
            "geth.memStats.totalAlloc",
            1457755368,
          ],
          Array [
            "geth.memStats.sys",
            772692216,
          ],
          Array [
            "geth.memStats.lookups",
            0,
          ],
          Array [
            "geth.memStats.mallocs",
            7976493,
          ],
          Array [
            "geth.memStats.frees",
            6588376,
          ],
          Array [
            "geth.memStats.heapAlloc",
            352699992,
          ],
          Array [
            "geth.memStats.heapSys",
            735019008,
          ],
          Array [
            "geth.memStats.heapIdle",
            370565120,
          ],
          Array [
            "geth.memStats.heapInuse",
            364453888,
          ],
          Array [
            "geth.memStats.heapReleased",
            0,
          ],
          Array [
            "geth.memStats.heapObjects",
            1388117,
          ],
          Array [
            "geth.memStats.stackInuse",
            3178496,
          ],
          Array [
            "geth.memStats.stackSys",
            3178496,
          ],
          Array [
            "geth.memStats.mSpanInuse",
            2797256,
          ],
          Array [
            "geth.memStats.mSpanSys",
            3555328,
          ],
          Array [
            "geth.memStats.mCacheInuse",
            27648,
          ],
          Array [
            "geth.memStats.mCacheSys",
            32768,
          ],
          Array [
            "geth.memStats.buckHashSys",
            1655776,
          ],
          Array [
            "geth.memStats.gCSys",
            26128384,
          ],
          Array [
            "geth.memStats.otherSys",
            3122456,
          ],
          Array [
            "geth.memStats.nextGC",
            430387856,
          ],
          Array [
            "geth.memStats.lastGC",
            1575932287019647000,
          ],
          Array [
            "geth.memStats.pauseTotalNs",
            42908706,
          ],
          Array [
            "geth.memStats.numGC",
            9,
          ],
          Array [
            "geth.memStats.numForcedGC",
            0,
          ],
          Array [
            "geth.memStats.gCCPUFraction",
            0.00022859077571677725,
          ],
          Array [
            "geth.memStats.bySize.0.mallocs",
            0,
          ],
          Array [
            "geth.memStats.bySize.0.frees",
            0,
          ],
          Array [
            "geth.memStats.bySize.8.mallocs",
            58453,
          ],
          Array [
            "geth.memStats.bySize.8.frees",
            46954,
          ],
          Array [
            "geth.memStats.bySize.16.mallocs",
            1318409,
          ],
          Array [
            "geth.memStats.bySize.16.frees",
            1082759,
          ],
          Array [
            "geth.memStats.bySize.32.mallocs",
            2798547,
          ],
          Array [
            "geth.memStats.bySize.32.frees",
            2253347,
          ],
          Array [
            "geth.memStats.bySize.48.mallocs",
            962142,
          ],
          Array [
            "geth.memStats.bySize.48.frees",
            771407,
          ],
          Array [
            "geth.memStats.bySize.64.mallocs",
            331176,
          ],
          Array [
            "geth.memStats.bySize.64.frees",
            270202,
          ],
          Array [
            "geth.memStats.bySize.80.mallocs",
            360907,
          ],
          Array [
            "geth.memStats.bySize.80.frees",
            295321,
          ],
          Array [
            "geth.memStats.bySize.96.mallocs",
            150148,
          ],
          Array [
            "geth.memStats.bySize.96.frees",
            122187,
          ],
          Array [
            "geth.memStats.bySize.112.mallocs",
            106377,
          ],
          Array [
            "geth.memStats.bySize.112.frees",
            86799,
          ],
          Array [
            "geth.memStats.bySize.128.mallocs",
            204260,
          ],
          Array [
            "geth.memStats.bySize.128.frees",
            166718,
          ],
          Array [
            "geth.memStats.bySize.144.mallocs",
            105150,
          ],
          Array [
            "geth.memStats.bySize.144.frees",
            85611,
          ],
          Array [
            "geth.memStats.bySize.160.mallocs",
            44768,
          ],
          Array [
            "geth.memStats.bySize.160.frees",
            36456,
          ],
          Array [
            "geth.memStats.bySize.176.mallocs",
            10971,
          ],
          Array [
            "geth.memStats.bySize.176.frees",
            9179,
          ],
          Array [
            "geth.memStats.bySize.192.mallocs",
            33315,
          ],
          Array [
            "geth.memStats.bySize.192.frees",
            27187,
          ],
          Array [
            "geth.memStats.bySize.208.mallocs",
            67116,
          ],
          Array [
            "geth.memStats.bySize.208.frees",
            54771,
          ],
          Array [
            "geth.memStats.bySize.224.mallocs",
            16434,
          ],
          Array [
            "geth.memStats.bySize.224.frees",
            13653,
          ],
          Array [
            "geth.memStats.bySize.240.mallocs",
            10166,
          ],
          Array [
            "geth.memStats.bySize.240.frees",
            8259,
          ],
          Array [
            "geth.memStats.bySize.256.mallocs",
            5996,
          ],
          Array [
            "geth.memStats.bySize.256.frees",
            4873,
          ],
          Array [
            "geth.memStats.bySize.288.mallocs",
            68481,
          ],
          Array [
            "geth.memStats.bySize.288.frees",
            56305,
          ],
          Array [
            "geth.memStats.bySize.320.mallocs",
            29188,
          ],
          Array [
            "geth.memStats.bySize.320.frees",
            23838,
          ],
          Array [
            "geth.memStats.bySize.352.mallocs",
            15317,
          ],
          Array [
            "geth.memStats.bySize.352.frees",
            12758,
          ],
          Array [
            "geth.memStats.bySize.384.mallocs",
            8905,
          ],
          Array [
            "geth.memStats.bySize.384.frees",
            6371,
          ],
          Array [
            "geth.memStats.bySize.416.mallocs",
            508,
          ],
          Array [
            "geth.memStats.bySize.416.frees",
            383,
          ],
          Array [
            "geth.memStats.bySize.448.mallocs",
            464221,
          ],
          Array [
            "geth.memStats.bySize.448.frees",
            379440,
          ],
          Array [
            "geth.memStats.bySize.480.mallocs",
            1576,
          ],
          Array [
            "geth.memStats.bySize.480.frees",
            1336,
          ],
          Array [
            "geth.memStats.bySize.512.mallocs",
            61050,
          ],
          Array [
            "geth.memStats.bySize.512.frees",
            50069,
          ],
          Array [
            "geth.memStats.bySize.576.mallocs",
            32534,
          ],
          Array [
            "geth.memStats.bySize.576.frees",
            26060,
          ],
          Array [
            "geth.memStats.bySize.640.mallocs",
            17763,
          ],
          Array [
            "geth.memStats.bySize.640.frees",
            13972,
          ],
          Array [
            "geth.memStats.bySize.704.mallocs",
            1119,
          ],
          Array [
            "geth.memStats.bySize.704.frees",
            947,
          ],
          Array [
            "geth.memStats.bySize.768.mallocs",
            384,
          ],
          Array [
            "geth.memStats.bySize.768.frees",
            353,
          ],
          Array [
            "geth.memStats.bySize.896.mallocs",
            4482,
          ],
          Array [
            "geth.memStats.bySize.896.frees",
            3666,
          ],
          Array [
            "geth.memStats.bySize.1024.mallocs",
            1648,
          ],
          Array [
            "geth.memStats.bySize.1024.frees",
            1386,
          ],
          Array [
            "geth.memStats.bySize.1152.mallocs",
            3088,
          ],
          Array [
            "geth.memStats.bySize.1152.frees",
            2578,
          ],
          Array [
            "geth.memStats.bySize.1280.mallocs",
            1064,
          ],
          Array [
            "geth.memStats.bySize.1280.frees",
            897,
          ],
          Array [
            "geth.memStats.bySize.1408.mallocs",
            1112,
          ],
          Array [
            "geth.memStats.bySize.1408.frees",
            981,
          ],
          Array [
            "geth.memStats.bySize.1536.mallocs",
            30023,
          ],
          Array [
            "geth.memStats.bySize.1536.frees",
            24384,
          ],
          Array [
            "geth.memStats.bySize.1792.mallocs",
            850,
          ],
          Array [
            "geth.memStats.bySize.1792.frees",
            328,
          ],
          Array [
            "geth.memStats.bySize.2048.mallocs",
            553,
          ],
          Array [
            "geth.memStats.bySize.2048.frees",
            440,
          ],
          Array [
            "geth.memStats.bySize.2304.mallocs",
            427,
          ],
          Array [
            "geth.memStats.bySize.2304.frees",
            343,
          ],
          Array [
            "geth.memStats.bySize.2688.mallocs",
            1366,
          ],
          Array [
            "geth.memStats.bySize.2688.frees",
            1196,
          ],
          Array [
            "geth.memStats.bySize.3072.mallocs",
            393,
          ],
          Array [
            "geth.memStats.bySize.3072.frees",
            276,
          ],
          Array [
            "geth.memStats.bySize.3200.mallocs",
            124,
          ],
          Array [
            "geth.memStats.bySize.3200.frees",
            83,
          ],
          Array [
            "geth.memStats.bySize.3456.mallocs",
            380,
          ],
          Array [
            "geth.memStats.bySize.3456.frees",
            327,
          ],
          Array [
            "geth.memStats.bySize.4096.mallocs",
            3228,
          ],
          Array [
            "geth.memStats.bySize.4096.frees",
            2703,
          ],
          Array [
            "geth.memStats.bySize.4864.mallocs",
            687,
          ],
          Array [
            "geth.memStats.bySize.4864.frees",
            577,
          ],
          Array [
            "geth.memStats.bySize.5376.mallocs",
            121,
          ],
          Array [
            "geth.memStats.bySize.5376.frees",
            88,
          ],
          Array [
            "geth.memStats.bySize.6144.mallocs",
            346,
          ],
          Array [
            "geth.memStats.bySize.6144.frees",
            286,
          ],
          Array [
            "geth.memStats.bySize.6528.mallocs",
            50,
          ],
          Array [
            "geth.memStats.bySize.6528.frees",
            37,
          ],
          Array [
            "geth.memStats.bySize.6784.mallocs",
            23,
          ],
          Array [
            "geth.memStats.bySize.6784.frees",
            22,
          ],
          Array [
            "geth.memStats.bySize.6912.mallocs",
            13,
          ],
          Array [
            "geth.memStats.bySize.6912.frees",
            10,
          ],
          Array [
            "geth.memStats.bySize.8192.mallocs",
            551,
          ],
          Array [
            "geth.memStats.bySize.8192.frees",
            456,
          ],
          Array [
            "geth.memStats.bySize.9472.mallocs",
            320,
          ],
          Array [
            "geth.memStats.bySize.9472.frees",
            249,
          ],
          Array [
            "geth.memStats.bySize.9728.mallocs",
            22,
          ],
          Array [
            "geth.memStats.bySize.9728.frees",
            17,
          ],
          Array [
            "geth.memStats.bySize.10240.mallocs",
            25,
          ],
          Array [
            "geth.memStats.bySize.10240.frees",
            17,
          ],
          Array [
            "geth.memStats.bySize.10880.mallocs",
            1740,
          ],
          Array [
            "geth.memStats.bySize.10880.frees",
            1467,
          ],
          Array [
            "geth.memStats.bySize.12288.mallocs",
            32,
          ],
          Array [
            "geth.memStats.bySize.12288.frees",
            21,
          ],
          Array [
            "geth.memStats.bySize.13568.mallocs",
            293,
          ],
          Array [
            "geth.memStats.bySize.13568.frees",
            242,
          ],
          Array [
            "geth.memStats.bySize.14336.mallocs",
            33,
          ],
          Array [
            "geth.memStats.bySize.14336.frees",
            18,
          ],
          Array [
            "geth.memStats.bySize.16384.mallocs",
            45,
          ],
          Array [
            "geth.memStats.bySize.16384.frees",
            38,
          ],
          Array [
            "geth.memStats.bySize.18432.mallocs",
            24,
          ],
          Array [
            "geth.memStats.bySize.18432.frees",
            17,
          ],
          Array [
            "geth.memStats.bySize.19072.mallocs",
            1716,
          ],
          Array [
            "geth.memStats.bySize.19072.frees",
            1446,
          ],
        ]
    `);
});
