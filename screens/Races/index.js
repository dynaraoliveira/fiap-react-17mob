import React from 'react';

import { SafeAreaView } from 'react-navigation';
import { List, ListItem, Text } from 'native-base';

export default class Races extends React.Component {
  
  constructor(props) {
    super(props);
    this.callRacesDetails = this.callRacesDetails.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  static navigationOptions = {
    title: 'Corridas',
  };

  state = {
    races: [],
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.getData(season)
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          races: data.MRData.RaceTable.Races,
        });
      });
  }

  callRacesDetails(round) {
    season = this.props.navigation.getParam('season');
    this.props.navigation.navigate('RacesDetails', {
      season,
      round,
    });
  }

  renderRow(item) {
    return (
      <ListItem key={item.round} button onPress={() => this.callRacesDetails(item.round)}>
        <Text>
          {item.raceName}
        </Text>
      </ListItem>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <List>
          {this.state.races.map(this.renderRow)}
        </List>
      </SafeAreaView>
    );
  }
}
