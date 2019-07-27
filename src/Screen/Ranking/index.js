import Ranking from './Ranking';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as commonActions from '../../Redux/action/CommonAction';

const mapStateToProps = state => {
    return {
        dataScore : state.commonReducer.dataScore
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ranking);