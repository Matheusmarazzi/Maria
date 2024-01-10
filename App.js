import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './src/components/Timer'
import RequestNotification from './src/Services/Request';
import GoodMorning from './src/Services/GoodMorning';
import Notfication from './src/Services/Notification';
import MapMoments from './src/components/Map';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  const Tab = createBottomTabNavigator();
  RequestNotification()
  GoodMorning()
  Notfication()

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Timer" component={Timer} />
          <Tab.Screen name="Map" component={MapMoments} />
        </Tab.Navigator>
      </NavigationContainer>
    </>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
