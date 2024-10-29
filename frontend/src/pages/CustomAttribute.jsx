import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import { Button, Form, ListGroup, Alert } from "react-bootstrap"; // Import React Bootstrap components
import "./CustomAttribute.css";

const CustomAttribute = () => {
  const [currentAttributes, setCurrentAttributes] = useState([]);
  const [attributeKey, setAttributeKey] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isAdding, setIsAdding] = useState(false); // Track button state

  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await axiosInstance.get("/auth/customAttributes");
        setCurrentAttributes(response.data);
      } catch (error) {
        console.error("Error fetching custom attributes:", error);
      }
    };

    fetchAttributes();
  }, []);

  const handleAddAttribute = async (e) => {
    e.preventDefault();
    if (currentAttributes.length >= 3) {
      setError("Only three custom attributes can be added.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setIsAdding(true); // Set adding state to true

    try {
      const response = await axiosInstance.post(
        "/auth/customAttributes/addAttribute",
        {
          attributeKey,
          defaultValue,
        }
      );

      setCurrentAttributes((prevAttributes) => [
        ...prevAttributes,
        response.data[0],
      ]);

      setAttributeKey("");
      setDefaultValue("");
      setError("");
      setSuccessMessage("Custom attribute added successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        setIsAdding(false); // Reset adding state after showing message
      }, 3000);
    } catch (error) {
      console.error("Error adding custom attribute:", error);
      setError("Failed to add custom attribute. Please try again.");
      setIsAdding(false); // Reset adding state on error
    }
  };

  const handleRemoveAttribute = async (attributeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this attribute?"
    );
    if (!confirmDelete) return;
    try {
      const response = await axiosInstance.delete(
        `/auth/customAttributes/removeAttribute/${attributeId}`
      );

      setCurrentAttributes((prevAttributes) =>
        prevAttributes.filter((attr) => attr.attribute_id !== attributeId)
      );

      setSuccessMessage(response.data.message);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error removing custom attribute:", error);
      setError("Failed to remove custom attribute. Please try again.");
    }
  };

  return (
    <div className="custom-attr-container">
      <div className="custom-attr-list">
        <h2>Available Custom Attributes</h2>
        {currentAttributes.length > 0 ? (
          <ListGroup>
            {currentAttributes.map((attr) => (
              <ListGroup.Item key={attr.attribute_id}>
                {attr.attribute_name}
                <Button
                  variant="danger"
                  className="remove-btn"
                  onClick={() => handleRemoveAttribute(attr.attribute_id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>No custom attributes available.</p>
        )}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
      <div className="custom-attr-form">
        <h2>Add Custom Attribute</h2>
        <Form onSubmit={handleAddAttribute}>
          <Form.Group controlId="attributeKey">
            <Form.Label>Attribute Key:</Form.Label>
            <Form.Control
              type="text"
              value={attributeKey}
              onChange={(e) => setAttributeKey(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="defaultValue">
            <Form.Label>Default Value:</Form.Label>
            <Form.Control
              type="text"
              value={defaultValue}
              onChange={(e) => setDefaultValue(e.target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            className="custom-attr-btn"
            variant={isAdding ? "success" : "primary"} // Change color based on adding state
          >
            {isAdding
              ? "Custom Attribute Added!"
              : "Add Custom Attribute to the employee"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CustomAttribute;
