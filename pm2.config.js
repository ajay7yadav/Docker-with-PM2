module.exports = {
    apps: [
      {
        name: 'my-node-app',
        script: 'index.js',
        watch: true,
        ignore_watch: ['node_modules'],
        instances: 1, // Maximum number of instances
        exec_mode: 'cluster', // Enables clustering mode
      },
    ],
};
  