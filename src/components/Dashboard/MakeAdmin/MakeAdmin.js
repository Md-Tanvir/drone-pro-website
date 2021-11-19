import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur=e=>{
    setEmail(e.target.value)
  }
  //  getting admin role
  const handleAdmin = (e) => {
    const user ={email}
    fetch("http://localhost:5000/users/admin", {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
   
        alert('Admin Maded Successfully')
        setEmail('')
      }
      console.log(data);
    })

    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-center">Make New Admin Here</h2>
      {/* form to create admin */}
      <form
        className="justify-content-center mx-auto text-center"
        onSubmit={handleAdmin}
      >
        <input
          style={{ width: "70%" }}
          onBlur={handleOnBlur}
          type="email"
          label="email"
          placeholder="Enter The Email"
          className="form-control mx-auto my-3"
        />
        <button type="submit" className="btn btn-dark">
          Make Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
