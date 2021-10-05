import React, { Fragment } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const TaskOuput = ({ tasks, deleteTask }) => {
  return tasks.length > 0 ? (
    <Fragment>
      <View style={styles.outputHeader}>
        <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>
          Tasks
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.outputContainer}
      >
        {tasks.map((task, i) => (
          <View key={i} style={styles.listItem}>
            <Text>{task}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.delBtn}
              onPress={() => deleteTask(i)}
            >
              <Text style={styles.textWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </Fragment>
  ) : (
    <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "bold" }}>
      No tasks
    </Text>
  );
};

const styles = StyleSheet.create({
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
    maxHeight: 400,
  },
  listItem: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delBtn: {
    backgroundColor: "#c62828",
    padding: 10,
    borderRadius: 7,
  },

  textWhite: {
    color: "white",
  },
});

export default TaskOuput;
