import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

import style from './style';

class MenuItem extends PureComponent {
  renderMenuItems() {
    let items = [];

    items.push(
      <Button style={style.button} key={`season`} onPress={() => this.props.handleClickRaces()}>
        <Text>
          {'Corridas'}
        </Text>
      </Button>
    )
    
    items.push(
      <Button style={style.button} key={`drivers`}>
        <Text>
          {'Pilotos'}
        </Text>
      </Button>
    )

    return items;
  }

  render() {
    return (
      <View style={style.container}>
        { this.renderMenuItems() }
      </View>
    )
  }
}

export default MenuItem;