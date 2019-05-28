import React from 'react';

import { SafeAreaView } from 'react-navigation';
import { List, ListItem, Text } from 'native-base';

export default class Races extends React.Component {
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

  renderRow(item) {
    return (
      <ListItem key={item.round}>
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
