import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../action/goods';

class Goods extends Component {
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getGoods());
    }
    render() {
        return this.props.isFetching ? (<h1>Loading…</h1>) : (
            <ul className="goods">
                {
                    this.props.goods.map((ele, idx) => (
                        <li key={idx} style={{marginBottom: 20, listStyle: 'none'}}>
                            <span>{ele.name}</span> | 
                            <span>￥ {ele.price}</span> | 
                            <span>剩余 {ele.amount} 件</span>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.goods.isFetching,
    goods: state.goods.data
});

export default connect(mapStateToProps)(Goods);