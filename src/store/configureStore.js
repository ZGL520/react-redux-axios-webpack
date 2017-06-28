import { createStore } from 'redux'
import rootReducer from '../rootReducer/index'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}