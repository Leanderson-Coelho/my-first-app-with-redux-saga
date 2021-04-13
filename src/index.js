import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';

const Stack = createStackNavigator();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), );

sagaMiddleware.run(rootSaga);

import ListTodo from './pages/ListTodo';
import CreateTodo from './pages/CreateTodo';
import RemoveTodo from './pages/RemoveTodo';

const RootNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={ListTodo} name="listTodo" />
          <Stack.Screen component={CreateTodo} name="createTodo" />
          <Stack.Screen component={RemoveTodo} name="removeTodo" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export {RootNavigator};
