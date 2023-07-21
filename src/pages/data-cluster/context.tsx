import { useReducer, useContext, createContext } from 'react'
import { TAB_ITEMS_OBJECT } from './service/constants'
type PageParams = {
  pageNum: number
  pageSize: number
}
type ActionType = 'UPDATE_PAGE_PARAMS' | 'UPDATE_LIB_TABS' | 'UPDATE_TABS_2' | 'UPDATE_TABS_3' | 'UPDATE_SEARCH_KEYWORD'

type LibTab = keyof typeof TAB_ITEMS_OBJECT

type State = {
  searchKeyWord: string
  pageParams: PageParams
  libTab: LibTab
  /* 二级分类 */
  secondTab: string
  /* 三级分类 */
  thirdTab: string
}
type Action = { type: ActionType; payload: any }
type FilterOperations = {
  updatePageParams: (payload: PageParams) => void
  updateLibTabs: (payload: LibTab) => void
  updateSearchKeyWord: (payload: string) => void
  updateTabs2: (payload: string) => void
  updateTabs3: (payload: string) => void
}

type FilterContextType = {
  filterState: State
  filterOperations: FilterOperations
}

const useCreateFilterContext = () => {
  const initialState: State = {
    searchKeyWord: '搜索一下',
    pageParams: {
      pageNum: 1,
      pageSize: 10,
    },
    libTab: 'ALL_LIB',
    secondTab: '',
    thirdTab: '',
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

      case 'UPDATE_TABS_2':
        return {
          ...state,
          secondTab: action.payload,
        }

      case 'UPDATE_TABS_3':
        return {
          ...state,
          thirdTab: action.payload,
        }
      /* 关键词搜索 */
      case 'UPDATE_SEARCH_KEYWORD':
        return {
          ...state,
          searchKeyWord: action.payload,
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

  const updateTabs2 = (payload: string) => {
    dispatch({ type: 'UPDATE_TABS_2', payload })
  }

  const updateTabs3 = (payload: string) => {
    dispatch({ type: 'UPDATE_TABS_3', payload })
  }
  const updateSearchKeyWord = (payload: string) => {
    dispatch({ type: 'UPDATE_SEARCH_KEYWORD', payload })
  }

  const filterOperations: FilterOperations = {
    updatePageParams,
    updateLibTabs,
    updateSearchKeyWord,
    updateTabs2,
    updateTabs3,
  }

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
