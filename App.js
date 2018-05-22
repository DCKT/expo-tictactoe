// @flow

import React from 'react'
import { Font, AppLoading } from 'expo'
import { HomeScene } from './src/scenes/home'

export default class App extends React.Component<{}> {
  state = {
    isReady: false
  }

  render () {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return <HomeScene />
  }

  async _cacheResourcesAsync () {
    await Font.loadAsync({
      Avengeance: require('./assets/fonts/avengeance.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
  }
}
