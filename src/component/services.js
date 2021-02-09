import React from 'react';

export default class WebApI extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.getUser()

        // fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((resjson) => {
        //     this.setState({ user: resjson });
        // })
    }

    getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
            .then((resjson) => {
                this.setState({ user: resjson });
            })
    }

    getData = () => {
        if (this.state.user !== null) {
            let users = [];
            this.state.user.map((item) => {
                users.push(
                    <div>
                        <h4>{item.name}</h4>
                    </div>
                )
            })
            return users;
        }
    }

    render() {
        return (
            <div>
                {this.getData()}
            </div>
        )
    }
}
