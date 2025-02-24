import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colours, FontSize } from '../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  editable = true,
  style = {},
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: Colours.themePink,
          borderRadius: 15,
          paddingHorizontal: 10,
          height: windowHeight/ 20,
          backgroundColor: Colours.darkWhite,
          marginVertical: '2%',
        },
        style,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        editable={editable}
        style={{ flex: 1, fontSize: FontSize.s16, color: Colours.black }}
      />
      
      {/* İkon varsa göster */}
      {secureTextEntry === true  && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <MaterialIcons
            name={isSecure ? 'visibility-off' : 'visibility'}
            size={23}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
