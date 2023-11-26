import { useState } from 'react'

export default function Welcome() {
    
    const [showForm, setShowForm] = useState("login")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function changeForm() {
        showForm === "login" ? setShowForm("register") : setShowForm("login")
    }

    const [loginStatus, setLoginStatus] = useState('');
    const [registerStatus, setRegisterStatus] = useState('');

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("http://localhost:9000/users/login/check/")
        .then( res => { return res.text()} )
        .then( data => setLoginStatus(data))
    }

    function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const emailNameR = (document.getElementById('emailNameR') as HTMLInputElement).value;
        const loginNameR = (document.getElementById('loginNameR') as HTMLInputElement).value;
        const passwordNameR = (document.getElementById('passwordNameR') as HTMLInputElement).value;
        //console.log(loginNameR);
        //fetch("http://localhost:9000/users/registration/check/")
        //.then( res => { return res.text()} )
        //.then( data => setRegisterStatus(data))
        fetch("http://localhost:9000/users/registration/check/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              //id: "123"
              email: emailNameR,
              login: loginNameR,
              password: passwordNameR,
           }),
        })
        .then(function (response) { return response.json()})
        .then(result => setRegisterStatus(result.message))
        //.then((result) => {
        //  if(result.message === "Email taken!"){
        //    alert("Email taken!");
        //    //this.goToMain();
        //   } else {
        //       alert("Registered :)");
        //   }
        //});

    }
    
    const LoginForm = () => {
        return (
        <>
        <form className="login-form" onSubmit={handleLogin}>
            <div style={{color: "white", fontSize: 20}}>Login form</div>
            <label htmlFor="loginNameL">Login</label>
            <input id="loginNameL" type="text" required></input>
            <label htmlFor="passwordNameL">Password</label>
            <input id="passwordNameL" type="password" required></input>
            <button type="submit">Log in</button>
            <button onClick={changeForm}>Swap to register</button>
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
            <button onClick={changeForm}>Swap to login</button><br/>
            <label>{registerStatus}</label>
        </form>
        
        </>
        )}
    
    return (<>{showForm === "login" ? (<LoginForm/>) : (<RegisterForm/>)}</>)
}