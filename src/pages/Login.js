import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    axios
      .post("/users/login", data)
      .then((res) => {
        onLogin({
          id: res.data.user_id,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          user_type: res.data.user_type,
        });
        swal("Success", "Logged in Successfully", "success");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        swal("Error", err.response.data.message, "error");
      });
  };

  return (
    <div className="cointainer mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                  <label htmlFor="email" className="input-group-text">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control `}
                    name="email"
                    id="email"
                    onChange={onInputChange}
                    value={user.email}
                  />
                </div>

                <div className="input-group mb-3">
                  <label htmlFor="password" className="input-group-text">
                    Password:
                  </label>
                  <input
                    type="password"
                    className={`form-control 
                    }`}
                    name="password"
                    id="password"
                    onChange={onInputChange}
                    value={user.password}
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary w-100"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
