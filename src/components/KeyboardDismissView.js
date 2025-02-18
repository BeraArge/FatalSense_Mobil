import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const KeyboardDismissView = ({ children, style }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDismissView;