import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Chart from '../../compoments/f2-chart/index';

type Props = {};
export default class Index extends Component<Props> {
  static navigationOptions = {
    title: 'Link',
  };
  constructor(props) {
    super(props);
    this.state = {
      chatData: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ]};
  }
  render() {
    return (
      <View style={styles.container}>
        <Chart data={this.chatData}></Chart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
