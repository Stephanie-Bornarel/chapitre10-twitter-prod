module.exports = {
  apps: [
    {
      name: "chapitre10-twitter-prod",
      script: "./bin/www",
      instances: "max",
      autorestart: true,
      watch: "true",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
