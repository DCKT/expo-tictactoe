// @flow

import React from 'react'
import { Text } from 'react-native'

type Props = {|
  children: string,
  fontSize?: number,
  style?: Object
|}

export const Title = ({ children, fontSize, style }: Props) => (
  <Text style={[{ fontFamily: 'Avengeance', fontSize: fontSize || 24 }, style || {}]}>{children}</Text>
)
