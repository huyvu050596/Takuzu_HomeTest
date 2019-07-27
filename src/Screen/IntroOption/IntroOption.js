import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {Fonts, Metrics, Colors} from '../../Themes';
import CustomButton from "../../Components/Common/Button/CustomButton";
import CustomTitle from "../../Components/Common/Title/CustomTitle";
import ScreenKey from "../../Navigation/ScreenKey";

export default class IntroOption extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <CustomTitle type='heading2'
                             style={styles.txtHeading}
                             color={Colors.neutral}>
                    {'Takuza'}
                </CustomTitle>
                <CustomButton
                    onPress={() => this.props.navigation.navigate(ScreenKey.GamePlay)}
                    label={'Bắt đầu chơi'}
                    variant={'text'}
                    textProps={{style: styles.txtBottomPlay}}
                    buttonStyles={styles.btnBottomPlay}
                    color={Colors.primary}
                />
                <CustomButton
                    onPress={() => this.props.navigation.navigate(ScreenKey.Ranking)}
                    label={'Bảng xếp hạng'}
                    variant={'text'}
                    textProps={{style: styles.txtBottomRank}}
                    buttonStyles={styles.btnBottomRank}
                    color={Colors.primary}
                />
                <CustomTitle type='heading2'
                             style={styles.txtBottom}
                             color={Colors.neutral}>
                    {'Power by: Huy Vũ'}
                </CustomTitle>
            </View>
        );
    }
}

IntroOption.propTypes = {
    // bla: PropTypes.string,
};

IntroOption.defaultProps = {
    // bla: 'test',
};
