import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colours, FontSize } from '../constants/theme';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  style = {},
  icon,
  onIconPress,
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 10,
          height: 45,
          backgroundColor: Colours.white,
          margin: '2%',
        },
        style,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        style={{ flex: 1, fontSize: FontSize.s16 }}
      />
      
      {/* İkon varsa göster */}
      {icon && (
        <TouchableOpacity onPress={onIconPress || (() => setIsSecure(!isSecure))}>
          <MaterialIcons
            name={icon || (isSecure ? 'visibility-off' : 'visibility')}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
