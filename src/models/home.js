import { queryTabs, queryTabsContent } from '../services/api';

export default {
  namespace: 'home',

  state: {
    tabs: [],
    contentCache: {}
  },

  effects: {
    *getTabs({ payload }, { call, put }) {
      const  { data }  = yield call(queryTabs);
      if (data.code === 200) {
        yield put({
          type: 'saveTabs',
          payload: data.datas.tabs
        });
        yield put({
          type: 'getContent',
          payload: {
            special_id: data.datas.tabs[0]['special_id'],
            page: 10,
            curpage: 1,
            name: data.datas.tabs[0]['name']
          }
        });
      }
    },
    *getContent({ payload }, { call, put }) {
      const { special_id, page, curpage, name } = payload;
      const { data } = yield call(queryTabsContent, { special_id, page, curpage });
      if (data.code === 200) {
        yield put({
          type: 'saveCache',
          payload: {
            contentCache: {
              [name]: data.datas
            }
          }
        })
      }
    }
  },

  reducers: {
    saveTabs(state, { payload }) {
      return {
        ...state,
        tabs: payload
      }
    },
    saveCache(state, { payload }) {
      return {
        ...state,
        contentCache: {
          ...state.contentCache,
          ...payload.contentCache
        }
      }
    }
  }
}