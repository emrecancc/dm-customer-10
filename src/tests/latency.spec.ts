import { getLatency } from '../src/api';

describe('API latency', () => {
  it('responds within 700ms', async () => {
    const latency = await getLatency();
    expect(latency).toBeLessThan(700);
  });
});