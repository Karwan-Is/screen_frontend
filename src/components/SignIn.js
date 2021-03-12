import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({})
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [checkEmail, setCheckEmail] = useState('')
    const [checkPass, setCheckPass] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setCheckEmail('')
        setCheckPass('')

        try {
            const res = await fetch('/signin', {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: { 'Content-Type': 'application/json' }
            })

            const data = await res.json()
            if (data.errors) {
                setCheckEmail(data.errors.email)
                setCheckPass(data.errors.password)
            }
            if (data.user) {
                setIsSignedIn(true);
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
        <div className="signin">
            {isSignedIn ? <Redirect to="/" /> : (
                <div className="form">
                    <h1>SignIn</h1>
                    <form action='/signin' onSubmit={handleSubmit}>
                        <input type="text" id="email" name="email" onChange={handleChange} placeholder="Enter your e-mail"></input>
                        <div id="emailErr">{checkEmail ? checkEmail : ''}</div>
                        <input type="password" id="password" name="password" onChange={handleChange} placeholder="Enter your password"></input>
                        <div id="passErr">{checkPass ? checkPass : ''}</div>
                        <button type="submit">SignIn</button>
                    </form>
                </div>)
            }
        </div>
    )
}

export default SignIn