import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import Income from '../Income/Income'

function Navigation({active, setActive}) {
    const {setLogin} = useGlobalContext()
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Welcome Back!</h2>
                    
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
            {signout}<button onClick={()=>setLogin(false)}>Sign Out</button>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    
    border: 3px solid #27285b;
    background-color:#27285b;
   
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: #95a0b4;
        }
        p{
            color: #95a0b4;
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: #95a0b4;
            padding-left: 1rem;
            position: relative;
            i{
                color: #95a0b4;
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
.bottom-nav{
            button{
            border-radius:1rem;
            background-color:#b88f62;
            padding:0.2rem;  
            align-items: center;
            margin: .6rem 0;
            font-size:1.4rem;
            font-weight:600;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: #fff;
            position: relative;
            }
            i{
                color: #b88f62;
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
}
    .active{
        color: #e7be93 !important;
        i{
            color: #e7be93 !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #e7be93;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation