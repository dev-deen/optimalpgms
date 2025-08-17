import React,  { useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function LoginPage(){
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault()
        //axios request for login
        userLogin()
        setUserDetails({
            username: "",
            password: ""
        })
    }

    const userLogin = async() =>{

        try{
            const response = axios.post("http://localhost:8000/api/login/", userDetails, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200){
                localStorage.setItem("token", response.data.token);
                navigate('/dashboard')
            }

        }catch(err){
            setError("Invalid username or Password")
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUserDetails((prev)=>(
            {...prev, 
                [name]: value
            }
        ))
    }

    return (
        <div class="container">
            <div className="container-card">
                <div className="heading">
                    <h3>Sign-in</h3>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <span 
                        className="input-section">
                            <label 
                            className="label">
                                Username
                            </label>

                            <input
                            className="input"
                            onChange={handleChange}
                            value={userDetails.username}
                            type='text'
                            placeholder="Username"
                            name="username"
                            />

                        </span>
                        
                        <span 
                        className="input-section">
                            <label 
                            className="label">
                                Password
                            </label>

                            <input
                            className="input"
                            onChange={handleChange}
                            value={userDetails.password}
                            type='password'
                            placeholder="Enter Password"
                            name="password"
                            />

                        </span>
                         {error && <p style={{ color: "red" }}>{error}</p>}
                        <button
                            className="submit">
                                Submit
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default LoginPage;