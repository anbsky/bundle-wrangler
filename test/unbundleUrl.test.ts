import { bundleToVideo } from '../src';

describe('bundle', () => {
  it('can be served as video', async () => {
      const url = "https://server.arfleet.zephyrdev.xyz/explore/f59885a70b7e1832b333d8d9d7c77eba91ba102a20506f65c8c7446ea9f09728";
      const feed = await bundleToVideo(url);
      expect(feed).toMatch(/blob:nodedata:\w+/);
  });
});

