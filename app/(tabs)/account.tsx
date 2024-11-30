import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function account() {
  return (
    <View>
      <Text>Account</Text>

      <Link href={"/accountInfo"}>account info</Link>
    </View>
  );
}
