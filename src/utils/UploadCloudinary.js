export const uploadCloudinary = async (pics) => {
    
    if (pics) {

      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "first_preset");
      data.append("cloud_name", "dphjbi3ts");
  
      const res = await 
      fetch(`https://api.cloudinary.com/v1_1/dphjbi3ts/image/upload`, {
        method: "post",
        body: data,
      })
        
        const fileData=await res.json();
        console.log("url : ", fileData);
        return fileData.url
  
    } else {
      console.log("error");
    }
  };