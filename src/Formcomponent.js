import React,{useState} from 'react'
import { useFormik } from "formik";
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react'; 
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import './Formcomponent.css';
const initialValues={ 
    Name:"",
    Id: "",
    Category:"",
    Type:"",
    Total:"",
    Available_quantity:"",
    Description:"",
    Price:"",
    Discount:"",
    Supplier_ID:"",
    Weight:"",
    Color:"",
    image:[],
}

const Formcomponent = () => {
  const [uploadImage, setUploadingImage] = useState("flase");
  const token = localStorage.getItem("token");

  const handleSubmit = (values) => {
    const data = {
        Name:values.Name,
        Id:values.Id,
        Category:values.Category,
        Type:values.Type,
        Available_quantity:values. Available_quantity,
        Description:values.Description,
        Price:values.Price,
        Supplier_ID:values.Supplier_ID,
        Weight:values.Weight,
        Color:values.Color,
        image:values.image,
    }
    console.log(data);
}
const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadingImage(true);
   
  };
  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.image];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };


  return (
    
        <div className='form-container'>
            <div className='left-container'>
            <form onSubmit={formik.handleSubmit} className="forms">
                <Grid >
                <Grid className=" imagegrid" >
                    <input
                        type="file"
                        accept="image/*"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                </Grid>
                <Grid >
                    <TextField
                        fullWidth
                        id="Name"
                        Name="Name"
                        label="Name"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Name}
                    />
                </Grid>
                <Grid >
                    <TextField
                        fullWidth
                        id="Id"
                        Name="ID"
                        label="ID"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Id}
                    />
                </Grid>
                <Grid >
                    <TextField
                        fullWidth
                        id="Category"
                        Name="Category"
                        label="Category"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Category}
                    />
                </Grid>
                <Grid item >
                    <TextField
                        fullWidth
                        id="Category"
                        Name="Category"
                        label="Category"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Category}
                    />
                </Grid>
                <Grid item >
                    <TextField
                        fullWidth
                        id="Type"
                        Name="Type"
                        label="Type"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Type}
                    />
                </Grid>
                <Grid  >
                    <TextField
                        fullWidth
                        id="Total"
                        Name="Total"
                        label="Total"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Total}
                    />
                </Grid>
                <Grid  >
                    <TextField
                        fullWidth
                        id=" Available_quantity"
                        Name=" Available_quantity"
                        label=" Available_quantity"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Available_quantity}
                    />
                </Grid>
                <Grid  >
                    <TextField
                        fullWidth
                        id=" Description"
                        Name=" Description"
                        label=" Description"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Description}
                    />
                </Grid>
                <Grid  >
                    <TextField
                        fullWidth
                        id=" Price"
                        Name=" Price"
                        label=" Price"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Price}
                    />
                </Grid>
                <Grid  >
                    <TextField
                        fullWidth
                        id=" Discount"
                        Name=" Discount"
                        label=" Discount"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Discount}
                    />
                </Grid>
                <Grid >
                    <TextField
                        fullWidth
                        id="  Supplier_ID"
                        Name="  Supplier_ID"
                        label="  Supplier_ID"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Supplier_ID}
                    />
                </Grid>
                <Grid >
                    <TextField
                        fullWidth
                        id="  Weight"
                        Name="  Weight"
                        label="  Weight"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Weight}
                    />
                </Grid>
                <Grid >
                    <TextField
                        fullWidth
                        id="  Color"
                        Name="  Color"
                        label="  Color"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.Color}
                    />
                </Grid>

                </Grid>
            
            </form>
            </div>

        </div>
    
  )
}

export default Formcomponent