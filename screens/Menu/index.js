import React from 'react';
import { StyleSheet } from 'react-native';

import MenuItem from '../../components/MenuItem';
import LogoTitle from '../../components/LogoTitle';

import { SafeAreaView } from 'react-navigation';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.callRaces = this.callRaces.bind(this);
  }

  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  callRaces() {
    season = this.props.navigation.getParam('season');
    this.props.navigation.navigate('Races', {
      season,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MenuItem handleClickRaces={this.callRaces}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
