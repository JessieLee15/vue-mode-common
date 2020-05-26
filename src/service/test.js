import {
  fetch,
  post
} from '@/plugins/axios'


const BASE_URL = '';

const APIS = {
  test1: '/service',
}

export const  testNode = (params = {}) => fetch(BASE_URL + APIS.test1, params);