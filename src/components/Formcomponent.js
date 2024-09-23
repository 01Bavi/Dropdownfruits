import React, { useState } from 'react';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { uploadCloudinary } from "../utils/UploadCloudinary"; 
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { CircularProgress, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Formcomponent.css';
import { useNavigate } from 'react-router-dom';

const initialValues = { 
    Name: "",
    Id: "",
    Category: "",
    Type: "",
    Total: "",
    Available_quantity: "",
    Description: "",
    Price: "",
    Discount: "",
    Supplier_ID: "",
    Weight: "",
    Color: "",
    image: []
};

const Formcomponent = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const [uploadingImage, setUploadingImage] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = (values) => {
    const data = {
        Name: values.Name,
        Id: values.Id,
        Category: values.Category,
        Type: values.Type,
        Available_quantity: values.Available_quantity,
        Description: values.Description,
        Price: values.Price,
        Supplier_ID: values.Supplier_ID,
        Weight: values.Weight,
        Color: values.Color,
        image: values.image,
    };
    dispatch({ type: 'CREATE_FORM', payload: { data, token } }); 
    console.log(data);
    navigate('/DisplayForm', { state: { data } });
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadingImage(true);
      const imageUrl = await uploadCloudinary(file);
      formik.setFieldValue("image", [...formik.values.image, imageUrl]);
      setUploadingImage(false);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.image];
    updatedImages.splice(index, 1);
    formik.setFieldValue("image", updatedImages);
  };

  return (
    <div className='form-container'>
      <div className="container">
        <form onSubmit={formik.handleSubmit} className="forms">
          <Grid container spacing={2}>
            <Grid item xs={12} className="imagegrid">
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label className="labelone" htmlFor="fileInput">
                <span className="altericon">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadingImage && (
                  <div className="uploadimg">
                    <CircularProgress />
                  </div>
                )}
              </label>

              <div className="imgmap">
                {formik.values.image.map((image, index) => (
                  <div className="relative" key={index}>
                    <img
                      className="inputimg"
                      src={image}
                      alt={`ProductImage ${index + 1}`}
                    />
                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                    >
                      <CloseIcon className="closeicon" />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Name"
                name="Name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Id"
                name="Id"
                label="ID"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Id}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Category"
                name="Category"
                label="Category"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Category}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Type"
                name="Type"
                label="Type"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Type}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Total"
                name="Total"
                label="Total"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Total}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Available_quantity"
                name="Available_quantity"
                label="Available Quantity"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Available_quantity}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                id="Description"
                name="Description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Description}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Price"
                name="Price"
                label="Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Price}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Discount"
                name="Discount"
                label="Discount"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Discount}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Supplier_ID"
                name="Supplier_ID"
                label="Supplier ID"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Supplier_ID}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Weight"
                name="Weight"
                label="Weight"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Weight}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Color"
                name="Color"
                label="Color"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.Color}
              />
            </Grid>
            <Grid item xs={12}>
              <button type="submit" className="submit-button" >
                Submit
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Formcomponent;
