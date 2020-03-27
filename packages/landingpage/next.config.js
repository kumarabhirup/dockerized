require('dotenv').config()

module.exports = {
  env: {
    PROPAGATEAT_LANDING_GA_TRACKING_ID: process.env.PROPAGATEAT_LANDING_GA_TRACKING_ID,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    
    return config
  },
}
