import React, { useState, useEffect } from 'react'

const Modal = ({content, openModal}) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (openModal) {
            setIsOpen(true);
        }
    }, [openModal])

    return (
        <div className={`modal ${isOpen ? 'is-active' : null }`}> 
            <div className='modal-background' onClick={() => setIsOpen(!isOpen)}>
                <div className='modal-content'>
                    {content}
                </div>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className='modal-close is-large' aria-label='close'></button>
        </div>
    )
}

export default Modal
