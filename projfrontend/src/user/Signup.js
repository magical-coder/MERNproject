import React, {useState} from "react"
import { Link } from "react-router-dom"
import Base from "../core/Base"


const Signup = () =>{

    const signUpFrom = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" type="password"/>
                        </div>
                        <br/>
                        <button className="btn btn-success w-100">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Sign up page" description="A page for user to sign up!">
            {signUpFrom()}
        </Base>
    )
}

export default Signup;