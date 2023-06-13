import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container my-5">
                <h3 class="text-center my-5">Contact Us</h3>
                <div className="row">
                    <div className="col-md-6 p-5 ">
                        <h3 className='mb-3'>Keep Touch with Us - </h3>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="name" id="name" className='form-control' />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" id="email" className='form-control' />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="number">Phone</label>
                            <input type="text" name="phonr" id="phone" className='form-control' />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="message">Message</label>
                            <input type="text" name="message" id="message" className='form-control' />
                        </div>
                        <button className='btn btn-success w-25'> Send <span className='bi bi-send ms-2'></span></button>

                    </div>
                    <div className="col-md-6 p-5">
                        <h3>Our Office Location</h3>
                        <p><strong>Head Office : </strong> Hyderabad, Telengana </p>
                        <p><strong>Address : </strong> saisampada, kauri hills, Madhapur metro station</p>
                        <p><strong>Telephone : </strong> +91 07755-8789 </p>
                        <p><strong>E-mail : </strong> support@deepijatel.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
