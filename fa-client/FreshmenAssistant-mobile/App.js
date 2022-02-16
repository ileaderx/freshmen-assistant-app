import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

let x
console.log("hi")

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle} />
      <Text>Hello World this is WARD !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  rectangle: {
    width: 100 * 3,
    height: 80,
    backgroundColor: "#2B3A67",
  },
});


