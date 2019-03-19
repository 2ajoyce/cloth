import {RootAction, RootState, Services} from 'MyTypes'
import {applyMiddleware, createStore} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootEpic from './root-epic'
import services from '../services'
import {composeWithDevTools} from 'redux-devtools-extension'

export const epicMiddleware = createEpicMiddleware<RootAction,
    RootAction,
    RootState,
    Services>({
    dependencies: services,
})

export const sagaMiddleware = createSagaMiddleware()

// configure middlewares
const middlewares = [epicMiddleware, sagaMiddleware]
// compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

// rehydrate state on app start
const initialState = {}

// create store
const store = createStore(rootReducer, initialState, enhancer)

epicMiddleware.run(rootEpic)

// export store singleton instance
export default store
