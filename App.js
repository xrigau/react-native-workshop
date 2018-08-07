import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Switch } from 'react-native';

const todos = [
  {
    name: "Take the dog out",
    checked: false
  },
  {
    name: "Buy potato chips",
    checked: true
  },
  {
    name: "Become millionaire",
    checked: false
  }
];

const TodoItem = ({ name, checked, onTodoChanged }) => (
  <View style={{ flexDirection: 'row' }}>
    <Text>{name}</Text>
    <Switch value={checked} onValueChange={value => onTodoChanged(name, value)} />
  </View>
)

const TodoList = ({ items, onTodoChanged }) => {
  const renderItem = ({ item }) => (<TodoItem name={item.name} checked={item.checked} onTodoChanged={(name, value) => onTodoChanged(name, value)} />);

  return <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={(item) => item.name}
  />
};

export default class App extends React.Component {

  state = {
    todos: todos
  };

  render() {
    const onTodoChanged = (name, checked) => {
      this.setState(oldState => {
        const newTodos = oldState.todos.map(todo => {
          if (todo.name !== name) return todo;
          return { ...todo, checked };
        });
        return { todos: newTodos };
      });
    };

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <TodoList items={this.state.todos} onTodoChanged={(name, value) => onTodoChanged(name, value)} />
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
