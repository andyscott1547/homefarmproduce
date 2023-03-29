import React from "react";
import axios from 'axios';
import { Box } from "./ContactFormStyles";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    const response = axios.post('https://jxjukrugwf.execute-api.eu-west-1.amazonaws.com/dev/contact', {
      name: name.value,
      email: email.value,
      message: message.value,
    });
    console.log(response.data);
    setFormStatus('Submitted')
    console.log(conFom)
    name.value = ''
    email.value = ''
    message.value = ''
  }
  return (
    <Box>
    <div className="container mt-5">
      <h2 className="mb-3" >Contact US</h2>
      <form 
        onSubmit={onSubmit}

        >
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </Box>
  )
}
export default ContactForm