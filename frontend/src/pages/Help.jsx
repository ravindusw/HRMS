
import { useState } from 'react';
import React from 'react';
import './Help.css'


const AfterSubmit = () => {
    alert("Thank you for contacting us! We will get back to you soon."); 
}

const Help = () => {
    const [Employee_FAQs, setEmployee_FAQs] = useState([
      {question: "Why can't I log in?", answer: "Please ensure that your user id and password are entered correctly. If you forgot the password, please select the option of forgot password on the Digital HRMS login page."},
      {question: "What to do if I have forgotten my password?", answer: "Instructions for resetting your password are available in the help section."},
      {question: "Why can't I change my name or date of birth?", answer: "Name or date of birth can only be changed by submitting proper documents to the HR team."},
      {question: "What do I do if I think my attendance record is incorrect?", answer: "If your attendance record is incorrect, contact the HR or attendance management team."},
      
  ]);


    return (
        <div className="support-container">
            <h1>Help and Support</h1>
            
            <div className="form-container">
              <h2>Contact Support</h2>
                <form className="support-form" onSubmit={AfterSubmit}>
                    
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name" required />
                    
                    <label>Email</label>
                    <input type="email" placeholder="Enter Your Email 📧" required />

                    <label>Subject</label>
                    <input type="text" placeholder="Subject" required />

                    <label>Description</label>
                    <textarea placeholder="Enter your problem" required></textarea>

                    <button type="submit">Submit</button>
                </form>
                <p>Thank you for contacting us! We will get back to you soon.</p>
            </div>

            <div className="faq-section">
                <h3>FAQs</h3>
                {Employee_FAQs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <details>
                            <summary>{faq.question}</summary>
                            <p>{faq.answer}</p>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Help;
