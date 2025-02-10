import DownloadPicture from "@/components/BottomSheet"
import { Link } from "expo-router"
import { useState } from "react"
import { Text, View, SafeAreaView, Button } from "react-native"

const account = () => {
  const [pictureOpen, setPictureOpen] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Link href={"/accountInfo"}>
          Account Page
        </Link>
        <Button title="Open Bottom Sheet" onPress={() => setPictureOpen(true)}></Button>
        {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)} />}
      </View>
    </SafeAreaView>
  )
}

export default account
