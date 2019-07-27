// Libraries
import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import CustomTitle from "../Common/Title/CustomTitleIcon";
import {Colors} from "../../Themes";
//Components
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export default class ScoreItemView extends PureComponent {

    onGetBorderColor = () =>{
      return {borderColor: getRandomColor()};
    };

    render() {
        const {value, rank} = this.props;
        return (
            <View style={[styles.container, this.onGetBorderColor()]} onPress={this.onClickSquareBrick}>
                <CustomTitle type='heading3'
                             style={styles.txtScore}
                             color={Colors.neutral6}>
                    {`${rank !== 1 ? rank.toString() : 'Thời gian ngắn nhất'}.  `}
                </CustomTitle>

                <CustomTitle type='heading2'
                             style={styles.txtScore}
                             color={Colors.neutral6}>
                    {value.toString()}
                </CustomTitle>
            </View>
        )
    }
}

ScoreItemView.defaultProps = {
    value: '',
    rank: 0,
};

ScoreItemView.propTypes = {
    value: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
};