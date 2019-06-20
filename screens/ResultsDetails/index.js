import React from 'react';

import { SafeAreaView, ScrollView } from 'react-navigation';
import { List, ListItem, Text, View } from 'native-base';

import styles from './style';

export default class ResultsDetails extends React.Component {
  constructor() {
    super();
    this.getDateFormatted = this.getDateFormatted.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  state = {
    results: [],
    raceName: "",
  };

  static navigationOptions = {
    title: 'Resultados',
  };

  componentDidMount() {
    season = this.props.navigation.getParam('season');
    round = this.props.navigation.getParam('round');
    this.getData(season, round)
  }

  getData(season, round) {
    fetch(`http://ergast.com/api/f1/${season}/${round}/results.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data.MRData.RaceTable.Races[0].Results,
          raceName: data.MRData.RaceTable.Races[0].raceName,
        });
      });
  }

  getDateFormatted(dateString){
    dateString = String(dateString).split(' ');
    dateSplit = String(dateString[0]).split('-');
    return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
  }

  renderResults(item) {
    const timeVar = item.Time;
    if (timeVar == undefined) {
      timeString = ""
    } else {
      timeString = `Tempo ${timeVar.time}`
    }
    
    return (
      <ListItem key={item.position}>
        <Text style={styles.subTitle}>{`Posição ${item.position}`}</Text>
        <Text>
          {`${item.Driver.givenName} ${item.Driver.familyName}`}
          {"\n"}
          {`Grade ${item.grid} | Voltas ${item.laps} | ${timeString}`}
          {"\n"}
          {`Status ${item.status} | Pontos ${item.points}`}
        </Text>
      </ListItem>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            {`Temporada ${season}`}
          </Text>
          <Text style={styles.title}>
            {this.state.raceName}
          </Text>
        </View>
        <ScrollView>
          <List>
            {this.state.results.map(this.renderResults)}
          </List>
        </ScrollView>
      </SafeAreaView>
    );
  }
}