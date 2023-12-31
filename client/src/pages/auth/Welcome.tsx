import { useState } from 'react'
import bcrypt from "bcryptjs-react";


interface WelcomeProps {
    loginStatus: string;
    setLoginStatus: (status: string) => void;
    registerStatus: string;
    setRegisterStatus: (status: string) => void;
  }

// This function is about to render login/register form
export default function Welcome({loginStatus, setLoginStatus, registerStatus, setRegisterStatus}: WelcomeProps) {

    const [showForm, setShowForm] = useState("login")

    function changeForm() {
        showForm === "login" ? setShowForm("register") : setShowForm("login")
    }

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const emailNameL = (document.getElementById('emailNameL') as HTMLInputElement).value;
        // hashing pw
        //const passwordNameL = bcrypt.hash((document.getElementById('passwordNameL') as HTMLInputElement).value, 10);
        const hashedPassword = bcrypt.hashSync((document.getElementById('passwordNameL') as HTMLInputElement).value, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        fetch("http://localhost:9000/users/login/check/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailNameL,
            password: hashedPassword,
        }),
        })
        .then(function (response) { return response.json()})
        .then(result => {setLoginStatus(result.message)
        if (result.message === "Logged in :)") {
            sessionStorage.setItem("message" , result.message);
            sessionStorage.setItem("login" , result.login);
            sessionStorage.setItem("password" , result.password);
        } else {
            sessionStorage.setItem("message" , '');
            sessionStorage.setItem("login" , '');
            sessionStorage.setItem("password" , '');
        }
        });
    }

    function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const emailNameR = (document.getElementById('emailNameR') as HTMLInputElement).value;
        const loginNameR = (document.getElementById('loginNameR') as HTMLInputElement).value;
        const passwordNameR = (document.getElementById('passwordNameR') as HTMLInputElement).value;
        const passwordName2R = (document.getElementById('passwordName2R') as HTMLInputElement).value;

        if (passwordNameR === passwordName2R) {
        if (passwordNameR.length < 8) {setRegisterStatus("Password too short!")} else {
        
        //hashing pw
        const hashedPassword = bcrypt.hashSync((document.getElementById('passwordNameR') as HTMLInputElement).value, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        fetch("http://localhost:9000/users/registration/check/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          email: emailNameR,
          login: loginNameR,
          password: hashedPassword,
        }),
        })
        .then(function (response) { return response.json()})
        .then(result => setRegisterStatus(result.message))
        }
        }
        else {
            setRegisterStatus("Passwords are not the same!")
        }
    }
    
    const LoginForm = () => {
        return (
        <>
        <form className="login-form" onSubmit={handleLogin}>
            <div style={{color: "white", fontSize: 20}}>Login form</div>
            <label htmlFor="emailNameL">Email</label>
            <input id="emailNameL" type="text" required></input>
            <label htmlFor="passwordNameL">Password</label>
            <input id="passwordNameL" type="password" required></input>
            <button type="submit">Log in</button>
            <button onClick={changeForm}>Swap to register</button>
            <br/>
            <label>{loginStatus}</label>
        </form>
        </>
        )}

    const RegisterForm = () => {
        return (
        <>
        <form className="register-form" onSubmit={handleRegistration}> 
            <div style={{color: "white", fontSize: 20}}>Register form</div>
            <label htmlFor="emailNameR">Email</label>
            <input id="emailNameR" type="email" required></input>
            <label htmlFor="loginNameR">Login</label>
            <input id="loginNameR" type="text" required></input>
            <label htmlFor="passwordNameR">Password</label>
            <input id="passwordNameR" type="password" required></input>
            <label htmlFor="passwordName2R">Repeat password</label>
            <input id="passwordName2R" type="password" required></input>
            <button type="submit">Register</button>
            <button onClick={changeForm}>Swap to login</button>
            <br/>
            <label>{registerStatus}</label>
        </form>
        
        </>
        )}
    
    return (<>{showForm === "login" ? (<LoginForm/>) : (<RegisterForm/>)}</>)
}