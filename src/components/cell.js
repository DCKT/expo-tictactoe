// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type Props = {|
  value: ?string,
  onPress: Function
|}

export const Cell = ({ value, onPress }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      borderColor: '#000',
      borderWidth: 3,
      width: 80,
      height: 80,
      flex: -1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Text style={{ fontSize: 30 }}>{value}</Text>
  </TouchableOpacity>
)
