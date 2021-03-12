import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({})
    const [isSignedUp, setIsSignedUp] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('/signup', {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await res.json()
            if (data.errors) {
            }
            if (data.user) {
                setIsSignedUp(true);
                window.location.reload(false)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className="signup">
            {isSignedUp ? <Redirect to="/" /> :
                (<div className="form">
                    <h1>SignUp</h1>
                    <form onSubmit={handleSubmit} action='/signup'>
                        <input type="text" id="userName" name="userName" onChange={handleChange} placeholder="User Name" required></input>
                        <input type="text" id="firstName" name="firstName" onChange={handleChange} placeholder="First Name" required></input>
                        <input type="text" id="lastName" name="lastName" onChange={handleChange} placeholder="Last Name" required></input>
                        <div className="form-wrapper">
                            <select id="gender" name="gender" onChange={handleChange}>
                                <option>Gender</option>
                                <option value="female" >Female</option>
                                <option value="male" >Male</option>
                                <option value="others" >Others</option>
                            </select>
                            <input type="date" id="dateOfBirth" name="dateOfBirth" onChange={handleChange} required></input>
                        </div>
                        <input type="email" id="email" name="email" onChange={handleChange} placeholder="E-mail" required></input>
                        <input type="password" id="password" name="password" onChange={handleChange} placeholder="Password" required></input>
                        <button type="submit">SignUp</button>
                    </form>
                </div>)
            }
        </div>
    )
}

export default SignUp