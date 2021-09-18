import React, { useState } from "react";
import FontLoader from "./FontLoader";
import Text from "./Text";
import Modal from "react-native-modal";
import Button from "./Button";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function PopUp({ visible, onOk, mensaje }) {
  return (
    <View>
      <Modal isVisible={visible}>
        <FontLoader>
          <View style={styles.modal}>
            <Text style={{color: colors.c1}}>{mensaje}</Text>          
            <View style={styles.botones}>             
              <Button title="OK" onPress={onOk} buttonStyle={{width: 100, backgroundColor: colors.c2}}/>
            </View>
          </View>
        </FontLoader>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.c5,
    borderRadius: 10,
    padding: 15,    
  },
  botones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});

export default PopUp;
