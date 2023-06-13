import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <div className="newsletter py-5">
                <div className="box w-75 d-flex justify-content-around mx-auto">
                    <input type="text" name="email" id="email" className='form-control' placeholder='Enter Your E-mail' />
                    <button className='btn btn-primary w-25 ms-2'> E-mail <i className='bi bi-send'></i></button>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
