import { View, Text, Button, StyleSheet } from "react-native";

function UserScreen({ navigation }) {
  function openDrawerHandler() {
    //Open the drawer navigator
    //navigation.toggleDrawer();
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} color="#EB1090" />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
