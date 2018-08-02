import React, {Component} from 'react';
import Task from './components/Task'
import {StyleSheet, FlatList, View, ToolbarAndroid} from 'react-native';

export default class App extends Component {

  constructor() {

    super();

    this.state = {tasks: [
      {id: 1, text: "my testaaa", done: false},
      {id: 2, text: "my task 2", done: true},
      {id: 3, text: "my task 3", done: true}
    ]}

    this.onTaskClick = this.onTaskClick.bind(this)
  }

  onTaskClick(index) {
    const tasks = [...this.state.tasks]
    tasks[index].done = !tasks[index].done

    this.setState({tasks})
  }

  render() {
    return (

    <View style={styles.container}>

        <ToolbarAndroid
            style={styles.toolbar}
            title="AwesomeApp"
            actions = {[
                {title: "About", show: "never"}
              ]}/>

        <FlatList 
            style={styles.tasks} 
            data={this.state.tasks} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => 
            <Task id={index} content={item} onPress={this.onTaskClick}/>} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    
  toolbar: {
    backgroundColor: '#2196F3',
    height: '10%'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch'
  },

  tasks: {
    margin: '10%',
    backgroundColor: '#F5FCFF'
  }
});