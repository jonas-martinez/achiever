'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      userData: require('./widgets/userData'),
      firstTimePage: require('./views/firstTimePage'),
      navigator: require('./widgets/navigator'),
      homePage: require('./views/homePage'),
      gameList: require('./widgets/gameList'),
      gameCard: require('./widgets/gameCard'),
    },
    listeners: {
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      onEnvStart: require('./listeners/onEnvStart'),
      setSteamID: require('./listeners/setSteamID'),
      navigate: require('./listeners/navigator'),
    },
    rootWidget: 'main'
  }
}