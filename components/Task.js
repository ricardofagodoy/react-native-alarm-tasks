import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Task extends Component {

  handlePress = () => {
    this.props.onPress(this.props.id);
  }

  render() {

    const decoration = this.props.content.done ? 
                        {textDecorationLine: 'line-through'} : 
                        {}

    return (
      <TouchableOpacity style={styles.task} onPress={this.handlePress}>
        <Text style={[styles.content, decoration]}>
          {this.props.content.text}
        </Text>
      </TouchableOpacity>
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