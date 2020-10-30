import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Test from './components/test'

class App extends Component {
    render() {
        return (
            <div>
                <Test Greet="chetas"/>
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("root"));
