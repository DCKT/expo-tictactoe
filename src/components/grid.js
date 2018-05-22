// @flow

import React from 'react'
import { View } from 'react-native'
import { Cell } from './cell'

type Props = {|
  cells: Array<Array<string>>,
  currentPlayer: string,
  updateCell: Function
|}

const grid = new Array(9).fill(null)

export const Grid = ({ cells, updateCell, currentPlayer }: Props) => (
  <View
    style={{
      flex: 0,
      maxWidth: 300,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {grid.map((cell, i) => <Cell value={cells[`x${i}`]} key={i} onPress={updateCell({ i, value: currentPlayer })} />)}
  </View>
)
