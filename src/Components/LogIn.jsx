import React from "react";

const LogIn = () => {
  return (
        <div className="card bg-base-100 mx-auto max-w-xl shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input w-ful" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
  );
};

export default LogIn;
