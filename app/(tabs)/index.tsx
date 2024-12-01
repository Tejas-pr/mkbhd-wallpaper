// Tab Navigator

import DownloadPicture from "@/components/ButtomSheet";
import ImageCard from "@/components/ImageCard";
import ImageCard2 from "@/components/ImageCard2";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useState } from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();
export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggest" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen() {
  return (
    <View>
      <LayoutScreen />
    </View>
  );
}
function LikedScreen() {
  return (
    <View>
      <LayoutScreen />
    </View>
  );
}

function SuggestedScreen() {
  return (
    <View>
      <LayoutScreen />
    </View>
  );
}

function LayoutScreen() {
  const [pictureOpen, setPictureOpen] = useState<null | Wallpaper>();
  const wallpaperImage = useWallpapers();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width: 150,
          backgroundColor: "black",
          padding: 20,
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/zCBj2DV0T56j-ub8zwxkmQ",
            }}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View>
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/zCBj2DV0T56j-ub8zwxkmQ",
            }}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View>
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/zCBj2DV0T56j-ub8zwxkmQ",
            }}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View>
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/zCBj2DV0T56j-ub8zwxkmQ",
            }}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View>
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/zCBj2DV0T56j-ub8zwxkmQ",
            }}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
        <View>
          <Image
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/zCBj2DV0T56j-ub8zwxkmQ",
            }}
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
      </View>

      {/* Bottom Sheet */}
      {/* {pictureOpen && (
        <DownloadPicture wallpaper={pictureOpen} onClose={() => setPictureOpen(null)} />
      )} */}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   headerContainer: {
//     width: "100%",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: "bold",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   galleryContainer: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     padding: 20,
//     gap: 20,
//   },
//   image: {
//     height: 200,
//     width: 150,
//   },
//   innercontainer: {
//     flex: 1,
//     padding: 1,
//     gap: 1,
//     overflow: "hidden",
//   },
// });
