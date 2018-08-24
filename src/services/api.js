import { stringify } from 'qs';
import request from '../utils/request';

export async function queryTabs() {
  return request(`/api?act=index&op=tabs&client_type=ios`) // 首页tabs
}

export async function queryTabsContent(params) {
  return request(`/api?act=special&op=index&client_type=ios&${stringify(params)}`) // 首页tabs中的内容
}