import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NotLogged() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.bg} />
      <View style={styles.bgMiddle} />
      <View style={styles.bgBottom} />
      <View style={styles.content}>
        <Text style={styles.text}>Please login to check favorites</Text>
        <Button title="Login" onPress={() => navigation.navigate("Account")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 80,
    paddingHorizontal: 20,
    height: "100%",
    zIndex: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  bg: {
    height: 300,
    width: "100%",
    backgroundColor: "red",
    position: "absolute",
    borderBottomLeftRadius: 400,
    transform: [{ scaleX: 1.2 }],
    zIndex: 4,
  },
  bgMiddle: {
    height: 600,
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
    bottom: 0,
    zIndex: 2,
  },
  bgBottom: {
    height: 300,
    width: "100%",
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    zIndex: 3,
    borderTopRightRadius: 400,
    transform: [{ scaleX: 1.2 }],
  },
});
