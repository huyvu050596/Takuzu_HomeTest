import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {Fonts, Metrics, Colors} from '../../Themes';
import CustomButton from "../../Components/Common/Button/CustomButton";
import CustomTitle from "../../Components/Common/Title/CustomTitle";
import VerticalListView from "../../Components/VerticalListView";
import ScoreItemView from "../../Components/ScoreItemView";
import {CommonUtils} from "../../Utils";
import _ from "lodash";

const TIME_OUT_CLICK = 200;
export default class Ranking extends PureComponent {
    constructor(props) {
        super(props);
        this.onGoBack = _.throttle(this.onGoBack, TIME_OUT_CLICK);

    }

    onGoBack = () => {
        this.props.navigation.goBack();
    };

    renderItemScore = ({item, index}) => <ScoreItemView value={CommonUtils.msToTime(item.time)} rank={index + 1}/>;

    renderSeparator = () => <View style={styles.dividerList}/>;

    renderHeader = () => <CustomTitle type='heading2'
                                      style={styles.txtHeading}
                                      color={Colors.neutral}>
        {'Bảng xếp hạng'}
    </CustomTitle>;

    renderBody = () => <View style={styles.viewBody}>
        {
            this.props.dataScore.length > 0 ? <VerticalListView data={this.props.dataScore}
                                                                ItemSeparatorComponent={this.renderSeparator}
                                                                keyExtractor={item => item.id.toString()}
                                                                renderChildren={this.renderItemScore}/> : <View style={{backgroundColor:'red'}}/>
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

Ranking.propTypes = {
    // bla: PropTypes.string,
};

Ranking.defaultProps = {
    navigation: PropTypes.object,
    dataScore: PropTypes.array,
};
