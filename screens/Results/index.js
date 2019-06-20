import React from 'react';

import { SafeAreaView } from 'react-navigation';
import { List, ListItem, Text } from 'native-base';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.callResultsDetails = this.callResultsDetails.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  state = {
    races: [],
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.getData(season)
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/races.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          races: data.MRData.RaceTable.Races,
        });
      });
  }

  callResultsDetails(round) {
    season = this.props.navigation.getParam('season');
    this.props.navigation.navigate('ResultsDetails', {
      season,
      round,
    });
  }

  renderRow(item) {
    return (
      <ListItem key={item.round} button onPress={() => this.callResultsDetails(item.round)}>
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