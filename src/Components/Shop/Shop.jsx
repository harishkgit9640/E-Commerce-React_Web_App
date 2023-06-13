import { React, useEffect, useState } from 'react'
import './shop.css';
import axios from 'axios'
import { Link } from 'react-router-dom'


const Shop = () => {
    const [Product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);


    const loadProduct = () => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setProduct(response.data);
        });
    }

    const loadCategory = () => {
        axios.get('https://fakestoreapi.com/products/categories').then((response) => {
            setCategory(response.data);
        })
    }

    useEffect(() => {
        loadProduct();
        loadCategory();
    }, []);

    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-2">
                        <div className="check_func mt-5">
                            {category.map((category) => {
                                return (
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value={category} id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            {category}
                                        </label>
                                    </div>
                                )
                            }
                            )}
                        </div>
                        <hr className='w-75' />
                        <div className="radio_func mt-3">
                            {category.map((category) => {
                                return (
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value={category} id={category} />
                                        <label class="form-check-label" for={category}>
                                            {category}
                                        </label>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row g-3">
                            {Product.map((item) => {
                                return (
                                    <div className="col-lg-3" key={item.id}>
                                        <div className="card py-2" >
                                            <div className="image">
                                                <img src={item.image} className="card-img-top" alt="product_img" />
                                            </div>
                                            <div className="card-body">
                                                <h6 className="card-title"> {item.title.substr(0, 20)} </h6>
                                                <p className="card-text"> {item.category}  </p>
                                                <p><strong>Price :</strong> &#x20B9; {item.price}</p>
                                                <p><strong>Rating : </strong> <span className="bi bi-star-fill text-success"></span>  {item.rating.rate}  [{item.rating.count}] </p>
                                                <div class="d-flex justify-content-between">
                                                    <Link to={'/product/' + item.id} className="btn btn-primary"> <i className='bi bi-eye'></i> View </Link>
                                                    <Link to={'/product/' + item.id} className="btn btn-warning"> <i className='bi bi-cart'></i> Add </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Shop
