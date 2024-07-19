import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBooksList} from '../../redux/actions/book-actions';
import COLORS from '../../common/colors';
import BackHeader from '../../components/header';
import CardView from '../../components/card-view';
import {customFonts} from '../../common/custom-fonts';
import {HD, WD} from '../../common/responsive';
import {genre} from '../../data/genre';
import {setFilterBooks} from '../../redux/slice/book-slice';
import Button from '../../components/button';

// book list screen
const ITEM_HEIGHT = 50;
export default function BookList({navigation}) {
  const dispatch = useDispatch();
  const [active, setActive] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const booksList = useSelector(state => state.book_store.filterData);
  const isLoading = useSelector(state => state.book_store.isLoading);

  const paginateData = (data, page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data?.slice(start, end);
  };

  const currentData = paginateData(booksList, currentPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    dispatch(fetchBooksList());
    return () => {};
  }, [dispatch, active]);

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

  const handleFilterBooks = genre => {
    setCurrentPage(1);
    setActive(genre);
    dispatch(setFilterBooks(genre));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
      />
      <BackHeader heading="Books List" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genre.map(item => (
          <TouchableOpacity
            onPress={() => handleFilterBooks(item)}
            style={
              active === item ? styles.activeFilterStyle : styles.filterStyle
            }>
            <Text
              style={{
                fontFamily: customFonts.regular,
                fontSize: HD(1.5),
                color: active === item ? COLORS.white : COLORS.dark,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {isLoading ? (
        <ActivityIndicator size={'small'} color={COLORS.blue} />
      ) : (
        <FlatList
          keyExtractor={(item, index) => index?.toString()}
          data={currentData}
          renderItem={renderItem}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          initialNumToRender={10}
        />
      )}
      <View style={styles.buttonView}>
        {currentPage > 1 && (
          <Button onPress={handlePreviousPage} title="Previous" />
        )}

        <Button onPress={handleNextPage} title="Next" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  headingText: {
    marginLeft: WD(5),
    marginBottom: WD(3),
    color: COLORS.black,
    fontFamily: customFonts.semi_bold,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: WD(5),
    alignItems: 'center',
  },
  filterStyle: {
    height: HD(4),
    marginLeft: WD(3),
    marginBottom: WD(10),
    paddingHorizontal: WD(4),
    borderRadius: 30,
    backgroundColor: COLORS.gainsboro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeFilterStyle: {
    height: HD(4),
    marginLeft: WD(3),
    marginBottom: WD(10),
    paddingHorizontal: WD(4),
    borderRadius: 30,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
