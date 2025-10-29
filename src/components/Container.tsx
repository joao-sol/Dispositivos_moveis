import React, { PropsWithChildren } from 'react'
import { View, Button } from 'react-native'
import { styles } from './Control'
import { useThemeContext } from '../contexts/ThemeContext'
import { ViewProps } from 'react-native'

type ContainerProps = ViewProps

export default function Container({ children, style }: ViewProps) {
    const theme = useThemeContext();

  return (
    <View style={[{backgroundColor: theme.colors.backgroundColor}, style]}>
        {children}
      </View>
  )
}
