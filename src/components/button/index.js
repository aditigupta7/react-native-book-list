import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../../common/colors';
import {HD} from '../../common/responsive';
import {customFonts} from '../../common/custom-fonts';

export default function Button({onPress, title}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: HD(6),
    width: '20%',
    shadowColor: '#808080',
  },
  buttonText: {
    fontSize: HD(2),
    color: COLORS.blue,
    fontFamily: customFonts.medium,
  },
});
