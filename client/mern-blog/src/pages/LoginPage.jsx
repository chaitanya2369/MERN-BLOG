import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../Usercontext";


export default function LoginPage(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext)

    function passwordChange(event){
        setPassword(event.target.value);
    }
    function usernameChange(event){
        setUsername(event.target.value);
    }
    async function login(event){
        event.preventDefault();
        const response = await fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        });
        if(response.ok){
            response.json().then(userInfo=>{
                setUserInfo(userInfo);
                setRedirect(true);
            })
        }
        else{
            alert('wrong credentials');
        }
    }
    if(redirect){
        console.log("Redirecting to home...");
        return <Navigate to = {'/'}/>
    }
    
    return(
        <div>
            <form className="login" onSubmit={login}>
                <h1>Login</h1>
                <input type="text" placeholder="username" value={username} onChange={usernameChange}/>
                <input type="password" placeholder="password" value={password} onChange={passwordChange}/>
                <button>Login</button>
            </form>
        </div>
    )
}