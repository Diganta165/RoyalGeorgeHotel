import React, { useState } from 'react';

const initialFormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  tableNumber: "",
  comment: ""
};


const TableBookingForm = () => {
    const [tableForm, setTableForm] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTableForm({ ...tableForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(tableForm);
    };
    return (
        <>
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={tableForm.firstName}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={tableForm.lastName}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={tableForm.phone}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={tableForm.email}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={tableForm.date}
                onChange={handleChange}
                required
            />
            <input
                type="time"
                name="time"
                value={tableForm.time}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="tableNumber"
                placeholder="Table Number"
                value={tableForm.tableNumber}
                onChange={handleChange}
                required
                min="1"
            />
            <textarea
                name="comment"
                placeholder="Comment"
                value={tableForm.comment}
                onChange={handleChange}
            />
            <button type="submit">Book Table</button>
            </form>  
        </>
    );
};

export default TableBookingForm;