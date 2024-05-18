import React from 'react'
import "./Banner.css"
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="banner-text mt-5 pt-5">
                            <h1>Wood & Cloth Sofa</h1>
                            <p>
                                Incididunt ut labore et dolore magna aliqua quis ipsum
                                suspendisse ultrices gravida. Risus commodo viverra
                            </p>
                            <Link to="#" className='btn-2'>
                                buy now
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 mt-5">
                        <img className='img-fluid' src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner