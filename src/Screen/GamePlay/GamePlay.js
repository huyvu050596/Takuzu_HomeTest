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
import ScreenKey from "../../Navigation/ScreenKey";

const TIME_OUT_CLICK = 200;
export default class GamePlay extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataPuzzle: GamePlayUtils.createArray(),
            countTimeUp: 0,
            arrayIndexDefault: [],
            isFinish: false
        };
        this.timer = setInterval(this.updateTimer, 1000);
        this.onGoBack = _.throttle(this.onGoBack, TIME_OUT_CLICK);
        this.onPlayAgain = _.throttle(this.onPlayAgain, TIME_OUT_CLICK);

    }

    componentDidMount = () => {
        this.onGetIndexDefault();
    };

    componentWillUnmount = () => {
        this.onClearInterval();
    };

    onClearInterval = () => {
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

    onPlayAgain = async () => {
        if (!this.timer) {
            this.timer = setInterval(this.updateTimer, 1000)
        }
        await this.setState({
            countTimeUp: 0,
            isFinish:false,
            dataPuzzle: GamePlayUtils.createArray(),
            arrayIndexDefault: [],
        }, async ()=>{
            await this.onGetIndexDefault();
        })
    };

    onFinishGamePlay = async () =>{
        await this.setState({
            isFinish: true
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

    onGetIndexDefault = async () => {
        let arrayIndexDefault = [];
        await this.state.dataPuzzle.map((item, indexRow) => {
            item.map((item, indexItem) => {
                if (item === 1 || item === 0) {
                    const itemIndex = {
                        indexRow,
                        indexItem
                    };
                    arrayIndexDefault.push(itemIndex)
                }
            })
        });
        await this.setState({
            arrayIndexDefault
        });
    };

    onShowAlert = () => {
        CommonUtils.AlertCommon("Thông báo",
            `Bạn đã hoàn thành với thời gian ${CommonUtils.msToTime(this.state.countTimeUp)}`,
            this.onPlayAgain,
            "Chơi lại",
            this.onGoBack,
            'Đóng')
    };

    onGotoRankingScreen = () => {
        this.props.navigation.navigate(ScreenKey.Ranking);
    };

    onChangeStatusOfBrick = async (value, indexValue, indexRow) => {
        const indexExist = this.state.arrayIndexDefault.findIndex(item => item.indexItem === indexValue && item.indexRow === indexRow);
        if(indexExist < 0 && !this.state.isFinish){
            const newArray = await Immutable([...this.state.dataPuzzle]);
            const newDataPuzzle = await [...newArray.setIn([indexRow, indexValue], this.onGetValueNext(value.toString()))];
            await this.setState({
                dataPuzzle: newDataPuzzle
            }, () => {
                if (GamePlayUtils.isSolved(newDataPuzzle)) {
                    this.onFinishGamePlay();
                    this.onSaveScore();
                    this.onClearInterval();
                    this.onGotoRankingScreen();
                }
            });
        }else if(this.state.isFinish){
            this.onShowAlert()
        }
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
        console.log(GamePlayUtils.solve(this.state.dataPuzzle))
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
