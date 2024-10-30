import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LoginHelp.css";
import axiosInstance from "../utils/AxiosInstance";

const LoginHelp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
    type: "login",
    reply_status: false,
  });

  const [FAQs] = useState([
    {
      question: "Can't sign in to your Jupiter Account?",
      answer:
        "Make sure you're using the correct email address and password. If you've forgotten your password, please use the 'Forgot Password' link on the login page.",
    },
    {
      question: "Why is my account locked?",
      answer:
        "Your account may be locked due to multiple unsuccessful login attempts. Please wait for a few minutes before trying again or contact support.",
    },
    {
      question: "What should I do if I see an error message?",
      answer:
        "Error messages can provide insight into what's wrong. Check for typos in your credentials or ensure your internet connection is stable.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password?' link on the login page and follow the instructions sent to your email.",
    },
    {
      question: "Why am I not receiving the password reset email?",
      answer:
        "Check your spam or junk folder to ensure the email isn't there. If you still don't see it, verify that you entered the correct email address associated with your account.",
    },
    {
      question: "What if my account is disabled?",
      answer:
        "Accounts may be disabled due to policy violations. Please contact support for assistance in reactivating your account.",
    },
    {
      question: "Why is the login page not loading?",
      answer:
        "This could be due to connectivity issues or server maintenance. Try refreshing the page or accessing it from a different browser.",
    },
    {
      question: "How do I update my login credentials?",
      answer:
        "You can update your email or password in your account settings once you're logged in. If you can't log in, use the password reset option.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    try {
      axiosInstance.post("/help", message);
    } catch (error) {
      console.error("Error in sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
    setMessage({
      name: "",
      email: "",
      subject: "",
      description: "",
      type: "login",
      reply_status: false,
    });
  };

  return (
    <Container className="login-help-container mt-5">
      <h1 className="login-help-title text-center mb-5">Login Help</h1>

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
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="contact-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="contact-input"
                  value={message.name}
                  onChange={(e) =>
                    setMessage({ ...message, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="contact-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="contact-input"
                  value={message.email}
                  onChange={(e) =>
                    setMessage({ ...message, email: e.target.value })
                  }
                />
              </Form.Group>

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
      <div className="text-center mt-4">
        <Button variant="dark" onClick={() => navigate("/")}>
          Back to Login page
        </Button>
      </div>
    </Container>
  );
};

export default LoginHelp;
