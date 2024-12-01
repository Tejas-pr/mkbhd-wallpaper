// Tab Navigator

import DownloadPicture from "@/components/ButtomSheet";
import ImageCard from "@/components/ImageCard";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from "react-native";

const Tab = createMaterialTopTabNavigator();
export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen() {
  return <LayoutScreen />;
}
function LikedScreen() {
  return <LayoutScreen />;
}
function SuggestedScreen() {
  return <LayoutScreen />;
}

function LayoutScreen() {
  const [pictureOpen, setPictureOpen] = useState<null | Wallpaper>();
  const wallpaperImage = useWallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Explore</Text>
      </View>

      {/* Gallery Section */}
      <View style={styles.galleryContainer}>
        {wallpaperImage
          ? wallpaperImage.map((x: Wallpaper, index: number) => (
              <View style={styles.imageWrapper} key={index}>
                <ImageCard
                  wallpaper={x}
                  onPress={() => {
                    setPictureOpen(x);
                  }}
                />
              </View>
            ))
          : <Text>Loading...</Text>}
      </View>

      {/* Bottom Sheet */}
      {pictureOpen && (
        <DownloadPicture wallpaper={pictureOpen} onClose={() => setPictureOpen(null)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  galleryContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Evenly space items in rows
    padding: 10,
    bottom: 50,
  },
  imageWrapper: {
    width: "100%", // Ensures two images fit side by side
    marginBottom: 15, // Space between rows
  },
});
