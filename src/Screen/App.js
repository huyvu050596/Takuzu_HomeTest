import React, {PureComponent} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import configStore from '../Redux/store';
import InitDefaultComponentStyleProps from '../Themes/ApplicationStyles/ComponentDefaultStyleProps';
import RootContainer from './RootContainer';
import {PersistGate} from 'redux-persist/lib/integration/react';

EStyleSheet.build();
InitDefaultComponentStyleProps();

class App extends PureComponent {
    render() {
        return (
            <Provider store={configStore.store}>
                <PersistGate loading={null} persistor={configStore.persistStore}>
                    <RootContainer/>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
