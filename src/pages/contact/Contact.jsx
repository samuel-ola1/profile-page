import { useState } from 'react';
import Footer from "/src/components/Footer";
import "./contact.css";


const Contact = () => {
    const [inputs, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        agree: false
    });

    function handleChange(event) {
       const {name, value, type, checked} = event.target;

        setInput((prev) => (
            {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault();
    }


    return (
        <main className='contact'>

            <div className='contact__container'>
                <div className="contact_header">
                    <h1>Contact me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind</p>
                </div>


                <form onSubmit={handleSubmit}>

                    <div className='name'>

                        <div className='input_field'>
                            <label htmlFor='first_name'>First name</label>
                            <input 
                                type="text"
                                id='first_name'
                                name="firstname"
                                placeholder="Enter your first name"
                                required
                                value={inputs.firstname}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='input_field'>
                            <label htmlFor='last_name'>Last name</label>

                            <input 
                                type="text"
                                id='last_name'
                                name="lastname"
                                placeholder="Enter your last name"
                                required
                                value={inputs.lastname || ""}
                                onChange={handleChange}
                            />
                        </div>   
                    </div>
                   
                    <div className='input_field'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="email"
                            id='email'
                            name="email"
                            placeholder="yourname@email.com"
                            required
                            value={inputs.email}
                            onChange={handleChange}
                        />
                    </div>
                    
                    

                    <div className="input_field">
                        <label htmlFor='message'>Message</label>
                        <textarea
                            name="message"
                            id='message'
                            required
                            placeholder="Send me a message and I'll reply you as soon as possible"
                            value={inputs.message}
                            onChange={handleChange}
                        />
                    </div>
                    
                    
                    <div className='checkbox_field'>
                        <input 
                            type="checkbox" 
                            id='checkbox' 
                            checked={inputs.agree}
                            onChange={handleChange}
                            name="agree"
                        />
                            You agree to providing your data to Samuel who may contact you
                    </div>  
                    <button type='submit' id='btn__submit'>Send message</button>
                </form>
            </div>

            <Footer />
        </main>
    );
}
 
export default Contact;