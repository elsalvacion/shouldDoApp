import React, { Fragment } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
const TaskInput = ({ taskInput, handleChange, addTasks, error }) => {
  return (
    <Fragment>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Task"
          style={styles.input}
          onChangeText={handleChange}
          value={taskInput}
          maxLength={35}
        />
        <TouchableOpacity onPress={addTasks} style={styles.btn}>
          <Text style={styles.textWhite}>Add</Text>
        </TouchableOpacity>
      </View>
      {error ? (
        <Text style={styles.error}>* Task input is required</Text>
      ) : null}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    borderRadius: 7,
    width: "80%",
    padding: 7,
  },
  error: {
    color: "red",
  },
  btn: {
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 7,
  },
  textWhite: {
    color: "white",
  },
});

export default TaskInput;
