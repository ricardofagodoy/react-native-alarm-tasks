import React, {Component} from 'react';
import Task from './components/Task'
import {StyleSheet, FlatList, View} from 'react-native';

export default class App extends Component {

  constructor() {

    super();

    this.state = {tasks: [
      {id: 1, text: "my testaaa", done: false},
      {id: 2, text: "my task 2", done: true}
    ]}
  }

  onTaskClick(index) {

    const tasks = [...this.state.tasks]
    tasks[index].done = !tasks[index].done

    this.setState({tasks})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.tasks} style={styles.tasks} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => <Task content={item} onPress={() => this.onTaskClick(index)}/>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF'
  },

  tasks: {
    margin: '10%',
    backgroundColor: '#F5FCFF'
  }
});