import React, { Fragment, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (text) => {
    setTaskInput(text);
  };

  const addTasks = () => {
    if (taskInput !== "") {
      setError(false);
      setTasks([...tasks, taskInput]);
    } else setError(true);

    setTaskInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Task"
          style={styles.input}
          onChangeText={handleChange}
          value={taskInput}
          maxLength={35}
        />
        <Button title="Add" onPress={addTasks} style={styles.add} />
      </View>
      {error ? (
        <Text style={styles.error}>* Task input is required</Text>
      ) : null}
      {tasks.length > 0 ? (
        <Fragment>
          <View style={styles.outputHeader}>
            <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>
              Tasks
            </Text>
          </View>
          <ScrollView style={styles.outputContainer}>
            {tasks.map((task, i) => (
              <View key={i} style={styles.listItem}>
                <Text>{task}</Text>
                <Button
                  title="Delete"
                  style={styles.add}
                  onPress={() => deleteTask(i)}
                />
              </View>
            ))}
          </ScrollView>
        </Fragment>
      ) : (
        <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>
          No tasks
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 15,
    marginBottom: 15,
  },
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
  add: {
    borderRadius: 10,
  },
  outputHeader: {
    marginTop: 15,
    marginBottom: 7,
  },
  outputContainer: {
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    borderRadius: 7,
    width: "100%",
    padding: 7,
    height: 400,
  },
  listItem: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  error: {
    color: "red",
  },
});
