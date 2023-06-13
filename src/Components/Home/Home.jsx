import React from 'react'
import './home.css';
import bg_img1 from '../../images/bg_ (1).jpg';
import bg_img2 from '../../images/bg_ (2).jpg';
import bg_img3 from '../../images/bg_ (3).jpg';
import NewsLetter from '../Newsletter/NewsLetter';

const Home = () => {
    return (
        <div>
            <div className="container my-5">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bg_img2} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item">
                            <img src={bg_img1} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item">
                            <img src={bg_img3} className="d-block w-100" alt="images" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* product section */}
            <section>
                <div className="container mb-5">
                    <h3 className='text-primary text-capitalize text-center my-5'> About Us </h3>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={bg_img3} className='img-fluid' alt="aboutImage" />
                        </div>
                        <div className="col-md-6">
                            <h3>Know About us - </h3>
                            <p className='content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus architecto assumenda, asperiores iure aut recusandae quas obcaecati, quibusdam id earum minima molestiae, cupiditate sequi perspiciatis sunt tempore consequuntur ut nostrum
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae incidunt magnam fugit, voluptatibus dolorum temporibus suscipit quos eligendi praesentium, neque soluta. Ipsam quis fugit expedita vero dolorum eveniet beatae officia nulla excepturi? Qui nobis adipisci, quo culpa exercitationem ad ipsa ipsum nam, error voluptatem reprehenderit odit. Quos in accusamus, dolorum illum iusto sunt maiores, doloribus possimus reprehenderit quidem est tempora porro officiis blanditiis voluptatem velit, consectetur mollitia et totam. Ab, fugiat! Rem sint saepe, illum cupiditate repellendus tenetur in corrupti doloremque quisquam impedit et expedita sed amet vel praesentium recusandae voluptatum laborum ab reprehenderit nobis nemo ut magnam perspiciatis commodi!</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <h3 className='text-primary text-capitalize text-center my-5'> Our Newsletter </h3>
                <NewsLetter />
            </div>
        </div>
    )
}

export default Home
