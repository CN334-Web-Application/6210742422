import React,{ useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./EditPro.css";

class EditProCard extends React.Component {
    state = {
        name: "",
        description: "",
        tel: "",
        email: "",
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        // const pro_id = this.props.match.params.id;
        // console.log(pro_id);
        const res = await axios.get('http://127.0.0.1:8000/api/e-profile/1');
        if(res.data.status === 200){
            this.setState({
                name: res.data.profile.name,
                description: res.data.profile.description,
                tel: res.data.profile.tel,
                email: res.data.profile.email,
            })
        }
    }

    updateSubmit = async(e) =>{
        // console.log(this.state);
        // const pro_id = this.props.match.params.id;
        e.preventDefault();
        const res = await axios.put('http://127.0.0.1:8000/api/u-profile/1', this.state);
        console.log(res) ;     
        if(res.data.status === 200){
            console.log(res.data.message);
            this.setState({
                name: "",
                description: "",
                tel: "",
                email: "",
            })
            
        }
    }

    render() {
        return (
            <div className="App">
            {/* <div id="gradient"></div> */}
                <div id="card">
                    <div className="card-header">
                        <Link to={'/'}>Back</Link>
                    </div>   
                    <div className="card-body">
                        <form onSubmit={this.updateSubmit}>
                            <div className="form-group">
                                <h2 className="name">Name: </h2>
                                <input type="text" name="name" onChange={this.handleInput} value={this.state.name} placeholder="Name"/>
                            </div>  
                            <div className="form-group">
                                <p>description:</p>
                                <input type="text" name="description" onChange={this.handleInput} value={this.state.description} className="description"/>
                            </div>  
                            <div className="form-group">
                                <span className="left tel" >tel: </span>
                                <input type="text" name="tel" onChange={this.handleInput} value={this.state.tel} placeholder="tel." className="left"/>
                            </div> 
                            <div className="form-group">
                                <span className="right email" >Email: </span>
                                <input type="text" name="email" onChange={this.handleInput} value={this.state.email} placeholder="e-mail" className="right"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </form> 
                    </div>
                </div>
            
            </div>
        );
    }
}

export default EditProCard;