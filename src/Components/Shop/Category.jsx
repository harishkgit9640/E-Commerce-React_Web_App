import { React, useEffect, useState } from 'react'
import './shop.css';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const Category = () => {
  const [Product, setProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${param.category}`).then((response) => {
      setProduct(response.data);
    })
  }, [param.category]);

  return (
    <>
      <div className="container my-5">
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
                    <div class="d-flex justify-content-between">
                      <dt>Price</dt>
                      <dd> &#x20B9; {item.price}</dd>
                      <dt>Rating</dt>
                      <span className="bi bi-star-fill text-success"></span> {item.rating.rate} [{item.rating.count}]
                    </div>
                    <div class="d-flex justify-content-between">
                      <Link to={'/product/' + item.id} className="btn btn-primary"> <i className='bi bi-eye'></i> View </Link>
                      <Link to={'/product/' + item.id} className="btn btn-warning"> <i className='bi bi-cart'></i> Add to Cart</Link>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}

        </div>
      </div >
    </>
  )
}

export default Category
