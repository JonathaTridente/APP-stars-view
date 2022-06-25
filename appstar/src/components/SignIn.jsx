import applogo from './assets/applogo.png'
import './SignIn.css';
import { useState } from 'react';


function SignIn() {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (

        <div className="container-Main-SignIn">
            
            <div className="container-SignIn">
                
                <div className="wrap-SignIn">
                <span>
                            < img src={applogo} className="App-logo" alt="logo" />
                        </span>
                    <form className="SignIn-form">
                      
                        <span className="SignIn-form-tittle">Suba a bordo observador!</span>

                        
                        <div className="wrap-input">
                            <input
                                className={user !== "" ? 'has-val input' : 'input'}
                                type="user"
                                value={user}
                                onChange={e => setUser(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="user"></span>
                        </div>



                        <div className="wrap-input">
                            <input
                                className={email !== "" ? 'has-val input' : 'input'}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? 'has-val input' : 'input'}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-SignIn-form-btn">
                            <button className="SignIn-form-btn">SignIn</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;