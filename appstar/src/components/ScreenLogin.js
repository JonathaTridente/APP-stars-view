import applogo from './assets/applogo.png'
import { useState } from 'react';

function ScreenLogin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (

        <div className="container">
            
            <div className="container-login">
                
                <div className="wrap-login">
                <span>
                            < img src={applogo} className="App-logo" alt="logo" />
                        </span>
                    <form className="login-form">
                      
                        <span className="Login-form-tittle">Bem Vindo!</span>


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

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">Náo possui conta? </span>

                            <a className="txt2" href="#">Criar Conta.</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default ScreenLogin;