import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WD, HD} from '../../common/responsive';
import COLORS from '../../common/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {customFonts} from '../../common/custom-fonts';

export default function BackHeader({heading, showBackArrow}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle="white-content"
      />

      {showBackArrow && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color={COLORS.black} />
        </TouchableOpacity>
      )}

      <View style={styles.innerContainer}>
        <Text style={styles.heading}>{heading}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons
            style={{marginTop: 5}}
            name="search"
            size={25}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingHorizontal: WD(3),
    paddingVertical: WD(10),
  },
  heading: {
    fontSize: HD(3),
    color: COLORS.black,
    fontFamily: customFonts.bold,
    marginHorizontal: WD(3),
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
