import React, { Component } from 'react'
import ProductTwo from './ProductTwo'

export default class ProductOne extends Component {
    state = {
        addStyle : false
    }
    render() {
        return (
            <div className={this.state.addStyle?"a":"b"}>
                <ProductTwo />
            </div>
        )
    }
}
