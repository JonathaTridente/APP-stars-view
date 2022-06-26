import applogo from './assets/applogo.png'
import './SignIn.css';
import React, { useState } from 'react';


function SignIn() {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")

    const uploadImage = async e => {
        e.preventDefault();
        console.log("Upload Image");
        console.log(image);
    }


    return (

        <div className="container-Main-SignIn">

            <div className="container-SignIn">

                <div className="WrapSign">

                    <form className="SignIn-form">
                        <span>
                            < img src={applogo} className="ApplogoSign" alt="logo" />
                        </span>

                        <span className="SignIn-form-tittle">Suba a bordo, observador!</span>


                        <div className="WrapInputSign">
                            <input
                                className={user !== "" ? 'has-val input' : 'input'}
                                type="user"
                                value={user}
                                onChange={e => setUser(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="User"></span>
                        </div>



                        <div className="WrapInputSign">
                            <input
                                className={email !== "" ? 'has-val input' : 'input'}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="WrapInputSign">
                            <input
                                className={password !== "" ? 'has-val input' : 'input'}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="wrapImage">
                            <form onSubmit={uploadImage}>
                                <label className="txt3">Avatar: </label>
                                <input ClassName="Imagefile"
                                    type="file"
                                    name="image"
                                    onChange={(e => setImage(e.target.files[0]))}
                                /><br /><br />
                                <button className="ImageSave" type="submit">Save</button>
                            </form>
                        </div>


                        <div className="container-SignIn-form-btn">
                            <button className="SignIn-form-btn">Sign In</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;