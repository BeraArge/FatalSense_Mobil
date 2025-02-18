import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const BackButton = React.memo(({style}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => navigation.goBack()}>
      <MaterialIcons name="left" size={24} color="black" />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
  },
});

export default BackButton;