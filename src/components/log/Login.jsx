import React, { useState } from "react";
import "./login.css";


function Login() {
    const [email, setemail] = useState('');
    const [auth, setauth] = useState('Sing In');
    const [changepass1,setpass]=useState('no');

    // const emailclick = (event) => {
    //     console.log(event.target.value);
    //     setemail(event.target.value);
    // }

    const changeauth = () => {

        setauth(auth === 'Sing In' ? 'Sing Up' : 'Sing In');
    }

    const changepass=()=>{
        setpass('yes');
        console.log("forget ")
    }

    const submitotp=()=>{
        setauth('Sing Up');
        setpass('no');
        console.log("all things happlen");
    }

    

    if (auth === 'Sing In') {
        return (
            <>
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign Up</h3>
                            <div className="text-center">
                                Already Sing Up{" "}
                                <button className="change" onClick={changeauth}>
                                    Sign IN
                                </button>
                            </div>

                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input required
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    // onChange={emailclick}

                                />
                            </div>

                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input required
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            {/* <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a>
                            </p> */}
                        </div>
                    </form>
                </div>
            </>
        );
    }
    if (changepass1 === 'yes') {
        return (

            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Recover passward</h3>

                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input required
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter Email"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <button type="submit" className="btn btn-primary" onClick={submitotp}>OTP</button>
                        </div>
                    </div>
                </form>
            </div>


        );
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="change" onClick={changeauth}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input required 
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter username"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input required
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                // onChange={emailclick}

                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input required
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#" onClick={changepass}>password?</a>
                        </p>
                    </div>
                </form>
            </div>


        </>
    );
}

export default Login;