# Arweave Bundle Wrangler

## How to install

```
yarn
yarn build
yarn link
```

In your project:

```
yarn link bundle-wrangler
```

## How to use

```javascript
const url = await bundleToVideo(bundleUrl);
player.src({ type: 'video/mp4', src: url });

player.on('loadeddata', function() {
  URL.revokeObjectURL(url);
});
```
