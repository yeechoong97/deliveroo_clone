import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { TailwindProvider } from 'tailwindcss-react-native';
import store from './redux/store';
import BasketScreen from './screens/BasketScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: "modal", headerShown: false }} />
          </Stack.Navigator>
        </TailwindProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};



export default App;
