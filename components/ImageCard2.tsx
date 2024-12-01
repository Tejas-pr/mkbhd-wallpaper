import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, View, StyleSheet, Pressable, Text } from "react-native";

export default function ImageCard2({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <Text style={styles.text}>{wallpaper.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        padding: 20,
        margin: 10,
        borderRadius: 20,
        width: 170,
        display: "flex",
        // justifyContent: "center",
    },
  image: {
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontWeight: 500,
    fontSize: 20,
  },
});
