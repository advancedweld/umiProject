import { useReducer, useContext, createContext } from 'react'
import { TAB_ITEMS_OBJECT } from './service/constants'
type PageParams = {
  pageNum: number
  pageSize: number
}
type ActionType = 'UPDATE_PAGE_PARAMS' | 'UPDATE_LIB_TABS'

type LibTab = keyof typeof TAB_ITEMS_OBJECT

type State = {
  searchKeyWord: string
  pageParams: PageParams
  libTab: LibTab
}
type Action = { type: ActionType; payload: any }
type FilterOperations = {
  updatePageParams: (payload: PageParams) => void
  updateLibTabs: (payload: LibTab) => void
}

type FilterContextType = {
  filterState: State
  filterOperations: FilterOperations
}

const useCreateFilterContext = () => {
  const initialState: State = {
    searchKeyWord: '',
    pageParams: {
      pageNum: 1,
      pageSize: 10,
    },
    libTab: 'ALL_LIB',
  }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'UPDATE_PAGE_PARAMS':
        return {
          ...state,
          pageParams: action.payload,
        }
      case 'UPDATE_LIB_TABS':
        return {
          ...state,
          libTab: action.payload,
        }
      default:
        return state
    }
  }

  const [filterState, dispatch] = useReducer(reducer, initialState)

  const updatePageParams = (payload: PageParams) => {
    dispatch({ type: 'UPDATE_PAGE_PARAMS', payload })
  }
  const updateLibTabs = (payload: LibTab) => {
    dispatch({ type: 'UPDATE_LIB_TABS', payload })
  }

  const filterOperations = { updatePageParams, updateLibTabs }

  return {
    filterState,
    filterOperations,
  }
}

const FilterContext = createContext<FilterContextType>({} as FilterContextType)

const useFilterContext = () => {
  const context = useContext(FilterContext)
  return context
}

export { useCreateFilterContext, useFilterContext, FilterContext }
