module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'my-zqs-project',
      script: './build',
      instances: 'max',
      exec_mode: "cluster",
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: '80',
        DOMAIN: 'example.com',
        IP: '8.8.8.8'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '8.8.8.8',
      ref: 'origin/master',
      repo: 'git@xxx.git',
      path: '/root/server',
      'post-deploy': 'source /root/.bashrc && npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
