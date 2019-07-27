import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {isDebug} from "../Config/LogConfig";
import reducer from "./Reducers";
import { composeWithDevTools } from 'remote-redux-devtools';
import AsyncStorage from "@react-native-community/async-storage"
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'common',
    storage: AsyncStorage,
    whitelist: ['commonReducer']
};
const middleware = [thunk];
isDebug() && middleware.push(logger);

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
    persistedReducer,
    enhancer,
);

export default {store , persistStore: persistStore(store)};
