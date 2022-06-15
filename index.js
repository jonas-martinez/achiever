'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      userData: require('./widgets/userData'),
      firstTimePage: require('./views/firstTimePage'),
    },
    listeners: {
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      onEnvStart: require('./listeners/onEnvStart'),
      setSteamID: require('./listeners/setSteamID'),
      validateFirstTime: require('./listeners/validateFirstTime'),
    },
    rootWidget: 'firstTimePage'
  }
}