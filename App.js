import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.search}>
          <Text>search</Text>
        </View>
        <View style={styles.title}>
          <Text>title</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
  },
  search: {
    padding: 16,
    backgroundColor: "#33A8FF",
  },
  title: {
    flex: 1,
    padding: 16,
    backgroundColor: "#33FFBB",
  },
});
