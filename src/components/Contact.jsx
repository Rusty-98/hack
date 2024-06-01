import React from 'react';
import '../styles/contact.css'; 
import link from '../assets/svg/contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    const notify = () => toast.success('✅️ Feedback Takken!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const message = formData.get('message');

        // Check if any field is empty
        if (!fullName || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // If all fields are filled, proceed with form submission
        // You can handle form submission logic here
        // alert('Feedback Takken!');
        notify();
        form.reset(); // Reset form fields
    };

    return (
        <section>

            <div className="section-header mt-20">
                <div className="container">
                    <h2 className='font-bold'>Contact Us</h2>
                    <p className='text-xl text-justify mb-10'>Kindly Contact us and allow me to develop the software projects through our <Link to={"/"} className='text-blue-600 underline'>website</Link>, social media platforms <Link to={'https://www.linkedin.com/in/vaibhav-shankhwar-4a227a222/'} className='text-blue-600 underline'>LinkedIn</Link>, & by email (shankhwarvaibhav2001@gmail.com) .</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="contact-info">
                        <img src={link} alt="" />
                    </div>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit} id="contact-form">
                            <h2>Send Message</h2>
                            <div className="input-box">
                                <input type="text" required name="fullName" />
                                <span>Full Name</span>
                            </div>
                            <div className="input-box">
                                <input type="email" required name="email" />
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <textarea required name="message" defaultValue={""} />
                                <span>Type your Message...</span>
                            </div>
                            <div className="input-box">
                                <input type="submit" defaultValue="Send" />
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
}

export default Contact;
