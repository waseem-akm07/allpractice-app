import React from 'react'


class Heading extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            hello: 'world'
        }
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    changeState() {
        this.setState({ hello: "Waseem" })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate()");
        return true;        
    }

    componentWillUpdate(){
        console.log("componentWillUpdate()");        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate()");        
    }

    render() {
        return (
            <div>
                <h2>Hello {this.state.hello}</h2>
                <h3>
                    <a onClick={this.changeState.bind(this)}>Press Here</a>
                </h3>
            </div>
        );
    }
}
export default Heading