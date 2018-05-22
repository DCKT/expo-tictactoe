// @flow

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Grid } from './src/components/grid'
import { checkWin } from './src/utils/checkWin'

type Player = string

type State = {|
  boards: {
    [case: string]: ?Player
  },
  currentPlayer: Player,
  end: boolean,
  playerWon: ?Player
|}

const initialState = {
  boards: {
    x0: null,
    x1: null,
    x2: null,
    x3: null,
    x4: null,
    x5: null,
    x6: null,
    x7: null,
    x8: null
  },
  currentPlayer: 'X',
  end: false
}

export default class App extends React.Component<{}, State> {
  state = initialState

  render () {
    const { boards, currentPlayer, end, playerWon } = this.state

    return (
      <View style={styles.container}>
        {end ? (
          <View>
            <Text>END</Text>
            {playerWon ? <Text>Player {playerWon} win</Text> : null}
            <TouchableOpacity onPress={this._restartGame}>
              <Text>Restart game</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <React.Fragment>
            <Text style={{ marginBottom: 10 }}>Current player: {currentPlayer}</Text>
            <Grid cells={boards} updateCell={this._updateCell} currentPlayer={currentPlayer} />
          </React.Fragment>
        )}
      </View>
    )
  }

  _restartGame = () => this.setState(initialState)

  _updateCell = ({ i, value }) => () => {
    const { boards, currentPlayer } = this.state
    const newBoard = {
      ...boards,
      [`x${i}`]: currentPlayer
    }

    if (checkWin(newBoard, currentPlayer)) {
      this.setState(prevState => ({
        ...prevState,
        end: true,
        playerWon: currentPlayer
      }))
    } else {
    }
    this.setState(prevState => ({
      ...prevState,
      boards: newBoard,
      currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X'
    }))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
