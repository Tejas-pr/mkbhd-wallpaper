import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { Image, Text, View, StyleSheet } from "react-native";
export default function ImageCard({ wallpaper }: { wallpaper: Wallpaper }) {

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
      <Image
        source={{ uri: wallpaper.url }}
        style={styles.image}
      />
      <Text style={styles.text}>{wallpaper.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  innercontainer: {
    flex: 0.5
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10
  },
  text: {
    flex: 1,
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
