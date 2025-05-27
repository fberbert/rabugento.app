module.exports = {
  apps: [
    {
      name: 'rabugento-app',
      cwd: '/home/fabio/projetos/rabugento.app',
      script: 'node_modules/.bin/next',
      args: 'start -p 3011',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production'
      },
      watch: false,
      autorestart: true
    }
  ]
}
