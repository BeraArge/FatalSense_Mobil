import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import {Colours, FontSize} from '../constants/theme';
import BackButton from './BackButton';
import KeyboardDismissView from './KeyboardDismissView';

const LayoutBackground = ({children, backgroundOption = 1, title, backButton}) => {
  let backgroundSource;

  switch (backgroundOption) {
    case 1:
      backgroundSource = require('../../assets/appAssets/background.jpg');
      break;
    case 2:
      backgroundSource = require('../../assets/appAssets/background.jpg');
      break;
    case 3:
      backgroundSource = require('../../assets/appAssets/backgroundGeneral.jpg');
      break;
    default:
      backgroundSource = require('../../assets/appAssets/background.jpg');
      break;
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
      <KeyboardDismissView style={{flex: 1}}>
        <ImageBackground source={backgroundSource} style={styles.background}>
          {title && (
            <View
              style={{
                height: Platform.OS === 'ios' ? 80 : 45,
                position: Platform.OS === 'ios' ? 'relative' : 'absolute',
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                zIndex: 999,
              }}>
              {backButton && <BackButton />}
              <Text
                style={{
                  color: Colours.black,
                  fontWeight: '600',
                  fontSize: FontSize.s16,
                }}>
                {title}
              </Text>
            </View>
          )}
          {children}
        </ImageBackground>
      </KeyboardDismissView>
    </>
  );
};

export default LayoutBackground;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});