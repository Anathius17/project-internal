import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.css";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Modal = ({ isOpen, onClose, reload, currentUser }) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const [isChecked, setIsChecked] = useState(false);

  const [status, setStatus] = useState("");
  const [userId, setUserId] = useState("false");
  const [name, setName] = useState("");
  const [nip, setNip] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");

  const [branch, setBranch] = useState([]);
  const [branchName, setBranchName] = useState("");

  const [superVisior, setSupervisior] = useState([]);
  const [superVisiorName, setSupervisiorName] = useState("");

  const [role, setRole] = useState([]);
  const [roleName, setRoleName] = useState("");

  // console.log(isChecked);
  // console.log(status);

  // untuk Token yang tersimpan di session
  const sessionData = JSON.parse(localStorage.getItem("tokenData"));

  // console.log(sessionData);
  const token = sessionData;
  useEffect(() => {
    DropDown();
    DropDownSv();
    DropDownRl();
  }, [isOpen]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const checkBoxStyle = {
    margin: 0,
  };

  useEffect(() => {
    if (isChecked === true) {
      setStatus("True");
    } else {
      setStatus("False");
    }
  }, [isChecked]);
  //! --------for API Create USer--------
  const hitDelete = {
    p_usrid: userId,
    p_name: name,
    p_nip: nip,
    p_email: email,
    p_notlp: noTelepon,
    p_branchcode: branchName,
    p_spv: superVisiorName,
    p_position: "SUPPORT",
    p_acclevel: "1",
    p_efectivedate: "2020-09-30",
    p_status: status,
    p_usr: "kijang1",
    p_defaultpwd: "f7c75d9b669cc01447b415eb3bfbf8319fe4c231",
    p_logid: "12",
  };

  const InsertUserNew = async () => {
    try {
      const userNew = await axios.post(
        "http://116.206.196.65:30983/skycore/User/postJDataInsertRecord",
        JSON.stringify(hitDelete),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(userNew);
      Swal.fire("Save Berhasil", "", "success");
      reload();
      onClose();
    } catch (error) {
      alert(error);
    }
  };

  //! dropdown ddl branch
  const hitDropdown = {
    type: "branch",
    usr: "crm_admin",
  };

  const DropDown = async () => {
    try {
      const listDropdown = await axios.post(
        "http://116.206.196.65:30983/skycore/User/postJDataCallParameterDDL",
        JSON.stringify(hitDropdown),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const cekData = listDropdown.data.data.map((e) => {
        return e;
      });

      // console.log(cekData);
      setBranch(cekData);
    } catch (error) {
      alert(error);
    }
  };

  //! dropdown ddl supervisor
  const hitDropdownSv = {
    type: "supervisor",
    usr: "crm_admin",
  };

  const DropDownSv = async () => {
    try {
      const listDropdown = await axios.post(
        "http://116.206.196.65:30983/skycore/User/postJDataCallParameterDDL",
        JSON.stringify(hitDropdownSv),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const cekData = listDropdown.data.data.map((e) => {
        return e;
      });

      // console.log(cekData);
      setSupervisior(cekData);
    } catch (error) {
      alert(error);
    }
  };

  //! dropdown ddl Role
  const hitDropdownRl = {
    type: "level",
    usr: "crm_admin",
  };

  const DropDownRl = async () => {
    try {
      const listDropdown = await axios.post(
        "http://116.206.196.65:30983/skycore/User/postJDataCallParameterDDL",
        JSON.stringify(hitDropdownRl),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const cekData = listDropdown.data.data.map((e) => {
        return e;
      });

      console.log(cekData);
      setRole(cekData);
    } catch (error) {
      alert(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">User Add New</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        User Id
                      </label>
                    </div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={(e) => setUserId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Name
                      </label>
                    </div>

                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        NIP
                      </label>
                    </div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={(e) => setNip(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                    </div>
                    <div className="col-9">
                      <input
                        type="email"
                        className="form-control"
                        id="recipient-name"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div> */}
                  </div>
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        No Hp
                      </label>
                    </div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={(e) => setNoTelepon(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Branch
                      </label>
                    </div>
                    <div className="col-9">
                      <select
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={(e) => setBranchName(e.target.value)}>
                        {branch.map((item, i) => {
                          return (
                            <option value={item.namevalue} key={i}>
                              {item.nameview}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Supervisior Name
                      </label>
                    </div>
                    <div className="col-9">
                      <select
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={(e) => setSupervisiorName(e.target.value)}>
                        {superVisior.map((item, i) => {
                          return (
                            <option value={item.namevalue} key={i}>
                              {item.nameview}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Role
                      </label>
                    </div>

                    <div className="col-9">
                      <select
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={(e) => setRoleName(e.target.value)}>
                        {role.map((item, i) => {
                          return (
                            <option value={item.namevalue} key={i}>
                              {item.nameview}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className=" row mb-2">
                    <div className="col-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Status
                      </label>
                    </div>
                    <div className="col-9">
                      <input
                        class="form-check-input mt-0"
                        type="checkbox"
                        style={checkBoxStyle}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                  {isChecked ? (
                    <div className=" row mb-2">
                      <div className="col-3">
                        <label for="exampleInputEmail1" class="form-label">
                          Effectived Date
                        </label>
                      </div>
                      <div className="col-9">
                        <DatePicker
                          className="form-control"
                          // selected={startDate}
                          // onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={InsertUserNew}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
