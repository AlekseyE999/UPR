import React from "react";
import '../styles/actions.css';

const Auth = (props) => {
    return (
        <form name="signUp" className="form_authorization">
            <div style="" className="div_authorization">
                <div class="text-center">
                    <h2>Sign up</h2>
                </div>
                <label class="mdc-text-field mdc-text-field--filled" style="margin-top:50px;">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="my-label-id" style="bottom:-20px;">Login</span>
                    <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id" id="paperInputs1" name="login"></input>
                </label>
                <label class="mdc-text-field mdc-text-field--filled" style="margin-top:20px;">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="my-label-id" style="bottom:-20px;">Password</span>
                    <input class="mdc-text-field__input" type="password" aria-labelledby="my-label-id" id="paperInputs2" name="password"></input>
                </label>
                <div>
                    <button class="mdc-button mdc-button--touch" style="margin-top:20px;">
                        <span class="mdc-button__ripple"></span>
                        <span class="mdc-button__touch"></span>
                        <span class="mdc-button__label">Sign Up</span>
                    </button >
                    <a class="mdc-button mdc-button--touch" style="margin-top:20px;" id="sin">
                        <span class="mdc-button__ripple"></span>
                        <span class="mdc-button__touch"></span>
                        <span class="mdc-button__label">Sign In</span>
                    </a>
                </div >
            </div >
        </form >
    );
}

export default Auth;