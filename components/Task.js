import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Task extends Component {

  render() {

    const decoration = this.props.content.done ? 
                        {textDecorationLine: 'line-through'} : 
                        {}

    return (
      <View style={styles.task}>
        <Text style={[styles.content, decoration]} onPress={this.props.onPress}>
        {this.props.content.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: '#000'
  },
  content: {
    fontSize: 20,
    textAlign: 'center'
  }
});