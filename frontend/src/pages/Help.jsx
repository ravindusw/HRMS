import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import axiosInstance from "../utils/AxiosInstance";
import "./Help.css";

const Help = () => {
  
  const [message, setMessage] = useState({
    user_id: "",
    subject: "",
    description: "",
    type: "login",
    reply_status: false,
  });

  const [FAQs] = useState([
    {
      question: "What to do if I have forgotten my password?",
      answer:
        "Instructions for resetting your password are available in the help section.",
    },
    {
      question: "Why can't I change my name or date of birth?",
      answer:
        "Name or date of birth can only be changed by submitting proper documents to the HR team.",
    },
    {
      question: "What do I do if I think my attendance record is incorrect?",
      answer:
        "If your attendance record is incorrect, contact the HR or attendance management team.",
    }
  ]);

  const handleSubmit = (e) => {
    setMessage({
      user_id: "",
      subject: "",
      description: ""
      
    });

    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    try {
      axiosInstance.post("/help", message);
    } catch (error) {
      console.error("Error in sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
    
  };

  return (
    <Container className="login-help-container mt-5">
      <h1 className="login-help-title text-center mb-5">Help & Support</h1>

      <Row>
        {/* FAQ Section */}
        <Col md={6}>
          <div className="faq-wrapper">
            <h3 className="faq-header mb-4">Frequently Asked Questions</h3>
            <Accordion className="faq-accordion">
              {FAQs.map((faq, index) => (
                <Accordion.Item
                  eventKey={index}
                  key={index}
                  className="faq-item"
                >
                  <Accordion.Header className="faq-question">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <div className="contact-wrapper">
            <h2 className="contact-header mb-4">Contact Support</h2>
            <Form onSubmit={handleSubmit} className="contact-form">
              
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label className="contact-label">Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  required
                  className="contact-input"
                  value={message.subject}
                  onChange={(e) =>
                    setMessage({ ...message, subject: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formDescription">
                <Form.Label className="contact-label">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe your issue"
                  required
                  className="contact-input"
                  value={message.description}
                  onChange={(e) =>
                    setMessage({ ...message, description: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="contact-submit-button w-100"
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Help;


