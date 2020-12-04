import * as React from 'react';
import { Text, View, Button } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

function EventsHomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events Home!</Text>
        <Button title="Second Screen" onPress= { () => navigation.navigate("EventsSecond")}></Button>
      </View>
    );
}

function EventsSecondScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Second Screen!</Text>
      </View>
    );
}

const Stack = createStackNavigator();

export default function EventsScreen() {
    return (
     <Stack.Navigator>
         <Stack.Screen name="EventsHome" component={EventsHomeScreen}></Stack.Screen>
         <Stack.Screen name="EventsSecond" component={EventsSecondScreen}></Stack.Screen>
     </Stack.Navigator>
    );
  }