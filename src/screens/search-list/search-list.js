import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../common/colors';
import {WD, HD} from '../../common/responsive';
import {customFonts} from '../../common/custom-fonts';
import CardView from '../../components/card-view';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchBooks} from '../../redux/slice/book-slice';
import Ionicons from 'react-native-vector-icons/Ionicons';

// search books
export default function SearchList({navigation}) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const booksList = useSelector(state => state.book_store.searchBooks);
  const isLoading = useSelector(state => state.book_store.isLoading);

  const handleFilter = text => {
    setSearch(text);
    dispatch(setSearchBooks(text));
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const ListItem = ({data}) => {
    return (
      <CardView
        key={data.id}
        title={data.title}
        description={data.description}
        image={data.cover_image}
        genre={data.genre}
        date={data.year_published}
        author={data.author}
        onPress={() => navigation.navigate('BookDetails', {bookDetails: data})}
      />
    );
  };
  const renderItem = ({item}) => {
    return <ListItem data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
      />
      <TouchableOpacity
        style={{marginVertical: WD(6), marginLeft: WD(5)}}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={25} color={COLORS.black} />
      </TouchableOpacity>
      <View style={styles.searchSection}>
        <TextInput
          onChangeText={text => handleFilter(text)}
          value={search}
          placeholder="Search For books"
          placeholderTextColor={COLORS.darkgray}
          style={styles.input}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator color={'black'} size={'small'} />
      ) : (
        <FlatList
          keyExtractor={item => item?.id?.toString()}
          data={booksList}
          renderItem={renderItem}
          initialNumToRender={10}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchSection: {
    marginBottom: WD(5),
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: COLORS.gainsboro,
    marginHorizontal: WD(4),
    paddingLeft: WD(3),
    width: WD(92),
    height: HD(6),
    justifyContent: 'space-between',
  },
  searchIcon: {
    paddingHorizontal: WD(4),
    paddingTop: WD(5),
  },
  input: {
    fontFamily: customFonts.regular,
    fontSize: WD(4.5),
    width: WD(75),
    color: COLORS.dark,
  },

  lightText: {
    color: COLORS.darkgray,
  },
  text: {
    fontFamily: customFonts.regular,
    width: WD(60),
    fontSize: WD(3.5),
    lineHeight: 20,
    paddingVertical: WD(4),
    color: COLORS.darkgray,
  },
});
