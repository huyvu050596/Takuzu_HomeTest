import AsyncStorage from '@react-native-community/async-storage';
import {LIGHT} from "../Constants/Constants";

export default class LocalStorage {
    static clearLocal = async () => {
        console.log("LocalStorage CLEAR");
        try {
            await AsyncStorage.clear();
            GlobalStore.token = null;
        } catch (error) {
            console.log("LocalStorage CLEAR \n ERROR:", error.message);
        }
    };

    static setToLocal = async (key, value) => {
        console.log("LocalStorage SET " + key + " TO LOCAL", value);
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log("LocalStorage SET " + key + " TO LOCAL \n ERROR:", error.message);
        }
    };

    static getFromLocal = async (key) => {
        let data = null;
        try {
            let res = await AsyncStorage.getItem(key);
            data = JSON.parse(res);
            console.log("LocalStorage GET " + key + " FROM LOCAL", data);
        } catch (error) {
            console.log("LocalStorage GET " + key + " FROM LOCAL \n ERROR:", error.message);
        }

        return data;
    };

    static getToken = async () => {
        return await LocalStorage.getFromLocal('token');
    };

    static setToken = async (token = null) => {
        await LocalStorage.setToLocal('token', token);
    };

    static getTheme = async () => {
        const theme = await LocalStorage.getFromLocal('theme');
        if (!theme) return LIGHT;
    };

    static setTheme = async (value = LIGHT) => {
        await LocalStorage.setToLocal('theme', value);
    };
}
