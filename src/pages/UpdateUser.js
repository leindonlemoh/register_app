import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const UpdateUser = () => {
  const { id } = useParams();
  //
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    axios.get(`/users/${id}`).then((res) => {
      console.log(res.data[0]);
      setUser({
        first_name: res.data[0].first_name,
        last_name: res.data[0].last_name,
        email: res.data[0].email,
      });
    });
  }, [id]);

  const onInputChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const data = { first_name: user.first_name, last_name: user.last_name };
    axios.post(`/users/${id}`, data).then((res) => {
      swal("Updates Successfully", res.data.message, "success");
    });
  };

  return (
    <div className="cointainer mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Update User</h4>
            </div>
            <div className="card-body">
              <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                  <label htmlFor="first_name" className="input-group-text">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className={`form-control `}
                    name="first_name"
                    id="first_name"
                    onChange={onInputChange}
                    value={user.first_name}
                  />
                </div>
                <div className="input-group mb-3">
                  <label htmlFor="last_name" className="input-group-text">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className={`form-control `}
                    name="last_name"
                    id="last_name"
                    onChange={onInputChange}
                    value={user.last_name}
                  />
                </div>

                <div className="input-group mb-3">
                  <label htmlFor="email" className="input-group-text">
                    Email:
                  </label>
                  <input
                    type="email"
                    className={`form-control 
                    }`}
                    name="email"
                    id="email"
                    value={user.email}
                    readOnly
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

export default UpdateUser;
