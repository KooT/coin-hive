const CoinHive = require('coin-hive');

(async () => {

  // Create miner
  const miner = await CoinHive('EE3W9GjTXHTnNhQZqpUgXrr3o2OBcLYH'); // Coin-Hive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));

  // Stop miner

})();
var port = process.env.PORT || 8080;

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});

server.listen(port);
