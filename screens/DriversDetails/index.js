import React from 'react';

import { Linking } from 'react-native';

import { SafeAreaView, ScrollView } from 'react-navigation';
import { List, ListItem, Text, View, Button } from 'native-base';

import styles from './style';

export default class DriversDetails extends React.Component {
  constructor() {
    super();
    this.getDateFormatted = this.getDateFormatted.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  static navigationOptions = {
    title: 'Pilotos',
  };

  componentDidMount() {
    drivers = this.props.navigation.getParam('drivers');
    driverResults = this.props.navigation.getParam('driverResults');
    season = this.props.navigation.getParam('season');
  }

  getDateFormatted(dateString){
    dateString = String(dateString).split(' ');
    dateSplit = String(dateString[0]).split('-');
    return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
  }

  renderDetails(item) {
    return (
      <View key={item.driverId}>
        <Text style={styles.title}>
          {`${item.givenName} ${item.familyName}`}
        </Text>
        <Text style={styles.subTitle}>
          {`Nascido em ${this.getDateFormatted(item.dateOfBirth)}`}
        </Text>
        <Text style={styles.subTitle}>
          {`Nacionalidade ${item.nationality}`}
        </Text>
        <Button style={styles.button} title="more" onPress={ ()=>{ Linking.openURL(item.url)}} >
          <Text>
            Saiba mais
          </Text>
        </Button>
      </View>
    )
  }
  
  renderResults(item) {
    const timeVar = item.Results[0].Time;
    if (timeVar == undefined) {
      timeString = ""
    } else {
      timeString = `Tempo ${timeVar.time}`
    }
    
    return (
      <ListItem key={item.round}>
        <Text>
          {`Corrida ${item.raceName} | ${this.getDateFormatted(item.date)}`}
          {"\n"}
          {`Posição ${item.Results[0].position} | Grade ${item.Results[0].grid}`}
          {"\n"}
          {`Voltas ${item.Results[0].laps} | ${timeString}`}
          {"\n"}
          {`Status ${item.Results[0].status} | Pontos ${item.Results[0].points}`}
        </Text>
      </ListItem>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {drivers.map(this.renderDetails)}
          <Text style={styles.title}>
            {`Temporada ${season}`}
          </Text>
          <ScrollView>
            <List>
              {driverResults.map(this.renderResults)}
            </List>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}