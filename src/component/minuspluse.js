import React from 'react';


class NumCal extends React.Component {


    state = {
        qty: 0,
        mini: '',
        max: ''
    }
    onIncrement = () => {
        this.setState({ qty: this.state.qty + 1 });
    }


    onDecrament = () => {
        this.setState({ qty: this.state.qty - 1 });
    }


    render() {
        return (
            <div className='App'>
                <br />
                {/* <button onClick={this.onIncrement}>
                   +
               </button> */}
               <input type='submit' onClick={this.onIncrement} value='+' className='btnclr'/>

                <label className='lblclr'>
                    {this.state.qty}
                </label>

                <button onClick={this.onDecrament} className='btnclr'>
                    -
                </button><br/>
                <label>
                    {/* {JSON.stringify(this.state.qty)} */}
                </label>
            </div>
        );
    }
}
export default NumCal