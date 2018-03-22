import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Home</Text>
        <Button title="Login"
        onPress={() => this.props.navigation.navigate("Login")}/>
      </View>
    )
  }
}

class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Login</Text>
      {/* <Button title="Login"
      onPress={() => this.props.navigation.navigate("Login")}/> */}
      </View>
    )
  }
}

const App = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login }
});



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
