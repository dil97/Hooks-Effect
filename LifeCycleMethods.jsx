import React, { Component } from 'react';

class LifeCycleMethods extends Component {
    
    constructor(){
        super();
        console.log("This is Constructor");
    }
    static getDerivedStateFromProps(props,state) {
        console.log("This is getDerivedStateFromProps");


    }
    componentDidMount(){
        console.log("This is componentDidMount");
    }
    
    // componentWillunmount (){
    //     console.log("This is componentWillmount")
    // }
    
    
    render() {
        console.log("This is render")
        return (
            <div>
                <h1>This is Life Cycle Method</h1>
            </div>
        );
    }
}

export default LifeCycleMethods;