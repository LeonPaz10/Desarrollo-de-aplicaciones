import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Modal from "./components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => setTextItem(t);

  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ]); 
    setTextItem("");
   
  };

  const selectedItem = (id) => {
    console.log(id);
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    console.log(itemSelected);
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, color:"#000" }}>Lista de compras 🛒</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Agregar producto"
          placeholderTextColor="white"
          style={styles.inputStyle}
          value={textItem}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text> Agregar </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}          
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EE9654",
    alignItems: "center",
    paddingTop: 100,
  },
  inputcontainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
    margin:50
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
    padding: 5,
    marginBottom:10
  },
  button: {
    backgroundColor: "#D0B472",
    height: 35,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

});