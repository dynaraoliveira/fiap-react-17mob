import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

import MenuItem from '../../components/MenuItem';
import LogoTitle from '../../components/LogoTitle';

import { SafeAreaView } from 'react-navigation';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.callRaces = this.callRaces.bind(this);
    this.callDrivers = this.callDrivers.bind(this);
    this.callResults = this.callResults.bind(this);
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

  callDrivers() {
    season = this.props.navigation.getParam('season');
    this.props.navigation.navigate('Drivers', {
      season,
    });
  }

  callResults() {
    season = this.props.navigation.getParam('season');
    this.props.navigation.navigate('Results', {
      season,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{`Temporada ${this.props.navigation.getParam('season')}`}</Text>
        <MenuItem 
          handleClickRaces={this.callRaces} 
          handleClickDrivers={this.callDrivers}
          handleClickResults={this.callResults}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
