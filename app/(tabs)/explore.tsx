import DownloadPicture from "@/components/ButtomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default function explore() {
  const [pictureOpen, setPictureOpen] = useState<null | Wallpaper>();
  const wallpaperImage = useWallpapers();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "white", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/-xNpsnA3SxOKMJnPZuoqtw",
            }}
          />
        }
      >
        <Text style={styles.text}>Explore</Text>
        <View>
          <View>
            {wallpaperImage
              ? wallpaperImage.map((x: Wallpaper, index: number) => (
                  <View style={styles.innercontainer} key={index}>
                    <ImageCard wallpaper={x} onPress={
                      () => {
                        setPictureOpen(x);
                      }
                    }/>
                  </View>
                ))
              : "Loading... "}
          </View>
        </View>
      </ParallaxScrollView>
      {pictureOpen && (
          <DownloadPicture wallpaper={pictureOpen} onClose={() => setPictureOpen(null)} />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  innercontainer: {
    flex: 1,
    padding: 1,
    gap: 1,
    overflow: "hidden",
  },
  text: { 
    fontSize: 25,
    fontWeight: "bold",
  },
});

