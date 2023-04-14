// saga.js
import { call, takeEvery, put } from 'redux-saga/effects'
import Axios from 'axios'
import actions from '../action/SgaActions'
import { getLocation, getWeather, startLoader } from '../slice/weatherslice'

// function uses axios to fetch data from our api
let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  })
}

const meteo_base_url = `https://api.open-meteo.com/v1/forecast`

export function* fetchWatherData(payload) {
  try {
    const {latitude,longitude} = payload.data;
    yield put(startLoader())
    let res = yield call(() =>
      callAPI({
        url: `${meteo_base_url}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timeformat=unixtime`,
      })
    )
    yield put(getWeather(res.data))
  } catch (e) {
    yield put({ type: actions.FETCH_WEATHER_FAIL })
  }
}

export function* fetchLetlong (payload) {
    const {city} = payload.data
    try {
      yield put(startLoader())
      let res = yield call(() =>
        callAPI({
          url: `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
        })
      )
      yield put(getLocation(res.data))
      
    } catch (e) {
      yield put({ type: actions.FETCH_WEATHER_FAIL })
    }
  }


export default function* rootSaga() {
  yield takeEvery(actions.FETCH_WEATHER, fetchWatherData)
  yield takeEvery(actions.FETCH_LETLONG, fetchLetlong)

}