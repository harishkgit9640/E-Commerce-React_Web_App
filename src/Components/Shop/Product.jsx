import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState([]);
    const param = useParams();
    useEffect(() => {
        axios.get(`http://fakestoreapi.com/products/${param.id}`).then((response) => {
            console.log(response.data);
            setProduct(response.data);
        })
    }, [param.id]);

    return (
        <div>
            <div className="container my-5 ">
                <div className="row border-rounded">
                    <div className="col-md-4">
                        <div className="image">
                            <img src={product.image} className='img-thumbnail' alt="product_image" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p className="card-text"> {product.category}  </p>
                        <h6 className="card-title"> {product.title} </h6>
                        <p className="card-title"> {product.description} </p>
                        <div class="">
                            <dt>Price</dt>
                            <dd> &#x20B9; {product.price}</dd>
                            <dt>Rating</dt>
                            {/* <span className="bi bi-star-fill text-warning"></span> {product.rating.rate} {product.rating.count} */}
                        </div>
                        <Link to={'/category/' + product.category} > <button className='btn btn-primary'> Go Back </button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
