'use strict'
// Views

module.exports = async () => {
  return {
    views: {
      main: require('./views/main'),
      userData: require('./views/userData'),
      firstTimePage: require('./views/firstTimePage'),
      navigator: require('./views/navigator'),
      homePage: require('./views/homePage'),
      gamePage: require('./views/gamePage'),
      gameList: require('./views/gameList'),
      gameCard: require('./views/gameCard'),
      gameCardAchievements: require('./views/gameCardAchievements'),
    },
    listeners: {
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      onEnvStart: require('./listeners/onEnvStart'),
      setSteamID: require('./listeners/setSteamID'),
      navigate: require('./listeners/navigator'),
      debug: require('./listeners/debug'),
    },
    rootView: 'main'
  }
}