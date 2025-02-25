import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Colours, FontSize } from "../constants/theme";

const CustomAlert = ({ visible, onClose, message, buttonText }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertContainer}>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  alertContainer: {
    backgroundColor: Colours.white,
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: "center",
  },
  message: {
    fontSize: FontSize.s16,
    color: Colours.darkGray,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: '600',
    color: Colours.darkGray,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colours.themeGreen,
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  buttonText: {
    color: Colours.white,
    fontSize: FontSize.s15,
    fontWeight: "bold",
  },
});

export default CustomAlert;
