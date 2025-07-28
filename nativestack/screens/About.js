import { Image, Text, View } from "react-native";

export const About = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",

        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 200,
          borderBottomLeftRadius: 150,
          borderBottomRightRadius: 150,
        }}
        source={require("../assets/bb.jpg")}
      />
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "blue" }}>
        About
      </Text>
    </View>
  );
};
