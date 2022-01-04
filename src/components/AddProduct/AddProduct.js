import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const AddProduct = () => {  

  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const loading = toast.loading("Please wait...", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    const product = {
      name: data.name,
      price: data.price,
      wight: data.wight,
      image: imageUrl,
    };
    console.log(product);

    axios
      .post("http://localhost:5000/addProduct", product)
      .then(function (response) {
        console.log(response);
        toast.dismiss(loading);
        toast.success("Successfully add product", {
          style: {
            borderRadius: "10px",
            background: "green",
            color: "#fff",
          },
        });
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "red",
          },
        });
      });
  };

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
            className="input-clear"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <h4 className="product-title mt-4">Wight</h4>
          <input
            className="input-clear"
            placeholder="Product Wight"
            {...register("wight", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <div className="col-6">
          <h4 className="product-title">Product Price</h4>
          <input
            className="input-clear"
            placeholder="Product Price"
            {...register("price", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <div className="image-upload">
            <label htmlFor="file-input">
              <FontAwesomeIcon
                className="upload-icon"
                icon={faCloudUploadAlt}
              />
              <span className="upload-photo">Upload Photo</span>
            </label>
            <input
              className="input-clear"
              onChange={handleImage}
              id="file-input"
              type="file"
            />
          </div>
        </div>
      </div>

      <input type="submit" />
    </form>
  );
};

export default AddProduct;
