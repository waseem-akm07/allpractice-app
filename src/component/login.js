import React from 'react';


class Login extends React.Component {



    state = {
        email: '',
        emler: '',
        pwd: '',
        pwder: '',
        correct: ''
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })

    }

    onPwdChange = (e) => {
        this.setState({ pwd: e.target.value })
    }

    onButtonClick = () => {

        let eml = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (this.state.email.length > 0 && this.state.pwd.length > 0) {
            if (eml.test(this.state.email) === false) {
                if (this.state.pwd.length < 5) {
                    alert('Email/Pwd not Correct')
                }
            }
            else {
                this.setState({ email: '' })
                this.setState({ pwd: '' })
                this.state.correct = alert('login');
            }
        }
    }


    render() {
        return (
            <div>
                <b>Email:</b>
                <input type='text' value={this.state.email} onChange={this.onEmailChange} /><br />
                <label></label>
                <br />
                <b>Password:</b>
                <input type='text' value={this.state.pwd} onChange={this.onPwdChange} /><br />
                <label></label>
                <br />
                <input type='button' value='Login' onClick={this.onButtonClick} />
            </div>
        );
    }
}
export default Login