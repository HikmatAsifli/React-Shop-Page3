import React, { useContext } from 'react'
import './Awesome.css'
import { Link } from 'react-router-dom'
import MainContext from '../../../context/context'

const Awesome = () => {
    const { data, addToBasket } = useContext(MainContext)
    return (
        <section className='awesome'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Awesome</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    {
                        data.map((item) => (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <img src={item.image} className='card-img-top' alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.price}</p>
                                        <Link className='btn btn-success' onClick={() => addToBasket(item._id)}>Add to Basket</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Awesome
