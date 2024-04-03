import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext'
import { chvright, emailic, lock, user } from '../utils/Icons';
import loginimg from '../img/loginimg.png'

 const Login = () => {
    const {login,setLogin,setError,addUser,getUser,error,userid}=useGlobalContext()
    const loginInitialValues = {
        loginusername: '',
        loginpassword: ''
    };
    
    const signupInitialValues = {
        email: '',
        username: '',
        password: '',
    };
    
    const accountInitialValues = {
        login: {
            view: 'login',
            heading: 'Login',
            subHeading: ''
        },
        signup: {
            view: 'signup',
            heading: "Looks like you're new here",
            subHeading: 'Signup to get started'
        }
    }
    const [ islogin, setIsLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    useEffect(() => {
        getUser({loginusername,loginpassword})
      }, [login])
    const handleInput = name => e => {
        setSignup({...signup, [name]: e.target.value})
        setIsLogin({...islogin, [name]: e.target.value})
        setError('')
    }
const {email,username,password}=signup
const {loginusername,loginpassword}=islogin
    const handleSubmit = e => {
        e.preventDefault()
        addUser(signup)
        setSignup({
            email: '',
            username: '',
            password: '',
        })
    }

    const handlelogin=e=>{
        e.preventDefault()
        getUser({loginusername,loginpassword})
        setIsLogin({
        loginusername: '',
        loginpassword: ''
        })
        
        if(userid.length>0){
            setLogin(true)
            console.log(userid);
        }
        
    }

    
    const toggleLogin=()=>{
        toggleAccount(accountInitialValues.signup)
    }
    const toggleRegister=()=>{
        toggleAccount(accountInitialValues.login)
    }
    
    
  return (
    <Complete> 
       
     {account.view==='login'?
     <FormStyled>
       
        
        <div className="screen">
            <div className="screen__content">
            <h1>Log In</h1>
            <img src={loginimg}/>
     <form onSubmit={handlelogin} className="login">
        <div className='login__field'>
            {user}
        <input type="text"
        value={loginusername}
        name={'loginusername'}
        placeholder="Username"
        onChange={handleInput('loginusername')}
        className="login__input"
        required
        />
        </div>
        {error&&<p className='err'>{error}</p>}
        <div className='login__field'>
            {lock}
         <input type="Password"
        value={loginpassword}
        name={'loginpassword'}
        placeholder="Password"
        onChange={handleInput('loginpassword')}
        className="login__input"
        required
        />
        </div>
<button type="submit" className='button login__submit'>
<span className="button__text">Log In Now</span>
{chvright}
</button>
<button onClick={()=>toggleLogin()} className='button login__submit'><span className="button__text">New to TrackEx?Register</span>
{chvright}
</button>
     </form>
     {/* <div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>	 */}
     
     </div>
     </div>
     </FormStyled>
     :
     <FormStyled>
        <div className="screen">
        <div className="screen__content">
     <h1>Register</h1>
     <img src={loginimg}/>
     <form onSubmit={handleSubmit} className="login">
     <div className='login__field'>
{emailic}
     <input 
                    type="email" 
                    value={email}
                    name={'email'} 
                    placeholder="Enter your mail"
                    onChange={handleInput('email')}
                    className="login__input"
                    required
                />
                <br/>
                </div>
                <div className='login__field'>
                    {user}
                 <input 
                    type="text" 
                    value={username}
                    name={'username'} 
                    placeholder="Enter username"
                    onChange={handleInput('username')}
                    className="login__input"
                    required
                />
                <br/>
                </div>
                <div className='login__field'>
                    {lock}
                 <input 
                    type="password" 
                    value={password}
                    name={'password'} 
                    placeholder="Enter password"
                    onChange={handleInput('password')}
                    className="login__input"
                    required
                />
                </div>
                <button type="submit" className='button login__submit'>
<span className="button__text">Register</span>
{chvright}
</button>
<button onClick={()=>toggleRegister()} className="button login__submit"><span className="button__text">Already a member? Log In</span>
{chvright}</button>
     </form>
     
     </div>
     </div>
     </FormStyled>
     }
    </Complete>
    
  )
}
const Complete=styled.div`

`
const FormStyled=styled.div`
display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
    
    img{
        margin-left:2.5rem;
    }
    h1{
        color:white;
        text-align:center;
       
    }

    .screen {		
        background: linear-gradient(90deg, #5D54A4, #7C78B8);		
        position: relative;	
        height: 600px;
        width: 360px;	
        box-shadow: 0px 0px 24px #5C5696;
    }
    
    .screen__content {
        z-index: 1;
        position: relative;	
        height: 100%;
    }
    
    .screen__background {		
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        -webkit-clip-path: inset(0 0 0 0);
        clip-path: inset(0 0 0 0);	
    }
    
    .screen__background__shape {
        transform: rotate(45deg);
        position: absolute;
    }
    
    .screen__background__shape1 {
        height: 520px;
        width: 520px;
        background: #FFF;	
        top: -50px;
        right: 120px;	
        border-radius: 0 72px 0 0;
    }
    
    .screen__background__shape2 {
        height: 220px;
        width: 220px;
        background: #6C63AC;	
        top: -172px;
        right: 0;	
        border-radius: 32px;
    }
    
    .screen__background__shape3 {
        height: 540px;
        width: 190px;
        background: linear-gradient(270deg, #5D54A4, #6A679E);
        top: -24px;
        right: 0;	
        border-radius: 32px;
    }
    
    .screen__background__shape4 {
        height: 400px;
        width: 200px;
        background: #7E7BB9;	
        top: 420px;
        right: 50px;	
        border-radius: 60px;
    }
    
    .login {
        width: 320px;
        padding: 30px;
        
    }
    
    .login__field {
        padding: 20px 0px;	
        position: relative;	
    }
    
    .login__icon {
        position: absolute;
        top: 30px;
        color: #7875B5;
    }
    
    .login__input {
        border: none;
        border-bottom: 2px solid #D1D1D4;
        background: none;
        padding: 10px;
        padding-left: 24px;
        font-weight: 700;
        width: 75%;
        transition: .2s;
        ::placeholder{
            color:white;
            opacity:0.5;
        }
    }
    
    .login__input:active,
    .login__input:focus,
    .login__input:hover {
        outline: none;
        border-bottom-color: #6A679E;
        color:white;
    }
    
    .login__submit {
        background: #fff;
        font-size: 14px;
        margin-top: 30px;
        padding: 16px 20px;
        border-radius: 26px;
        border: 1px solid #D4D3E8;
        text-transform: uppercase;
        font-weight: 700;
        display: flex;
        align-items: center;
        width: 100%;
        color: #4C489D;
        box-shadow: 0px 2px 2px #5C5696;
        cursor: pointer;
        transition: .2s;
    }
    
    .login__submit:active,
    .login__submit:focus,
    .login__submit:hover {
        border-color: #6A679E;
        outline: none;
    }
    
    .button__icon {
        font-size: 24px;
        margin-left: auto;
        color: #7875B5;
    }
    
    .social-login {	
        position: absolute;
        height: 140px;
        width: 160px;
        text-align: center;
        bottom: 0px;
        right: 0px;
        color: #fff;
    }
    
    .social-icons {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .social-login__icon {
        padding: 20px 10px;
        color: #fff;
        text-decoration: none;	
        text-shadow: 0px 0px 8px #7875B5;
    }
    
    .social-login__icon:hover {
        transform: scale(1.5);	
    }
    .err{
        font-size:1rem;
        color:red;
        opacity:0.8;
        
    }

`

export default Login

/**
 * <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email">
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password">
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
 * 
 */