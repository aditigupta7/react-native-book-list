import {createAsyncThunk} from '@reduxjs/toolkit';

import {BOOK_DETAILS, BOOKS_LIST} from '../../common/api-constants';
import {getApi} from '../../scripts/api-services';

export const fetchBooksList = createAsyncThunk('fetchBooksList', async () => {
  try {
    const response = await getApi(BOOKS_LIST);
    return response.books;
  } catch (error) {
    console.log('Error fetch brand list API', error);
  }
});

export const fetchBookDetails = createAsyncThunk(
  'fetchBookDetails',
  async id => {
    try {
      const response = await getApi(`${BOOK_DETAILS}${id}`);
      return response;
    } catch (error) {
      console.log('Error fetch brand list API', error);
    }
  },
);
