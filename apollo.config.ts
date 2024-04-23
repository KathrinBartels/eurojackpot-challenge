module.exports = {
  client: {
    service: {
      name: 'my-app',
      url: 'http://localhost:8010/proxy/graphql'
    },
    includes: ['src/**/*.vue', 'src/**/*.ts']
  }
}
