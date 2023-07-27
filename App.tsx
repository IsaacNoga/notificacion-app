import React from 'react';
import NotificationFrom from './screens/NotificationForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationLog from './screens/NotificationLog';

const Roostack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Roostack.Navigator initialRouteName="Notifications">
        <Roostack.Screen name="Notifications" component={NotificationFrom} />
        <Roostack.Screen
          name="Notifications Sent"
          component={NotificationLog}
        />
      </Roostack.Navigator>
    </NavigationContainer>
  );
}

export default App;
