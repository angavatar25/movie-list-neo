const config = {
  apps: [
    {
      name: "neobank-movie-app",
      script: "npm",
      args: "run start",
      cwd: "/Users/engavatar25/Documents/NextJS/neobank-movie-app",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
}

export default config;