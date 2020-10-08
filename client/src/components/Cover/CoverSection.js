import React from 'react';
import img1 from '../../images/frenchie.jpg';

const CoverSection = () => {
    return (
        <div>
            <section className='section'>
                <div className='container'>
                    <div className='columns is-vcentered'>
                        <div className='column'>
                            <p className='is-black'>Here I really don´t have a clue what to include. The only thing I´m sure is that I want to include some buttons.</p>
                            <div className='field'>
                                <div className='buttons'>
                                    <div className='button is-danger'>
                                        Add to Cart
                                    </div>
                                    <div className='button is-info'>
                                        More Info
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <figure className='image is-16by9'>
                                <img src={img1} alt='dog'/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoverSection
