import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Forms/LoginForm';
import Modal from '../Modal/Modal';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <>
        <div className='navbar has-shadow' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <div className='navbar-item'>
                    <img src="https://bulma.io/images/bulma-logo.png" alt='logo' width="112" height="28"/>
                </div>

                <div onClick={handleClick} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id='navbarBasicExample' className={`navbar-menu ${ isActive ? 'is-active' : null}`}>
                <div className='navbar-start'>
                    <div className='navbar-item' onClick={handleClick}>
                        Home
                    </div>
                    <div className='navbar-item' onClick={handleClick}>
                        Blog
                    </div>
                    <div className='navbar-item' onClick={handleClick}>
                        Contact
                    </div>
                </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <div className='is-grouped'>
                        <Link to='/'>
                            <div className='button is-danger mx-1' onClick={handleClick}>
                                <strong>Sign Up</strong>
                            </div>
                        </Link>
                        <Link to='/login'>
                            <div className='button is-info mx-1' 
                                onClick={ ()=> {
                                    handleClick();
                                    handleModal();
                                }}>
                                <strong>Log in</strong>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Modal content={<LoginForm />} openModal={openModal} />
        </>
    )
}

export default Navbar
