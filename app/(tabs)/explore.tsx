import ParallaxScrollView from "@/components/ParallaxScrollView"
import { Image, SafeAreaView, Text, View } from "react-native"

const explore = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }} headerImage={<Image style={{ flex: 1 }} source={{ uri: "https://images.unsplash.com/photo-1736465263067-8edcf8de5273?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />}>
        <Text>
          Explore Page
        </Text>
      </ParallaxScrollView>
    </SafeAreaView>
  )
}

export default explore
