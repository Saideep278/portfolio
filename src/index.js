import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './app'
import {Provider} from 'react-redux'
import { configureStore  } from '@reduxjs/toolkit'
import { applyMiddleware ,compose} from 'redux'
import {reducers} from './reducers'
import thunk from 'redux-thunk'


const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({reducer:reducers},{},compose(applyMiddleware(thunk)))

root.render(
    <Provider store={store} >
        <App />    
    </Provider>,  
)




