var connections = { 
  clozemaster: {
    name: 'Clozemaster',
    href: 'https://www.clozemaster.com/api/v1/players/{{username}}',
    parser: function (data) { return JSON.parse(data)['score'] },
  }
}

var clientAppName = 'Clozeminder'

module.exports.connections = connections
module.exports.clientAppName = clientAppName