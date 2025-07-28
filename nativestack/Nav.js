import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
export const Nav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "ANASAYFA",
          headerShadowVisible: false,
          headerRight: () => (
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: "black",
              }}
            ></View>
          ),
        }}
      />
      <Stack.Screen
        name="about"
        component={About}
        options={{
          title: "HAKKINDA",

          headerShadowVisible: false,

          headerTransparent: true /* headerstyle la üst tarafı da aynı renk yapmıştık bu kodlada yapabiliriz*/,
          /*headerStyle: {
            backgroundColor: "#A8A115",
          },*/

          headerTitleAlign: "center",
          headerTintColor: "blue",

          headerRight: () => (
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: "blue",
                borderRadius: 10,
              }}
            ></View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
