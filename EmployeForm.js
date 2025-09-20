import React, { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! (Data not posted)");
    console.log(formData);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Employee Form</h3>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control"
                 value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input type="text" name="designation" className="form-control"
                 value={formData.designation} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" name="location" className="form-control"
                 value={formData.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" name="salary" className="form-control"
                 value={formData.salary} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
