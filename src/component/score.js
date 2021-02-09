import React from 'react';
import ScoreIndicator from 'react-score-indicator';



class Indicator extends React.Component {


    state = {
        num1: '',
        num2: ''
    }
    onValueChange = (e) => {
        this.setState({ num1: e.target.value })
        //alert(e)
        this.forceUpdate();
    }
    render() {
        return (
            <div className='App'>
                <ScoreIndicator
                    value={this.state.num1}
                    maxValue={200} />

                Starting Value: <input type='text' onChange={this.onValueChange} />

            </div>
        );
    }
}
export default Indicator