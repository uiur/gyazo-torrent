# gyazo-torrent
A p2p screenshot sharing tool using [webtorrent](https://github.com/feross/webtorrent).   
In other words, [gyazo](https://github.com/nota/Gyazo) without servers.

This app is an early prototype. Works only on Mac OSX.
The uploading speed is very slow.

## How it works
1. take a screenshot
2. upload it to torrent via webtorrent
3. open the torrent link with [instant.io](https://instant.io/)

[![Gyazo](https://i.gyazo.com/90883f3c1b6461b58c79f5683b7a5222.png)](https://gyazo.com/90883f3c1b6461b58c79f5683b7a5222)

## How to use
Clone this repo and

```
npm install -g electron-prebuilt
npm install
npm start
```

## License
ISC
