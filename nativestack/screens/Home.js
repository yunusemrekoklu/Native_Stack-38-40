import { Text, TouchableOpacity, View } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("about")}>
        <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>
          GO TO ABOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};
