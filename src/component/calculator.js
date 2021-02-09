import React from 'react';



var num1 = ''
var num2 = ''
var num3

class clac extends React.Component {

    onChangeValue = (e) => {

        if (e.target.name === 'num1') {
            num1 = e.target.value;
            this.forceUpdate();
        }

        if (e.target.name === 'num2') {
            num2 = e.target.value;
            this.forceUpdate();
        }
    }

    Sum = () => {
        num3 = Number(num1) + Number(num2);
        this.forceUpdate();
    }

    Sub = () => {
        num3 = num1 - num2;
        this.forceUpdate();
    }

    Mul = () => {
        num3 = num1 * num2;
        this.forceUpdate();
    }

    Div = () => {
        num3 = num1 / num2;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.onChangeValue} value={num1} name='num1' />
                .
                <input type='text' onChange={this.onChangeValue} value={num2} name='num2' />
                =
                <input type='text' value={num3} />
                <br />
                <br />
                <input type='button' onClick={this.Sum} value='Sum' />.
                <input type='button' value='Sub' onClick={this.Sub} />.
                <input type='button' onClick={this.Mul} value='Mul' />.
                <input type='button' value='Div' onClick={this.Div} />
            </div>
        );
    }
}

export default clac