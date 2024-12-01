import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function ImageCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <FontAwesome
            name="heart"
            size={18}
            color="white"
            style={styles.icon}
          />
          <Image source={{ uri: wallpaper.url }} style={styles.image} />
          <Text style={styles.text}>{wallpaper.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginBottom: 15,
  },
  innercontainer: {
    flex: 1,
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 15,
    right: 12,
    zIndex: 1,
  },
  image: {
    height: 150,
    width: 290,
    borderRadius: 20,
  },
  text: {
    flex: 1,
    position: "absolute",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 290,
    color: "white",
    bottom: 0,
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
