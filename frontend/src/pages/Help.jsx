import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import axiosInstance from "../utils/AxiosInstance";
import "./Help.css";

const Help = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
    type: "login",
    reply_status: false,
  });

  const [EmployeeFAQs] = useState([
    {
      question: "Why can't I log in?",
      answer:
        "Please ensure that your user id and password are entered correctly. If you forgot the password, please select the option of forgot password on the Digital HRMS login page.",
    },
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
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axiosInstance.post("/help", message);
      alert("Thank you for contacting us! We will get back to you soon.");
    } catch (error) {
      console.error("Error in sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
    setMessage({
      name: "",
      email: "",
      subject: "",
      description: "",
      type: "In Site",
      reply_status: false,
    });
  };

  return (
    <Container className="support-container mt-5">
      <h1 className="text-center mb-5">Help & Support</h1>

      <Row>
        {/* FAQ Section */}

        <Col md={6}>
          <div className="faq">
            <h3 className="mb-4">Frequently Asked Questions (FAQ)</h3>
            <Accordion>
              {EmployeeFAQs.map((faq, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>

        {/* Contact Form */}

        <Col md={6}>
          <div className="contact_us">
            <h2 className="mb-4">Contact Support</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={message.name}
                  onChange={(e) =>
                    setMessage({ ...message, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={message.email}
                  onChange={(e) =>
                    setMessage({ ...message, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  required
                  value={message.subject}
                  onChange={(e) =>
                    setMessage({ ...message, subject: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe your issue"
                  required
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
