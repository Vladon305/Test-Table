import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type DataType = {
  date: number
  points: number
  name: string
  distance: number
}

const initialState = {
  data: [
    {
      date: 2013,
      points: 1,
      name: 'Louis',
      distance: 65
    },
    {
      date: 2005,
      points: 2,
      name: 'Lester',
      distance: 41
    },
    {
      date: 2007,
      points: 4,
      name: 'Charles',
      distance: 42
    },
    {
      date: 2020,
      points: 3,
      name: 'Richard',
      distance: 11
    },
    {
      date: 2011,
      points: 1,
      name: 'Joan',
      distance: 13
    },
    {
      date: 2021,
      points: 1,
      name: 'Lewis',
      distance: 23
    },
    {
      date: 2017,
      points: 2,
      name: 'Elizabeth',
      distance: 15
    },
    {
      date: 2016,
      points: 4,
      name: 'Sherman',
      distance: 25
    },
    {
      date: 2014,
      points: 3,
      name: 'George',
      distance: 35
    },
    {
      date: 2015,
      points: 3,
      name: 'Stacey',
      distance: 30
    },
    {
      date: 2018,
      points: 6,
      name: 'John',
      distance: 24
    },
    {
      date: 2018,
      points: 2,
      name: 'Dorothy',
      distance: 33
    },
  ],
  sortData: [] as DataType[],
  sortConfig: {
    sortBox: 'name',
    filterBox: undefined as unknown as string,
    filterLaw: undefined as unknown as string,
    filterArgument: undefined as unknown as string
  },
  renderedData: [] as DataType[],
  pagesConfig: {                                                  //установка данных для пагинации
    currentPage: 1,
    pageCount: null as unknown as number
  }
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSortData: (state, action: PayloadAction<DataType[]>) => {
      state.sortData = action.payload
    },
    setSortConfig: (state, action) => {
      state.sortConfig.sortBox = action.payload.sortBox
      state.sortConfig.filterBox = action.payload.filterBox
      state.sortConfig.filterLaw = action.payload.filterLaw
      state.sortConfig.filterArgument = action.payload.filterArgument
    },
    setRenderedData: (state, action: PayloadAction<DataType[]>) => {
      state.renderedData = action.payload
    },
    setPagesConfig: (state, action) => {
      state.pagesConfig = action.payload
    },
  }
})

export const dataReducer = dataSlice.reducer
export const dataActions = dataSlice.actions