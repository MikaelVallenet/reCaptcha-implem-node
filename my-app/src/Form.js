import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef } from 'react';
import axios from "axios";

const Form = () =>{

    const captchaRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = captchaRef.current.getValue();
        captchaRef.current.reset();

        await axios.post(process.env.REACT_APP_API_URL, {token})
        .then(res => console.log(res))
        .catch((error) => {
            console.log(error);
        })
    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="input"/>
            <ReCAPTCHA theme={"dark"} sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef}/>
            <button>Submit</button>
        </form>
    )
}

export default Form