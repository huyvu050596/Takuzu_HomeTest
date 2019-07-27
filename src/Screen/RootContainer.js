// Libraries
import React, {memo} from 'react';
import {createAppContainer} from 'react-navigation';
import {StatusBar, StyleSheet, View, Platform} from 'react-native';
// Components
import MainNav from '../Navigation/AppNavigation';
import {ApplicationStyles, Colors} from '../Themes';
import AsyncStorage from '@react-native-community/async-storage';

const AppContainer = createAppContainer(MainNav);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const persistenceKey = "persistenceKey";
const persistNavigationState = async (navState) => {
    try {
        await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
    } catch (err) {
        // handle the error according to your needs
    }
};
const loadNavigationState = async () => {
    const jsonString = await AsyncStorage.getItem(persistenceKey);
    return JSON.parse(jsonString);
};

const getPersistenceFunctions = () => {
    return enablePersistence && __DEV__ ? {
        persistNavigationState,
        loadNavigationState,
    } : undefined;
};

const enablePersistence = false;

const RootContainer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.statusBar}>
                <StatusBar animated backgroundColor={Colors.statusBar} barStyle="dark-content"/>
            </View>
            <AppContainer {...getPersistenceFunctions()}/>
        </View>
    );
};

export default memo(RootContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: Colors.statusBar
    }
});
