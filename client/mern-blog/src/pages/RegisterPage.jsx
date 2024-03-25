import { useState } from "react"

export default function RegisterPage(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    function changeUsername(event){
        setUsername(event.target.value);
    }
    function changePassword(event){
        setPassword(event.target.value);
    }
    async function register(event){
        event.preventDefault();
        const response = await fetch('http://localhost:4000/register',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        });
        if(response.ok === false ){
            alert('Registration failed');
        }else{
            alert('Registration successful');
        }
    }
    return(
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={changeUsername}/>
            <input type="password" placeholder="password" value={password} onChange={changePassword}/>
            <button>Register</button>
         </form>
    )
}