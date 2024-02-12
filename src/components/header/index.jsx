import React, { useEffect, useState } from 'react'
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './index.scss'

function Header() {
    const [isLogin, setIslogin] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const getLogin = sessionStorage.getItem('user');
        if (getLogin) {
            setIslogin(true);
        }
    }, [])

    const handleLogoutClick = () => {
        sessionStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <div className='container-header' >
            {(isLogin) ? (
                <IoIosLogOut onClick={handleLogoutClick} className='icon' />
            ) : (
                <p onClick={() => navigate('/login')} className='login-message' >Giriş Yap</p>
            )
            }
        </div>
    )
}

export default Header