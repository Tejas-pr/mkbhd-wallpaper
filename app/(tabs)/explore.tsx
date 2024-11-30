import DownloadPicture from "@/components/ButtomSheet";
import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Button, Image, SafeAreaView, Text, View, StyleSheet } from "react-native";

export default function explore() {
  const [pictureOpen, setPictureOpen] = useState(false);
  const wallpaperImage = useWallpapers();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ flex: 1 }}>
        <Text>Explore</Text>
        <Button
          title="Open Bottom Page"
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>

        {pictureOpen && (
          <DownloadPicture onClose={() => setPictureOpen(false)} />
        )}
      </View> */}

      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/-xNpsnA3SxOKMJnPZuoqtw",
            }}
          />
        }
      >
        <Text>Explore</Text>
        <View>
          <View >
            {wallpaperImage.map((x: Wallpaper, index: number) =>
              <View style={styles.innercontainer} key={index}>
                <ImageCard wallpaper={x}/>
              </View>
            )}
          </View>
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  innercontainer: {
    flex: 1,
    padding: 1,
    gap: 1
  },
})