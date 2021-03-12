import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import Data from '../db.json'


const Header = () => {
    const [isDown, setIsDown] = useState(false)
    const [userId, setUserId] = useState('')
    // const [searchData, setSearchData] = useState('')

    useEffect(() => {
        window.addEventListener("resize", handleWidth)

        try {
            const res = async () => {
                await fetch("/header")
                    .then(res => res.json())
                    .then(user => {
                        setUserId(user)
                    })
                    .catch(err => console.log(err))
            }
            res()
        } catch (err) {
            console.log(err)
        }

        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])

    const dropDown = () => {
        setIsDown(!isDown)
    }

    const handleClick = () => {
        setIsDown(false)
    }

    const handleWidth = () => {
        if (window.innerWidth < 720) {
            setIsDown(false)
        }
    }

    const handleSignOut = async () => {
        const res = await fetch("/signout")
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(err => console.log(err))

        if (res) {
            setUserId('')
        }
    }

    const SignedOut = (
        <div className={isDown ? "show-right nav-right" : "hide-right nav-right"}>
            <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/signin'>SignIn</NavLink></li>
        </div>
    )

    const SignedIn = (
        <div className={isDown ? "show-right nav-right" : "hide-right nav-right"}>
            <li><NavLink to='/' onClick={handleSignOut}>SignOut</NavLink></li>
            <li> <p>Welcome {userId}</p></li>
        </div>
    )

    // const handleSearch = (e) => {
    //     setSearchData(e.target.value)
    // }

    return (
        <header>
            <div className="banner">
                <h1>Screen</h1>
                {/* <div className="search">
                    <input type="text" id="search" onChange={handleSearch} placeholder="Search"></input>
                    <div className="search-wrapper">
                        {Data.movies.filter(data => {
                            return (searchData.length > 1 && data.title.toLowerCase().indexOf(searchData.toLowerCase()) >= 0)
                        }).map(title => {
                            return (
                                <div className="search-poster" key={title.id}>
                                    <img src={title.poster} alt="Search Poster" />
                                    <h4><a href={"/details?id=" + title.id}>{title.title}</a></h4>
                                </div>
                            )
                        })}
                    </div>
                </div> */}
            </div>

            <nav>
                <ul className="dropdown">
                    <div className="drop-btn" onClick={dropDown}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div onClick={handleClick} className={isDown ? "show-dropdown dropdown-content" : "hide-dropdown dropdown-content"}>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Movies</NavLink></li>
                        <li><NavLink to='/series'>Series</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    </div>
                    {userId ? SignedIn : SignedOut}
                </ul>
            </nav>
        </header>
    )
}

export default Header