import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayForm = () => {
  const location = useLocation();
  const formData = location.state?.data;

  return (
    <div>
      {formData ? (
        <div>
          <div>
            {formData.image?.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`Uploaded ${index}`} />
            ))}
          </div>
          <div>
            <p>Name: {formData.Name}</p>
            <p>ID: {formData.Id}</p>
            <p>Category: {formData.Category}</p>
            <p>Type: {formData.Type}</p>
            <p>Total: {formData.Total}</p>
            <p>Available Quantity: {formData.Available_quantity}</p>
            <p>Description: {formData.Description}</p>
            <p>Price: {formData.Price}</p>
            <p>Discount: {formData.Discount}</p>
            <p>Supplier ID: {formData.Supplier_ID}</p>
            <p>Weight: {formData.Weight}</p>
            <p>Color: {formData.Color}</p>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DisplayForm;
