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
      gamePageContainer: require('./views/gamePageContainer'),
      gameList: require('./views/gameList'),
      gameCard: require('./views/gameCard'),
      gameCardAchievements: require('./views/gameCardAchievements'),
      resetDatabaseButton: require('./views/resetDatabaseButton'),
    },
    listeners: {
      onSessionStart: require('./listeners/onSessionStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      onEnvStart: require('./listeners/onEnvStart'),
      setSteamID: require('./listeners/setSteamID'),
      navigate: require('./listeners/navigator'),
      debug: require('./listeners/debug'),
      getUserGames: require('./listeners/getUserGames'),
      resetDatabase: require('./listeners/resetDatabase'),
    },
    rootView: 'main'
  }
}