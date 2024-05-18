import React from 'react'
import './Awesome.css'
import { Link } from 'react-router-dom'

const Awesome = () => {
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
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="product-item">
                            <img className='img-fluid' src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp" alt="" />
                            <div className="product-content">
                                <h4>
                                    Quartz Belt Watch
                                </h4>
                                <h3>
                                    $150.00
                                </h3>
                                <Link to="#">
                                    + add to cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awesome
