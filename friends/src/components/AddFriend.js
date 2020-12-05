import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: {
                id: Date.now(),
                name: "",
                age: "",
                email: ""
            }
        }
    }

    submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.friend, {
            headers:
            {
                authorization: window.localStorage.getItem('token')
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    changeHandler = e => {
        this.setState( {friend: {...this.state.friend, [e.target.name]: e.target.value}})
        console.log(this.state)
    }

    render() {
        return (
            <div className="Container">
                <div>
                <form onSubmit={this.submitHandler}>
                <h1>Add A Friend</h1>
                <div>
                    <input
                            type="text"
                            name="name"
                            onChange={this.changeHandler}
                            placeholder="Name"
                        />
                </div>
                <div>
                    <input
                            type="number"
                            name="age"
                            onChange={this.changeHandler}
                            placeholder="Age"
                        />
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <button>ADD FRIEND</button>
                </div>
                </form>
                </div>
            </div>
        )
    }
}

export default AddFriend;