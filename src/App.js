import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AddScreen from './screens/AddScreen/AddScreen';
import EditScreen from './screens/EditScreen/EditScreen';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
          <Stack.Screen name="Add" component={AddScreen} options={{ title: 'Add new book' }}/>
          <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Edit' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;