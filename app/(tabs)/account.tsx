import DownloadPicture from "@/components/ButtomSheet";
import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function account() {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Account</Text>
        <Button
          title="Open Bottom Page"
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>

        {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)}/>}
      </View>
    </SafeAreaView>
  );
}
