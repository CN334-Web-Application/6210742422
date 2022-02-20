import React,{ useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./ProCard.css";

class ProCard extends React.Component {
    state = {
        profile: [],
        loading: true,
    }
    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/profile');
        console.log(res);
        if(res.data.status === 200){
            this.setState({
                profile: res.data.profile,
                loading: false
            })
        }
    }

    render() {

        var profile_HTML = "";
        if(this.state.loading)
        {
            profile_HTML = <h2>Loading Profile</h2>
        }
        else
        {
            profile_HTML =
            this.state.profile.map((item) =>{
                return (
                    <div id="card">
                        <h2>Name: {item.name}</h2>     
                        <p>description: {item.description}</p>
                        <span className="left bottom" >tel: {item.tel} </span>
                        <span className="right bottom" >Email: {item.email}</span>
                    </div>
                );
            });
        }

        return (
            <div className="App">
                <div id="gradient"></div>
                <Link to={'edit-profile'}>Edit</Link>
                {profile_HTML}
            </div>
        );
    }
}

export default ProCard;