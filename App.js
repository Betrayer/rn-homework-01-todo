import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert,
  SafeAreaView,
  FlatList,
} from "react-native";

class App extends Component {
  state = { note: [], text: "", priority: "" };

  changeTextHandler = (text) => {
    this.setState({ text: text });
  };

  addNote = () => {
    Alert.alert("Attention", "Please, choose a priority for this note", [
      {
        text: "High",
        onPress: () =>
            // this.setState({ priority: "red", text: this.state.text }),
          this.setState({ priority: "red" }),
        style: "cancel",
      },
      {
        text: "Medium",
        onPress: () => this.setState({ priority: "yellow" }),
        style: "cancel",
      },
      {
        text: "Low",
        onPress: () => this.setState({ priority: "green" }),
        style: "cancel",
      },
      { cancelable: false },
    ]);

    const isEmpty = this.state.text.length > 0;
    if (isEmpty) {
      this.setState((prevState) => {
        let { note, text } = prevState;
        return {
          note: note.concat({
            key: note.length,
            text: text,
            priority: this.state.priority,
          }),
          text: "",
        };
      });
    }

    Keyboard.dismiss();
  };

  deleteNote = (i) => {
    this.setState((prevState) => {
      let note = prevState.note.slice();
      note.splice(i, 1);
      return { note: note };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={this.changeTextHandler}
            value={this.state.text}
          />
          <TouchableOpacity
            onPress={() => this.addNote()}
            activeOpacity={0.5}
            style={styles.addButton}
          >
            <Text>Add note</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomWrapper}>
          <SafeAreaView>
            <FlatList
              data={this.state.note}
              renderItem={({ item, index }) => {
                return (
                  <>
                    <View style={styles.noteWrapper}>
                      <View
                        style={{
                          ...styles.noteTextWrapper,
                          backgroundColor: item.priority,
                        }}
                      >
                        <Text>{item.text}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => this.deleteNote(index)}
                        activeOpacity={0.5}
                      >
                        <Text style={styles.deleteButtonText}>Delete note</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                );
              }}
            />
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE0",
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
  addButton: {
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
    marginHorizontal: 22,
    padding: 10,
    height: 550,
  },
  noteTextWrapper: {
    width: 200,
  },
  noteWrapper: {
    width: 300,
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteButtonText: {
    textAlign: "center",
    color: "#fff",
  },
  deleteButton: {
    width: 50,
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: 'black'
  },
});
