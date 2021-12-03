import React from 'react'
import Menu from './Menu'

export default function Base({
    title="My Title",
    description="My description",
    classname=" text-white p-4",
    children
}) {
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="jumbotron  text-white text-center">
                    <h2 className="dispaly-3">{title}</h2>
                    <p className="lead">{description}</p>    
                </div>
               <div className={classname}>{children}</div> 
            </div> 
            <footer className="footer  mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4>If you have any questions, feel free to reach out</h4>
                    <button className="btn btn-warning btn-lg">Contact Us</button>
                </div>
                <div className="container">
                    <span className="text-muted">
                        An Amazing <span className="text-white">MERN</span> BootCamp
                    </span>
                </div>
            </footer>
        </div>
    )
}
