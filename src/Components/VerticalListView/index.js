import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import LoadingIndicator from "../Common/LoadingIndicator";


class VerticalListView extends PureComponent {
    render() {
        const {listFooterComponent, keyExtractor, renderChildren, onEndReached, isLoadingMore, data, style, ...mergeProps} = this.props;
        return (
            <FlatList
                {...mergeProps}
                style={[{flex: 1}, style]}
                data={data}
                removeClippedSubviews={false}
                horizontal={false}
                extraData={this.props}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                renderItem={renderChildren}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                ListFooterComponent={listFooterComponent ? listFooterComponent : isLoadingMore ?
                    <LoadingIndicator/> : null}
            />
        );
    }
}

VerticalListView.defaultProps = {
    data: [],
    isLoadingMore:false
};

VerticalListView.propTypes = {
    data: PropTypes.array,
    renderChildren: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    keyExtractor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
    onEndReached: PropTypes.func,
    isLoadingMore: PropTypes.bool,
    listFooterComponent: PropTypes.node
};

export default VerticalListView;

