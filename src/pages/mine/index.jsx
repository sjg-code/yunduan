import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Mine extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '我的'
  }

  render() {
    return (
      <View className='mine'>
        <Text>我的</Text>
      </View>
    )
  }
}
