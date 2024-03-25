import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./Usercontext";

function Header(){
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(()=> {
        fetch('http://localhost:4000/profile',{
            credentials:'include',
        }).then(response=>{
            console.log(response);
            response.json(response).then(userInfo=>{
                setUserInfo(userInfo);
            });
        })
    },[]);
    function logout(){
        fetch('http://localhost:4000/logout',{
            credentials:'include',
            method : 'POST'
        });
        setUserInfo(null);
    }

    const username = userInfo?.username
    return (
    <header>
        <Link to="/" className="logo">My Blog</Link>
            <nav>
                {username && (
                    <>
                        <Link to='/create'> Create new post </Link>
                        <a onClick={logout}>Log Out</a>
                    </>
                )}
                {!username && ( 
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/Register">Register</Link>
                    
                    </>
                )}
            </nav>
    </header>

    )
}

export default Header