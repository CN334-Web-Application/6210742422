import { React, useState, useEffect } from "react";
import axios from "axios";
import "./ProCard.css";

function App() {
    const [profile, setProfile] = useState([]);
  
    useEffect(()=>{
      async function getProfile(){
        try{
          const profile = await axios.get("http://127.0.0.1:8000/api/profile/")
          console.log(profile.data);
          setProfile(profile.data);
        } catch (error){
          console.log(error);
        }
      }
      getProfile();
    }, [])
    return (
      <div className="App">
        {/* <div id="gradient"></div> */}
        <div id="card">
            {
                profile.map((profile, i) => {
                    return (
                    <h2 key={profile.id}>{profile.fname} {profile.lname}</h2>
                    )
                })
            }
            <p>Student of Thammasart University.</p>
            <p>Interested in Web technologies like HTML5, CSS3, JavaScript, PHP, MySQL, etc.</p>
            <p>Love Codepen.io and respect Chris Coyier. ;)</p>
            {
                profile.map((profile, i) => {
                    return (
                        <><span class="left bottom">tel: 731 366 ***</span><span class="right bottom">Email: {profile.email}</span></>
                    )
                })
            }
            
            
        </div>
        
      </div>
    );
  }
  
  export default App;