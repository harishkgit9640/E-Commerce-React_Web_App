import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png';
import './navbar.css';
const Navbar = () => {
    const [theme, setTheme] = useState("Light");
    const [name, setName] = useState("false");
    const [category, setCategory] = useState([]);

    const handleSearch = (e) => {
        // console.log(e.target.value);
        // let search = e.target.value;
    }

    const handleTheme = (e) => {
        // alert(e.target.valve);
        // console.log(e);
        (e.target.checked === 'true' ? setTheme("Light") : setTheme("Dark"));
        (e.target.checked === 'true' ? setName("false") : setName("true"));
    }

    const loadCategory = () => {
        axios.get('https://fakestoreapi.com/products/categories').then((response) => {
            setCategory(response.data);
        })
    }

    useEffect(() => {
        loadCategory();
    }, [])
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container" id={theme}>
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="Logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <i><NavLink className="dropdown-item" to="all">All</NavLink></i>
                                    {category.map((category) => {
                                        return (
                                            <i><NavLink className="dropdown-item" to={'category/' + category}>  {category} </NavLink></i>
                                        )
                                    }
                                    )}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex" >
                            <input className="form-control me-5" type="text" name='search' onChange={handleSearch} placeholder="Search" aria-label="Search" />
                            {/* <button className='btn btn-outline-success' onClick={handleSubmit}>Search</button> */}
                        </form>
                        <div className="theme">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" onChange={handleTheme} id="flexSwitchCheckDefault" />
                                <label class="form-check-label" for="flexSwitchCheckDefault"> {name} </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar
