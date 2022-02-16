import React from "react";
import SignUp from "./SignUp";
/*importing constant responsive height and width values.
when it runs it checks the size of the device and resize components*/
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*Importing Lato font family*/
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign In"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign Up"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const onPress = () => React.useState(null);
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.mainContainer}>
          <View style={styles.headerBackground}>
            <View style={styles.headerCircleBackground}>
              <Text style={styles.headerText}>Login</Text>
            </View>
          </View>
          <View style={styles.mainBody}>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="username"
                keyboardType="default"
                placeholderTextColor={"#91A0CD"}
                selectionColor={"#2B3A67"}
                blurOnSubmit={true}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="password"
                keyboardType="default"
                placeholderTextColor={"#91A0CD"}
                selectionColor={"#2B3A67"}
                blurOnSubmit={true}
              />
              <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
              <View style={styles.regBtn}>
                <Button
                  color="#2B3A67"
                  title="Don't have account? Register!"
                  onPress={() => navigation.navigate("Sign Up")}
                />
              </View>
            </SafeAreaView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: "#FFF",
  },
  headerBackground: {
    width: wp("100%"),
    height: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    top: -30,
  },
  headerCircleBackground: {
    width: wp("101%"),
    height: hp("55%"),
    backgroundColor: "#2B3A67",
    borderRadius: hp("100%"),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#FFC482",
    fontSize: hp("7%"),
    fontFamily: "Lato_700Bold",
    marginTop: 170,
    letterSpacing: 2,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#FFC482",
    borderRadius: 10,
    padding: 10,
    fontFamily: "Lato_400Regular",
  },
  mainBody: {
    flex: 0.6,
    flexDirection: "column-reverse",
  },
  loginBtn: {
    width: wp("80%"),
    left: wp("10%"),
    top: hp("3%"),
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#2B3A67",
    padding: 10,
    top: 40,
  },
  btnText: {
    color: "#FFC482",
    fontSize: 22,
    letterSpacing: 2,
    fontFamily: "Lato_400Regular",
  },
  regBtn: {
    top: 80,
  },
});
export default App;
