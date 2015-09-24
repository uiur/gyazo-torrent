var WebTorrent = require('webtorrent')
var client = new WebTorrent()
var exec = require('child_process').exec
var tmp = require('tmp')
var tmpFileName = tmp.fileSync({ postfix: '.png' }).name
var shell = require('shell')

exec('screencapture -i ' + tmpFileName, function (err, stdout) {
  if (err) throw err

  client.seed(tmpFileName, function onTorrent (torrent) {
    shell.openExternal('https://instant.io/#' + torrent.infoHash)
  })
})
