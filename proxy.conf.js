const Proxy_config = [
  {
    context: ['/api'],
    target: 'http://localhost:8080',
    secure: false,
    loglevel: 'debug'
  }
];

module.exports = Proxy_config;
