import React from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";

const AddProduct = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
   return (
      <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>

         <div className="row">
            <div className="col-6">
               <h4 className='product-title'>Product Name</h4>
               <input placeholder="Product Name" {...register("name", { required: true })} />
               {errors.exampleRequired && <span>This field is required</span>}

               <h4 className='product-title mt-4'>Wight</h4>
               <input placeholder="Product Wight" {...register("wight", { required: true })} />
               {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div className="col-6">
               <h4 className='product-title'>Product Price</h4>
               <input placeholder="Product Price" {...register("price", { required: true })} />
               {errors.exampleRequired && <span>This field is required</span>}

               <div class="image-upload">
                  <label for="file-input">
                     <img src={require('../../icons/cloud-upload-outline 1.png')} alt="Upload" />
                     <span className="upload-photo">Upload Photo</span>
                  </label>
                  <input {...register("image", { required: true })} id="file-input" type="file"/>
               </div>

            </div>
         </div>
         
         
         <input type="submit" />
    </form>
   );
};

export default AddProduct;