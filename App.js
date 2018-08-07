import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';


const todos = [
  {
    name: "Take the dog out"
  },
  {
    name: "Buy potato chips"
  },
  {
    name: "Become millionaire"
  }
]

const TodoItem = ({ name }) => (
  <Text>{name}</Text>
)

const TodoList = ({ items }) => (
  <FlatList
    data={items}
    renderItem={({ item }) => (<TodoItem name={item.name} />)}
    keyExtractor={(item) => item.name}
    />
)

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <TodoList items={todos} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
