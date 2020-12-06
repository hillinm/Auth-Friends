import React from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        this.getFriendList();
    }

    getFriendList = () => {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            console.log(res);
            this.setState({ friends: res.data })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="Container">
            <div>
            <div className="Title">
            <img 
                src="https://ae01.alicdn.com/kf/HTB1mwzqPFXXXXXrXXXXq6xXFXXXg/TV-Show-Friends-Poster-Custom-Canvas-Poster-Art-Home-Decoration-Cloth-Fabric-Wall-Poster-Print-Silk.jpg" 
                alt="logo"
                width="500px"
                ></img>
            </div>
            {this.state.friends.map(friend => {
                return (
                <div className="Card">
                    <h2>{friend.name}</h2>
                    <h3>{friend.age}</h3>
                    <h3>{friend.email}</h3>
                </div>
                )
            })}
            </div>
        </div>
        )
    }
}


export default FriendList;