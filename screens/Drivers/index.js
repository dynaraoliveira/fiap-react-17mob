import React from 'react';

import { SafeAreaView } from 'react-navigation';
import { List, ListItem, Text } from 'native-base';

export default class Drivers extends React.Component {

  constructor(props) {
    super(props);
    this.callDriversDetails = this.callDriversDetails.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  static navigationOptions = {
    title: 'Pilotos',
  };

  state = {
    drivers: [],
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.getData(season)
  }

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          drivers: data.MRData.DriverTable.Drivers,
        });
      });
  }

  callDriversDetails(driverId) {
    season = this.props.navigation.getParam('season');
    Promise.all([
      fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`),
      fetch(`http://ergast.com/api/f1/${season}/drivers/${driverId}/results.json`)
    ]).then(async([driver, driverResults]) => {
      const driverJson = await driver.json();
      const driverResultsJson = await driverResults.json();
      return [driverJson, driverResultsJson]
    })
    .then((data) => {
      drivers = data[0].MRData.DriverTable.Drivers;
      driverResults = data[1].MRData.RaceTable.Races;
      this.props.navigation.navigate('DriversDetails', {
        drivers,
        driverResults,
        season,
      });
    });
  }

  renderRow(item) {
    return (
      <ListItem key={item.driverId} button onPress={() => this.callDriversDetails(item.driverId)}>
        <Text>
          {`${item.givenName} ${item.familyName}`}
        </Text>     
      </ListItem>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <List>
          {this.state.drivers.map(this.renderRow)}
        </List>
      </SafeAreaView>
    );
  }
}