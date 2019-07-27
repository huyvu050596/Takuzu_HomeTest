// Libraries
import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
//Components
export default class SquareBrick extends PureComponent {

    getStatusOfTheSquare = (item) =>{
        const arrayStyle = {
            "-1": styles.nonActive,
            "0": styles.activeRed,
            "1": styles.activeBlue
        };
        return arrayStyle[item.toString()]
    };

    onClickSquareBrick = () =>{
        const {onPress, value, indexValue, indexRow} = this.props;
        if(onPress){
            onPress(value, indexValue, indexRow);
        }
    };

    render() {
        const {value} = this.props;
        return (
            <TouchableOpacity style={[styles.container, this.getStatusOfTheSquare(value)]} onPress={this.onClickSquareBrick}>
            </TouchableOpacity>
        )
    }
}

SquareBrick.defaultProps = {
    value: -1,
    indexValue: 0,
    indexRow: 0,
    onPress: () => {},
};

SquareBrick.propTypes = {
    value: PropTypes.number.isRequired,
    indexValue: PropTypes.number.isRequired,
    indexRow: PropTypes.number.isRequired,
    onPress: PropTypes.func,
};