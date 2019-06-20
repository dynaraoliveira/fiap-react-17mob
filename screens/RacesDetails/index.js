import React from 'react';

import { Linking } from 'react-native';

import { SafeAreaView } from 'react-navigation';
import { Text, View, Button } from 'native-base';

import styles from './style';

export default class RacesDetails extends React.Component {
  constructor() {
    super();
    this.getDateFormatted = this.getDateFormatted.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }

  static navigationOptions = {
    title: 'Detalhes',
  };

  state = {
    races: [],
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    const round = this.props.navigation.getParam('round');
    this.getData(season, round)
  }

  getData(season, round) {
    fetch(`http://ergast.com/api/f1/${season}/${round}/races.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          races: data.MRData.RaceTable.Races,
        });
      });
  }

  getDateFormatted(dateString){
    dateString = String(dateString).split(' ');
    dateSplit = String(dateString[0]).split('-');
    return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
  }

  renderDetails(item) {
    return (
      <View key={item.round} style={styles.container}>
        <Text style={styles.title}>
          {item.raceName}
        </Text>
        <Text style={styles.subTitle}>
          {`Aconteceu em ${this.getDateFormatted(item.date)}`}
        </Text>
        <Button style={styles.button} title="more" onPress={ ()=>{ Linking.openURL(item.url)}} >
          <Text>
            Saiba mais
          </Text>
        </Button>
        <Text style={styles.subTitle}>
          {`Circuito ${item.Circuit.circuitName}`}
        </Text>
        <Text style={styles.contentText}>
          {`${item.Circuit.Location.locality} - ${item.Circuit.Location.country}`}
        </Text>
        <Button style={styles.button} title="about" onPress={ ()=>{ Linking.openURL(item.Circuit.url)}} >
          <Text>
            Sobre circuito
          </Text>
        </Button>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.races.map(this.renderDetails)}
      </SafeAreaView>
    );
  }
}