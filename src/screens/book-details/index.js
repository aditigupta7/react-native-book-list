import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from 'react-native';
import COLORS from '../../common/colors';
import {WD, HD} from '../../common/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBookDetails} from '../../redux/actions/book-actions';
import {customFonts} from '../../common/custom-fonts';

// book details screen
export default function BookDetails({navigation, route}) {
  const {bookDetails} = route.params;
  const dispatch = useDispatch();

  // const bookDetails = useSelector(state => state.book_store.bookDetails);

  // useEffect(() => {
  //   dispatch(fetchBookDetails(bookId));
  //   return () => {};
  // }, [bookId, dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imageStyle}
          source={{uri: bookDetails?.cover_image}}
        />

        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.arrowStyle}>
            <Ionicons name="arrow-back" size={30} color={COLORS.white} />
          </View>
        </TouchableWithoutFeedback>

        <View>
          <View style={{marginHorizontal: WD(4), marginTop: WD(3)}}>
            <Text
              style={{
                color: COLORS.lightgray,
                fontFamily: customFonts.semi_bold,
                fontSize: WD(3),
              }}>
              {bookDetails?.genre}
            </Text>

            <Text style={styles.nameText}>{bookDetails?.title}</Text>

            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.author}>Author : </Text>
                <Text style={styles.author}>{bookDetails?.author}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginVertical: WD(5)}}>
          <Text style={styles.aboutText}>{bookDetails?.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  nameText: {
    fontSize: WD(4.5),
    fontFamily: customFonts.bold,
    color: COLORS.dark,
    marginTop: WD(2),
  },

  aboutText: {
    color: COLORS.darkgray,
    marginHorizontal: WD(4),
    marginTop: WD(3),
    lineHeight: 25,
    fontSize: WD(3.8),
    fontFamily: customFonts.regular,
  },
  author: {
    fontFamily: customFonts.regular,
    color: COLORS.dark,
    fontSize: WD(4),
    paddingVertical: WD(2),
  },
  arrowStyle: {
    position: 'absolute',
    marginTop: WD(10),
    width: WD(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: WD(4),
  },
  imageStyle: {
    resizeMode: 'cover',
    width: WD(100),
    height: HD(50),
  },
});
