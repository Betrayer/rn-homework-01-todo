export default function App() {
  const [value, setValue] = useState("");

  const addNote = () => {
    Keyboard.dismiss();
    Alert.alert("Attention", "Please, choose a priority for this note", [
      {
        text: "High",
        onPress: () => console.log("High"),
        style: "cancel",
      },
      {
        text: "Medium",
        onPress: () => console.log("Medium"),
        style: "cancel",
      },
      {
        text: "Low",
        onPress: () => console.log("Low"),
        style: "cancel",
      },
      { cancelable: false },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <TextInput style={styles.input} onChangeText={setValue} />
        <TouchableOpacity
          onPress={() => addNote()}
          activeOpacity={0.5}
          style={styles.button}
        >
          <Text>Add note</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomWrapper}>
        <SafeAreaView>
          <FlatList
            data={value}
            renderItem={({ item }) => {
              return (
                <View style={styles.noteWrapper}>
                  <Text>{value}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => value}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a1dddd",
    // alignItems: "center",
    // justifyContent: 'center',
  },
  topWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 70,
    marginBottom: 30,
  },
  input: {
    padding: 5,
    width: 220,
    height: 40,
    borderWidth: 2,
    borderRadius: 7,
  },
  button: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
  },
  bottomWrapper: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 7,
    marginHorizontal: 24,
  },
  noteWrapper: {
    width: 300,
    height: 70,
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#000",
  },
});
