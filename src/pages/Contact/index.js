import React from 'react';
import { useState } from 'react';
import FooterComponent from '../Footer';
import NavbarComponent from '../Nav';
import {
    MDBInput, MDBTextArea,
} from 'mdb-react-ui-kit';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    // set the form if user change values it will change the state
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    // use Formspree API here
    const [state, handleForm] = useForm(process.env.REACT_APP_FORM);

    // if the form is submitted successfully it will show the thank you page
    if (state.succeeded) {
        return (
            <div className="container">
            <NavbarComponent />
            <div className="d-flex flex-column" style={{ minHeight: '69vh' }}>
                <div className='flex-fill'>
                    <h1 className="text-center mt-5" style={{color:'white'}}>Thank you for contacting us!</h1>
                    <div className='text-center py-3'>
                    <a class="btn btn-light col-3" href="/prediction" role="button">Go Back</a>
                    </div>
                    
                </div>
            </div>
            <FooterComponent />
        </div>
        )
    }
    return (
        <div className="container">
            <NavbarComponent />
            <div className="d-flex flex-column" style={{ minHeight: '69vh' }}>
                <div className='flex-fill'>
                    <div class="card mb-3 mx-auto mt-3 " style={{ width: '50vh', backgroundColor: '#e4f1fe' }}>

                        <img class="card-img-top img-fluid img-thumbnail rounded-start" src="img/mark.jpg" alt="mark" />

                    </div>

                    <form id='form' className='text-start mx-auto mt-5'
                        style={{ width: '100%', maxWidth: "50vh", color: 'white' }} contrast 
                        onSubmit={handleForm}>
                        <h2 className='text-center'>Contact us</h2>
                        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' size='lg' className='form-control'
                            value={formValue.name} name='name' onChange={onChange} id="name" type="name" required/>
                        <ValidationError prefix="Name" field="name" errors={state.errors} />

                        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' size='lg' className='form-control'
                            value={formValue.email} name='email' onChange={onChange} id="email" required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' size='lg' className='form-control'
                            value={formValue.subject} name='subject' onChange={onChange} id="subject" required/>
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />

                        <MDBTextArea wrapperClass='mb-4' label='Message' v-model='msg' rows={4} size='lg' className='form-control'
                            value={formValue.message} name='message' onChange={onChange} id="message" required/>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <div className='text-center'>
                            <button className='px-5 btn btn-outline-light btn-lg ' type='submit' id='submit' disabled={state.submitting}>
                                Send
                            </button>
                        </div>
                    </form>

                </div>

            </div>
            
            <FooterComponent />
        </div>

    );
}

export default Contact;