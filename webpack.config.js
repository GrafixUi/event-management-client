module.exports = {
  target: 'node',
    // other configurations...
    resolve: {
      // ... rest of the resolve config
      fallback: {
        'path': require.resolve('path-browserify/'),
        'util': require.resolve('util/'),
      }
    },
  
  };