import { Link } from "expo-router";
import { Text, View } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={ProfileScreen2} />
    </Tab.Navigator>
  );
}

function HomeScreen () {
  return <View>
    <Text>hi from Home section</Text>
  </View>
}

function ProfileScreen () {
  return <View>
    <Text>hi from Profile</Text>
  </View>
}

function ProfileScreen2 () {
  return <View>
    <Text>hi from Profile</Text>
  </View>
}