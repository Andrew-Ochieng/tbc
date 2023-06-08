import { FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
     
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rtpxewb', 'template_gujwh2i', form.current, '7hBX7r1q43CF1rnMO')
        .then((result) => {
            console.log(result.text);
            console.log('Message sent successfully!')
        }, (error) => {
            console.log(error.text);
            console.log('There was an error, please try again!')
        });
        
        e.target.reset()
        alert('Email sent successfully')
    };

    return ( 
        <>
            <div>
                <form ref={form} onSubmit={sendEmail} >
                    <div className="label">
                        <input className="input" type="text" name="name" placeholder="Enter name..." required />
                    </div>
                    <div className="label">
                        <input className="input" type="email" name="email" placeholder="Enter email..." required />
                    </div>
                    <div className="label">
                        <input className="input" type="text" name="subject" placeholder="Enter subject..." required />
                    </div>
                    <div className="label">
                        <textarea className="py-2 px-3 rounded-lg w-full outline-none" name="message" placeholder="Enter Message..." cols="30" rows="4"></textarea>
                    </div>
                    <button className="mt-4 btn rounded-lg flex items-center">
                        Submit
                        <span className="ml-2">
                            <FaPaperPlane />
                        </span>
                    </button>
                </form>
            </div>
        
        </>
     );
}
 
export default ContactForm;