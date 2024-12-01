import React, { useCallback, useRef } from "react";
import { Text, StyleSheet, Image, Button, View, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { FontAwesome } from "@expo/vector-icons";

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      snapPoints={["90%"]}
      enablePanDownToClose={true}
      onClose={onClose}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleIndicatorStyle={{ height: 0 }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 80,
          }}
        >
          <FontAwesome name="close" size={20} color="black" onPress={onClose} />
          <Text style={styles.text}>{wallpaper.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <FontAwesome name="heart" size={18} color="black" />
            <FontAwesome name="share" size={18} color="black" />
          </View>
        </View>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />

        <View style={styles.btn}>
          <DownloadBtn />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadBtn() {
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        paddingHorizontal: 100,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "white",
        }}
      >
        Download
      </Text>
      <FontAwesome name="download" size={18} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    paddingLeft: 40,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "center",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
});

export default DownloadPicture;
