import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import COLORS from '../../common/colors';
import {HD, WD} from '../../common/responsive';
import Entypo from 'react-native-vector-icons/Entypo';
import {customFonts} from '../../common/custom-fonts';
import FastImage from 'react-native-fast-image';

export default function CardView({
  id,
  genre,
  image,
  date,
  description,
  title,
  onPress,
  author,
}) {
  return (
    <View key={id}>
      <TouchableWithoutFeedback activeOpacity="0.1" onPress={onPress}>
        <View style={styles.column}>
          <FastImage
            style={styles.productImg}
            source={{
              uri: image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />

          <View style={{width: WD(50)}}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontSize: WD(3),
                color: COLORS.dark,
                marginTop: WD(1),
              }}>
              {description}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>{author}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: WD(2)}}>
              <Entypo name="dot-single" size={20} color={COLORS.dark} />
              <Text style={styles.date}>{date}</Text>
            </View>

            <View style={styles.genreText}>
              <Text
                style={{
                  fontFamily: customFonts.regular,
                  fontSize: WD(3),
                }}>
                {genre}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginVertical: WD(5),
  },
  tag: {
    color: COLORS.white,
    marginTop: WD(2),
    marginLeft: WD(0),
    fontFamily: customFonts.semi_bold,
    fontSize: WD(3),
    paddingHorizontal: WD(2),
    paddingVertical: WD(1),
    borderRadius: 3,
  },
  column: {
    width: WD(92),
    height: HD(19),
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: WD(2),
    marginHorizontal: WD(4),
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: WD(4),
    color: COLORS.black,
    fontFamily: customFonts.bold,
    marginTop: WD(3),
  },
  desc: {
    fontFamily: customFonts.regular,
    color: COLORS.dark,
    fontSize: WD(3.5),
    marginTop: WD(1),
  },
  text2: {
    fontFamily: customFonts.regular,
    color: COLORS.darkgray,
    fontSize: WD(3.2),
    marginTop: WD(1),
  },
  productImg: {
    width: WD(30),
    height: HD(16),
    resizeMode: 'cover',
    marginHorizontal: WD(3),
    marginVertical: WD(3),
    borderRadius: 10,
  },
  price: {
    color: COLORS.dark,
    fontSize: WD(4.5),
    fontFamily: customFonts.bold,
    marginTop: WD(1),
    marginLeft: WD(1),
  },
  text: {
    fontFamily: customFonts.bold,
    color: COLORS.darkgray,
    fontSize: WD(3),
    marginTop: WD(1),
  },
  genreText: {
    flexDirection: 'row',
    paddingTop: WD(2),
    marginTop: WD(1),
    borderTopColor: COLORS.gainsboro,
    borderTopWidth: 1,
  },
  date: {
    color: COLORS.dark,
    fontSize: WD(3),
    fontFamily: customFonts.semi_bold,
    marginRight: WD(1),
  },
});
