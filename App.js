import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskOuput from "./components/TaskOuput";

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
      <TaskInput
        taskInput={taskInput}
        handleChange={handleChange}
        addTasks={addTasks}
        error={error}
      />

      <TaskOuput tasks={tasks} deleteTask={deleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  listItem: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
