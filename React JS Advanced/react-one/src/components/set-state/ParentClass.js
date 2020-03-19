import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParentClass extends Component {
    
    getCountFromChild = (count)=>{
        console.log("Count value from child ",count)
    }
    
    render() {
        return (
            <div>
               <h1>Parent Count : </h1> 
               <ChildClass action={this.getCountFromChild}/> 
            </div>
        )
    }
}
