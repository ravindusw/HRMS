import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import "./CustomAttribute.css";

const CustomAttribute = () => {
  const [availableCustomAttributes, setAvailableCustomAttributes] = useState(
    []
  );
  const [attributeKey, setAttributeKey] = useState("");
  const [defaultValue, setDefaultValue] = useState(""); // State for default attribute value
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/auth/customAttributes")
      .then((response) => {
        setAvailableCustomAttributes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching custom attributes:", error);
      });
  }, []);

  const handleAddAttribute = async (e) => {
    e.preventDefault();
    if (availableCustomAttributes.length >= 3) {
      setError("Only three custom attributes can be added.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/auth/customAttributes/addAttribute",
        {
          attributeKey,
          defaultValue,
          availableCustomAttributesCount: availableCustomAttributes.length,
        }
      );

      setAvailableCustomAttributes([
        ...availableCustomAttributes,
        response.data,
      ]);
      setAttributeKey("");
      setDefaultValue(""); // Reset default value
      setError("");
    } catch (error) {
      console.error("Error adding custom attribute:", error);
      setError("Failed to add custom attribute. Please try again.");
    }
  };

  const handleRemoveAttribute = async (attributeId) => {
    try {
      const response = await axiosInstance.delete(
        `/auth/customAttributes/removeAttribute/${attributeId}`
      );

      // Update attributes list
      setAvailableCustomAttributes(
        availableCustomAttributes.filter(
          (attr) => attr.attribute_id !== attributeId
        )
      );

      // Set the success message from the backend response
      setSuccessMessage(response.data.message);

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error removing custom attribute:", error);
      setError("Failed to remove custom attribute. Please try again.");
    }
  };

  return (
    <div className="custom-attr-container">
      <div className="custom-attr-list">
        <h2>Available Custom Attributes</h2>
        {availableCustomAttributes.length > 0 ? (
          <ul>
            {availableCustomAttributes.map((attr) => (
              <li key={attr.attribute_id}>
                {attr.attribute_name}
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveAttribute(attr.attribute_id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No custom attributes available.</p>
        )}
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
      <div className="custom-attr-form">
        <h2>Add Custom Attribute</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleAddAttribute}>
          <div className="custom-attr-group">
            <label>Attribute Key:</label>
            <input
              type="text"
              value={attributeKey}
              onChange={(e) => setAttributeKey(e.target.value)}
              className="custom-attr-control"
              required
            />
          </div>
          <div className="custom-attr-group">
            <label>Default Value:</label>
            <input
              type="text"
              value={defaultValue}
              onChange={(e) => setDefaultValue(e.target.value)}
              className="custom-attr-control"
            />
          </div>
          <button type="submit" className="custom-attr-btn">
            Add Custom Attribute to the employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomAttribute;
