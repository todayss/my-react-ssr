import axios from 'axios'

//actionType
let GET_USETINFO = "GET_USERINFO"

//actionCreator
let changeList = data => ({
  type: GET_USETINFO,
  data
})

export const getUserInfo = server => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get("http://localhost:9000/api/user/info")
      .then(res => {
        console.log("resaaa", res)
        let { data } = res.data
        dispatch(changeList(data))
      }).catch(err => {
        dispatch(changeList({}))
      })
  }
}

const defaultState = {
  data: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USETINFO:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}