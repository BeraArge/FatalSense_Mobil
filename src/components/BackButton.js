import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const BackButton = React.memo(({style}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => navigation.goBack()}>
      <MaterialIcons name="left" size={100} color="red" />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 10,
    top: Platform.OS === 'ios' ? 40 : 20,
    zIndex: 1000,
  },
});

export default BackButton;