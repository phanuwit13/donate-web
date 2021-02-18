import { CALL_API } from 'redux-api-middleware'
import { SIGNIN } from '../constants/endpoints'
import {
  SIGNIN_USER_REQUEST, SIGNIN_USER_FAILURE, SIGNIN_USER_SUCCESS
} from '../constants/actionTypes'
import { serialize } from '../until/JsonBody'

export const sigin = value => (
  dispatch => dispatch({
    [CALL_API]: {
      endpoint: SIGNIN,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST',
      body: serialize({
        username: value.username,
        password: value.password,
        grant_type: 'password',
        scope: 'read write',
        client_secret: 'secret',
        client_id: 'client'
      }),
      types: [
        SIGNIN_USER_REQUEST,
        {
          type: SIGNIN_USER_SUCCESS,
          payload: (action, state, res) => {
            return res.json().then((data) => {
              if (!data.error)
                localStorage.setItem('digio', data)
              return data
            })
          }
        },
        SIGNIN_USER_FAILURE
      ]
    }
  })
)
