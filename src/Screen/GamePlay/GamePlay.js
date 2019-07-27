import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {Fonts, Metrics, Colors} from '../../Themes';
import CustomButton from "../../Components/Common/Button/CustomButton";
import CustomTitle from "../../Components/Common/Title/CustomTitle";
import SquareBrick from "../../Components/SquareBrick";
import {CommonUtils} from "../../Utils";
import * as GamePlayUtils from "../../Utils/GamePlayUtils";
import Immutable from "seamless-immutable";
import uuid from "uuid";
import _ from "lodash";

const TIME_OUT_CLICK = 200;
export default class GamePlay extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataPuzzle: GamePlayUtils.createArray(),
            countTimeUp: 0,
        };
        this.timer = setInterval(this.updateTimer, 1000);
        this.onGoBack = _.throttle(this.onGoBack, TIME_OUT_CLICK);
        this.onPlayAgain = _.throttle(this.onPlayAgain, TIME_OUT_CLICK);

    }

    componentWillUnmount = () => {
        this.onClearInterval();
    };

    onClearInterval = () =>{
        clearInterval(this.timer);
        this.timer = null;
    };

    onGoBack = () => {
        this.props.navigation.goBack();
    };

    updateTimer = async () => {
        await this.setState((prevState) => ({
            countTimeUp: prevState.countTimeUp + 1000
        }));
    };

    onPlayAgain = () => {
        if(!this.timer){
            this.timer = setInterval(this.updateTimer, 1000)
        }
        this.setState({
            countTimeUp: 0,
            dataPuzzle: GamePlayUtils.createArray(),
        })
    };

    onSaveScore = () => {
        this.props.commonActions.saveCore([{
            id: uuid.v4(),
            time: this.state.countTimeUp
        }]);
    };

    onGetValueNext = (key) => {
        const valueChange = {
            "-1": 0,
            "0": 1,
            "1": -1
        };
        return valueChange[key]
    };

    onShowAlert = () =>{
        CommonUtils.AlertCommon("Chức mừng",
            `Bạn đã chiến thắng với thời gian ${CommonUtils.msToTime(this.state.countTimeUp)}`,
            this.onPlayAgain,
            "Chơi lại",
            this.onGoBack,
            'Đóng')
    };

    onChangeStatusOfBrick = async (value, indexValue, indexRow) => {
        const newArray = await Immutable([...this.state.dataPuzzle]);
        const newDataPuzzle = await [...newArray.setIn([indexRow, indexValue], this.onGetValueNext(value.toString()))];
        await this.setState({
            dataPuzzle: newDataPuzzle
        }, () => {
            if (GamePlayUtils.isSolved(newDataPuzzle)) {
                this.onSaveScore();
                this.onClearInterval();
                this.onShowAlert();
            }
        });
    };

    renderItemSquare = (value, indexValue, indexRow) => <SquareBrick value={value}
                                                                     key={indexValue}
                                                                     indexValue={indexValue}
                                                                     indexRow={indexRow}
                                                                     onPress={this.onChangeStatusOfBrick}/>;

    renderHeader = () => <View style={styles.viewHeading}>
        <CustomTitle type='heading2'
                     style={styles.txtHeading}
                     color={Colors.neutral}>
            {CommonUtils.msToTime(this.state.countTimeUp)}
        </CustomTitle>
    </View>;

    renderBody = () => <View style={styles.viewBody}>
        {
            this.state.dataPuzzle.map((item, indexRow) => {
                return (
                    <View style={styles.contentBody} key={indexRow}>
                        {
                            item.map((value, indexValue) => this.renderItemSquare(value, indexValue, indexRow))
                        }
                    </View>
                )
            })
        }

    </View>;

    renderFooter = () => <View style={styles.viewFooter}>
        <CustomButton
            onPress={this.onGoBack}
            label={'Quay lại'}
            variant={'text'}
            textProps={{style: styles.txtBottomBack}}
            buttonStyles={styles.btnBottomBack}
            color={Colors.primary}
        />
        <CustomButton
            onPress={this.onPlayAgain}
            label={'Chơi lại'}
            variant={'text'}
            textProps={{style: styles.txtBottomPlayAgain}}
            buttonStyles={styles.btnBottomPlayAgain}
            color={Colors.primary}
        />
    </View>;

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
            </View>
        );
    }
}

GamePlay.propTypes = {};

GamePlay.defaultProps = {
    navigation: PropTypes.object,
    dataScore: PropTypes.array,
    commonActions: PropTypes.object
};
