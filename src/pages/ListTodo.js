import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {selectTodos, selectTodosError} from '../redux/reducer';
import {
  removeTodo as removeTodoAction,
  requestTodo,
} from '../redux/action.types';

const ListTodo = ({navigation}) => {
  const todos = useSelector(selectTodos);
  const todosErros = useSelector(selectTodosError);
  const dispatch = useDispatch();

  useEffect(() => {
    console.info('GET TODOS');
    dispatch(requestTodo());
  }, []);

  function removeTodo(todoId) {
    dispatch(removeTodoAction(todoId));
  }

  return (
    <View>
      <Text>List Todo Component</Text>
      <ScrollView style={styles.scroll}>
        {todos.map(todo => {
          {
            /* console.log('todo map', todo); */
          }
          return (
            <TouchableOpacity
              onPress={() => removeTodo(todo.id)}
              key={todo.id}
              style={styles.itemTodo}>
              <Text>{todo.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View>{todosErros ? <Text>Falha ao recuperar todos</Text> : null}</View>
      <View>
        <Button
          title="Novo item"
          onPress={() => navigation.navigate('createTodo')}
        />
      </View>
    </View>
  );
};

export default ListTodo;

const styles = StyleSheet.create({
  itemTodo: {
    margin: 10,
  },

  scroll: {
    margin: 10,
    width: 400,
    height: 400,
  },
});
