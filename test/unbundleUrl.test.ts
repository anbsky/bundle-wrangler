import { bundleToVideo, unbundleUrl } from '../src';

describe('bundle', () => {
  it('can be served as video', async () => {
      const url = "https://server.arfleet.zephyrdev.xyz/explore/f59885a70b7e1832b333d8d9d7c77eba91ba102a20506f65c8c7446ea9f09728";
      const feed = await bundleToVideo(url);
      const bundle = await unbundleUrl(url);
      const ids = await bundle.getIds();
      console.log(ids);
      console.log(await bundle.get(0));
      console.log(await bundle.get(ids[0]));
      console.log(await bundle.get(ids[0]).isValid());
      // console.log(await bundle.get(ids[0]).id);
      console.log(await bundle.get(0));
      console.log(await bundle.get(0).isValid());
      console.log(await bundle.get(0).id);
      expect(feed).toMatch(/blob:nodedata:\w+/);
  }, 15000);
});

