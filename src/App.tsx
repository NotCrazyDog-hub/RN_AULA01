import React from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const Separator = () => <View style={styles.seperator} />;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textHello}>Hello World</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Insira seu nome" />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Insira sua matrícula"
          />
        </View>
        <Separator />
        <View>
          <Button title="Click here" onPress={() => alert("Aviso")} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 32,
    justifyContent: "center",
    alignSelf: "center",
    // alignItems: "center",
  },
  textHello: {
    fontSize: 64,
    color: "blue",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "blue",
    margin: 4,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidht: StyleSheet.hairlineWidth,
  },
});
