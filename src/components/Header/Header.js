import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa"
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkContext';
import { AuthContext } from '../../Context/UserContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Header.css'




const Header = () => {
    const nav = useNavigate();
    const { user, logOut } = useContext(AuthContext)
    const [setDark, dark] = useContext(DarkModeContext);

    const handleDark = () => {
        setDark(!dark);
    }

    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success("User Signed Out SuccessFully")
                nav("/");

            })
    }



    return (
        <div>




        </div>
    );
};

export default Header;