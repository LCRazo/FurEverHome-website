import React, { useEffect, useState } from "react";
import './EstimateForm.css';

function EstimateForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
      };

  return(
<div class="full-page-bg">
    <div class="contianer">
        <div class="row justify-content-center">
            <div class="col-md-8">
            <div class="form-container">
      <form className="estimate-form p-3 mb-2 bg-danger text-white" onSubmit={handleSubmit}>
       <h2 className='inline-title'> Request a Free Estimate </h2>

       <div class="form-row">
          <div class="form-group col-md-12">
              <input class="form-control"
               type="text"
               name="firstName"
               placeholder="First Name"
               value={formData.firstName}
               onChange={handleChange}
              />
          </div>
       </div>

       <div class="form-row">
       <div class="form-group col-md-12">
            <input class="form-control"
             type="text"
             name="lastName"
             placeholder="Last Name"
             value={formData.lastName}
             onChange={handleChange}
            />
        </div>
        </div>

       <div class="form-row">
            <div class="form-group col-md-12">
              <input class="form-control"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              />
            </div>

            <div class="form-group col-md-12">
              <input class="form-control"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
               />
            </div>
         </div>
        <button type="submit" className="btn btn-light">Submit</button>
    </form>
</div>
            </div>
        </div>
    </div>
</div>

 );
};

export default EstimateForm;