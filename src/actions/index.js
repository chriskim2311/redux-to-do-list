import types from './types';
import axios from 'axios';


const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c918_chriskim';

export function addToDoItem(item) {
    const resp= axios.post(BASE_URL +API_KEY, item);

    return {
        type: types.ADD_LIST_ITEM,
        payload: resp
    }

}

export function getListData(){
    const resp = axios.get(BASE_URL +API_KEY);

    return {
        type: types.GET_ALL_LIST_DATA,
        payload: resp

    }
}


export function getSingleItem(id) {
    const resp = axios.get(`${BASE_URL}/${id + API_KEY}`);

    return{
        type: types.GET_SINGLE_ITEM,
        payload: resp
    }
}