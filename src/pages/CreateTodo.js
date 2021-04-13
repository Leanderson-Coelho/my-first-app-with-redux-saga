import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/action.types';

const CreateTodo = ({navigation}) => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  function create() {
    dispatch(addTodo(newTodo, false));
    navigation.navigate('listTodo');
  }

  return (
    <View>
      <Text>CreateTodo Component</Text>
      <TextInput onChangeText={text => setNewTodo(text)} style={styles.input} />
      <Button title="Criar" onPress={create} />
    </View>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    color: '#000',
    marginHorizontal: 10,
    marginTop: 10,
  },
});
