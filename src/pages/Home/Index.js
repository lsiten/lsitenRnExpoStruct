import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {add, minus, asyncAdd, user_get_user_list} from '../../store/actions/counter'

class Index extends Component {
  static navigationOptions = {
    title: '首页',
  };
  
  componentDidMount() {
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home{this.props.counter}</Text>
        <View style={styles.button}>
          <Button size='large' onPress={this.props.add} title="增加"/>
        </View>
        <View style={styles.button}>
          <Button size='large' onPress={this.props.dec} title="减少"/>
        </View>
        <View style={styles.button}>
          <Button size='large' onPress={this.props.asyncAdd} title="异步增加"/>
        </View>
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
  },
  button: {
    marginTop: 20
  }
});
export default connect(state => ({
    counter: state.counter.num
  }),
  (dispatch) => ({
    user_get_user_list() {
      dispatch(user_get_user_list())
    },
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)(Index);
