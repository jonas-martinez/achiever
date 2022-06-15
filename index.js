'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      userData: require('./widgets/userData'),
      counters: require('./widgets/counters'),
      counter: require('./widgets/counter'),
      game: require('./widgets/game'),
      firstTimePage: require('./views/firstTimePage'),
    },
    listeners: {
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      onEnvStart: require('./listeners/onEnvStart'),
      setSteamID: require('./listeners/setSteamID'),
    },
    rootWidget: 'firstTimePage'
  }
}