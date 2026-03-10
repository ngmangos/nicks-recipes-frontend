import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href='/profile' style={styles.button}>
        Go to profile screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#badd13'
  },
});

export default Index