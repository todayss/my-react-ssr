import axios from 'axios'

//actionType
let GET_LIST = "GET_LIST"

//actionCreator
let changeList = list => ({
  type: GET_LIST,
  list
})

export const getIndexList = server => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get("http://localhost:9000/api/cource/list")
      .then(res => {
        let { list } = res.data
        dispatch(changeList(list))
      }).catch(err => {
        dispatch(changeList([]))
      })
  }
}

const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}