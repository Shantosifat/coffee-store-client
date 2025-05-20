import React, { use, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log(email, password, userProfile);

    // Create user in the firebase

    createUser(email, password)
      .then((result) => {
        console.log(result.user);


        const userProfile = {
          email,
          ...restFormData,
          creationTime : result.user?.metadata?.creationTime,
          lastSignInTime : result.user?.metadata?.lastSignInTime
        }

        // save profile info in the db
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Profile is Created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            // form.reset()
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100  mx-auto max-w-xl shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Name"
            name="name"
          />
          <label className="label">Address</label>
          <input
            type="text"
            className="input w-full"
            placeholder="address"
            name="address"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Photo Url"
            name="photo"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            name="email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
