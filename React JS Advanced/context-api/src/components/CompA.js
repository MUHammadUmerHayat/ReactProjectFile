import React, { Component } from 'react'
import CompB from './CompB'

export default class CompA extends Component {
    render() {
        return (
            <div>
                <CompB/>
            </div>
        )
    }
}
