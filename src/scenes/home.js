// @flow

import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button, Text } from 'native-base'

import { Grid } from '../components/grid'
import { Title } from '../components/title'
import { checkWin, isBoardFull } from '../utils/checks'

type Player = string

type State = {|
  boards: {
    [case: string]: ?Player
  },
  currentPlayer: Player,
  end: boolean,
  playerWon: ?Player,
  equality: boolean
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
  end: false,
  equality: false
}

export class HomeScene extends React.Component<{}, State> {
  state = initialState

  render () {
    const { boards, currentPlayer, end, playerWon, equality } = this.state

    return (
      <View style={styles.container}>
        {end ? (
          <View>
            {equality ? <Title>Equality ! Nobody win 😕</Title> : null}
            {playerWon ? <Title>Player {playerWon} win</Title> : null}
            <Button primary onPress={this._restartGame}>
              <Text>Restart game</Text>
            </Button>
          </View>
        ) : (
          <React.Fragment>
            <View style={{ marginBottom: 10 }}>
              <Title>Current player</Title>
              <Title style={{ textAlign: 'center' }}>{currentPlayer}</Title>
            </View>
            <Grid cells={boards} updateCell={this._updateCell} currentPlayer={currentPlayer} />
          </React.Fragment>
        )}
      </View>
    )
  }

  _restartGame = () => this.setState(initialState)

  _updateCell = ({ i, value }) => () => {
    const { boards, currentPlayer } = this.state

    if (boards[`x${i}`]) {
      return
    }

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
    } else if (isBoardFull(newBoard)) {
      this.setState(prevState => ({
        ...prevState,
        end: true,
        equality: true
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        boards: newBoard,
        currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X'
      }))
    }
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
