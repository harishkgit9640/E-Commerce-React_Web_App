import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='text-center'>
            <p> &copy; copyright {year} |  Made With 🌎 HK SOLUTION</p>
        </div>
    )
}

export default Footer
