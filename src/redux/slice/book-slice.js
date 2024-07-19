import {createSlice} from '@reduxjs/toolkit';
import {fetchBookDetails, fetchBooksList} from '../actions/book-actions';

const initialState = {
  booksList: [],
  filterData: [],
  bookDetails: [],
  loading: false,
  status: '',
  isLoading: false,
  searchBooks: [],
};

const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    setFilterBooks(state, action) {
      let list = [...state.booksList];
      if (action.payload === 'All') {
        state.filterData = state.booksList;
      } else {
        const data = list?.filter(item => item.genre === action.payload);

        state.filterData = data;
      }
    },

    setSearchBooks(state, action) {
      let list = [...state.booksList];
      if (action.payload) {
        const data = list?.filter(item =>
          item.title.toLowerCase().includes(action.payload.toLowerCase()),
        );
        state.searchBooks = data;
      } else {
        state.searchBooks = [];
      }
    },

    clearFilter(state) {
      state.filterData = state.booksList;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBooksList.pending, (state, action) => {
      state.isLoading = true;
      state.status = 'pending';
    });
    builder.addCase(fetchBooksList.fulfilled, (state, action) => {
      state.booksList = action.payload;
      state.isLoading = false;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookDetails = action.payload;
      state.status = 'fulfilled';
    });
  },
});

export const {setFilterBooks, clearFilter, setSearchBooks} = booksSlice.actions;

export default booksSlice.reducer;
