import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function explore() {
    return <View>
        <Text>Explore2</Text>

        <Link href={"/accountInfo"}>
            account info
        </Link>
    </View>
} 