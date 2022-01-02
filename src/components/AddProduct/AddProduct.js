import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState("");
  const onSubmit = (data) => console.log(data);

  const handleImage = (event) => {
    const loading = toast.loading("Please wait...", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    const image = event.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "8c117ceca2577d9d45a40223e7919583");
    imageData.append("image", image);
    console.log(imageData);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        toast.dismiss(loading);
        toast.success("Successfully Image Upload", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-6">
          <h4 className="product-title">Product Name</h4>
          <input
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <h4 className="product-title mt-4">Wight</h4>
          <input
            placeholder="Product Wight"
            {...register("wight", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <div className="col-6">
          <h4 className="product-title">Product Price</h4>
          <input
            placeholder="Product Price"
            {...register("price", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <div className="image-upload">
            <label htmlFor="file-input">
              <img
                src={require("../../icons/cloud-upload-outline 1.png")}
                alt="Upload"
              />
              <span className="upload-photo">Upload Photo</span>
            </label>
            <input onChange={handleImage} id="file-input" type="file" />
          </div>
        </div>
      </div>

      <input type="submit" />
    </form>
  );
};

export default AddProduct;
