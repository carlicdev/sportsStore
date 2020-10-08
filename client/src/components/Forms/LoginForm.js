import React from 'react'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUser } from 'react-icons/fa'

const LoginForm = () => {
    return (
        <div className='box is-max-desktop px-6'>
            <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                    <input className='input' type='text' />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Username</label>
                <div className='control has-icons-left has-icons-right'>
                    <input className='input is-success' type='text'/>
                    <span className='icon is-small is-left'>
                        <FaUser className='mt-2 ml-2' size='25'/>
                    </span>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Email</label>
                <div className='control has-icons-left has-icons-right'>
                    <input className='input is-danger' type='email'/>
                    <span className='icon is-small is-left'>
                        <FaEnvelope className='mt-2 ml-2' size='25'/>
                    </span>
                </div>
            </div>

            <div className='field'>
                <div className='control'>
                    <label className='checkbox'>
                        <input type='checkbox'/>
                            <span> I agree to the <Link to='/' className='text-is-info'>terms and conditions</Link></span>
                    </label>
                </div>
            </div>

            <div className='field'>
                <div className='control'>
                    <button className='button is-info'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
