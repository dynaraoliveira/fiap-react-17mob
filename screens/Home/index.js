import React from 'react';
import { StyleSheet } from 'react-native';

import Seasons from '../../components/Seasons';
import LogoTitle from '../../components/LogoTitle';

import { SafeAreaView } from 'react-navigation';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  
  getData(season) {
    this.props.navigation.navigate('Menu', {
      season,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons handleClick={this.getData} />
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
