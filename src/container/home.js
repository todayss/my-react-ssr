import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'

function User(props) {
  return <div>
    <h1>
      哎。。。。
      {props.data.title}
      下雪了
      {props.data.best}
    </h1>
  </div>
}

User.loadData = (store) => {
  return store.dispatch(getUserInfo())
}

export default connect(
  state => ({
    data: state.user.data
  }),
  // {
  //   getIndexList
  // }
)(User)