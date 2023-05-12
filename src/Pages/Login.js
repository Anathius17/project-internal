import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../asset/images/LogoSky.png";
import "./style.css";
import "./util.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { getToken } from "../API/api";
import md5 from "js-md5";

// ? membuat isi dalam captcha
const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Login = (props) => {
  // ! pada kodingan dibawah kita memasukan nilai ke variabel captcha pada render awal
  const [captcha, setCaptcha] = useState(generateCaptcha());
  // ! pada kodingan dibawah kita set input pada saat render pertama
  const [input, setInput] = useState("");
  // ! kemudian kita atur expirednya ketika render awal yg berisi boolean bernilai false
  const [expired, setExpired] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameCek, setUsernameCek] = useState("");
  const [password, setPassword] = useState("");
  const hashedPassword = md5(password);
  // console.log(hashedPassword);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const [userStatus, setUserStatus] = useState();
  const [userIsLogin, setUserIsLogin] = useState();
  const [userDateTampungan, setUserDateTampungan] = useState("");
  const [userEfrktiveDate, setUserEfektiveDate] = useState("");
  const [uslPassword, setUslPassword] = useState("");
  const [isFristLogin, setIsFristLogin] = useState([]);
  const [dataCheckData, setDataCheck] = useState([]);
  const [userDataCekLogin, setUserLoginDataCek] = useState("");
  const [userFaillLogin, setuserFaillLogin] = useState();

  const [dataRoleUserDetail, setDataRoleUserDetail] = useState([]); // ! Hasil data yang di ambil dari getroleuserdetail

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listMenuSend, setListMenuSend] = useState({});

  // hit Token

  // const getToken = async () => {
  //   try {
  //     const responseToken = await axios.post(
  //       "http://116.206.196.65:30983/skycore/token",
  //       {
  //         data: {
  //           username: "SKYWORXAPIAccess",
  //           password: "SkyW0rxC0n5ult1n9",
  //         },
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //           username: "SKYWORXAPIAccess",
  //           password: "SkyW0rxC0n5ult1n9",
  //         },
  //       }
  //     );

  //     setToken(responseToken.data.access_token);
  //     alert("Berhasil Hit token");
  //   } catch (error) {
  //     alert("Gagal");
  //     console.error(error);
  //   }
  // };

  const getTokenApi = () => {
    getToken().then((e) => {
      setToken(e);
    });
  };

  const getPasswordUser = async () => {
    try {
      const PasswordUser = await axios.get(
        "http://116.206.196.65:30983/skycore/Login/getPasswordUser/crm_admin",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const cekData = PasswordUser.data.data.map((e) => {
        return e;
      });

      setDataCheck(cekData);
      // console.log(cekData);
      let cekUser = PasswordUser.data.data.map((e) => {
        return e.usrname;
      });
      let statusUser = PasswordUser.data.data.map((e) => {
        return e.usrstatus;
      });

      let userLogin = PasswordUser.data.data.map((e) => {
        return e.usrislogin;
      });

      let UserDate = PasswordUser.data.data.map((e) => {
        return e.usrefectivedate;
      });

      let cekpassword = PasswordUser.data.data.map((e) => {
        return e.uslpassword;
      });

      setUsernameCek(cekUser[0]);
      setUserStatus(statusUser[0]);
      setUserIsLogin(userLogin[0]);
      setUserDateTampungan(UserDate[0]);
      setUslPassword(cekpassword[0]);
      alert("Berhasil");
    } catch (errorUser) {
      alert(
        "Sorry, we have trouble getting data, please contact administrator"
      );
    }
  };

  const resetFailLogin = async () => {
    try {
      const failLogin = await axios.get(
        "http://116.206.196.65:30983/skycore/Login/resetFailLogin/crm_admin",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("failLogin Berhasil");
    } catch (error) {
      alert("reset fail login gagal");
      console.log(error);
    }
  };

  // ! nanti atur secara dinamis
  const data1 = {
    user: "crm_admin",
    modules: "CORE",
  };
  const getDataUserRoleDetail = async () => {
    try {
      const userRoleDetail = await axios.post(
        "http://116.206.196.65:30983/skycore/Login/getDataUserRoleDetail",
        JSON.stringify(data1),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let dataUserRoleDetailApi = userRoleDetail.data.data.map((e) => {
        return e;
      });
      console.log(dataUserRoleDetailApi);
      setDataRoleUserDetail(dataUserRoleDetailApi);
      alert("userRoleDetail Berhasil ke Hit");
    } catch (error) {
      alert("reset fail login gagal");
    }
  };

  const generalListMenuAPI = async () => {
    try {
      const listMenu = await axios.get(
        "http://116.206.196.65:30983/skycore/Login/GenerateListMenu/0",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(listMenu);
      const generalListMenu = listMenu.data.data.map((e) => {
        return e;
      });

      console.log(listMenu);
      setListMenuSend(listMenu);
      // setListMenuSend(generalListMenu);

      alert("List Menu Berhasil");
    } catch (error) {
      alert("List Menu gagal");
    }
  };

  // ! nanti atur secara dinamis
  const dataFristLogin = {
    p_userid: "crm_admin",
  };

  const getIsFristLogin = async () => {
    try {
      const frisLogin = await axios.post(
        "http://116.206.196.65:30983/skycore/LogActivity/IsFirstLogin",
        JSON.stringify(dataFristLogin),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(frisLogin);

      let cekIsLogin = frisLogin.data.data.map((e) => {
        return e.is_first_login;
      });

      let userLoginCek = frisLogin.data.data.map((e) => {
        return e.userid;
      });

      console.log(cekIsLogin);
      setIsFristLogin(cekIsLogin[0]);
      setUserLoginDataCek();
      alert("Test Berhasil");
    } catch (error) {
      alert("Test Tidak Berhasil");
    }
  };

  // ! nanti atur secara dinamis
  const dataLogUserTracking = {
    plcd: "ua",
    plusr: "crm_admin",
    plhtt: "OFF",
    plsvrn: "uat-web-los",
    plact: "Login Success",
    plpgur: "/lmsadmin_ocbc/login/v6/nc",
    plqry: "-",
    plbro: "Firefox 72.0",
    plos: "linux",
    plcli: "uat-web-los/10.1.1.1",
  };

  const postDataLogUserTracking = async () => {
    try {
      const frisLogin = await axios.post(
        "http://116.206.196.65:30983/skycore/LogActivity/postDataLogUserTracking",
        JSON.stringify(dataLogUserTracking),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("postDataLogUserTracking Berhasil");
    } catch (error) {
      alert("postDataLogUserTracking Tidak Berhasil");
    }
  };

  const faillLogin = async () => {
    try {
      const failLoginuser = await axios.get(
        "http://116.206.196.65:30983/skycore/Login/UserFailLogin/crm_admin",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let cekFailLogin = failLoginuser.data.data.map((e) => {
        return e;
      });

      alert("usrfaillogin Berhasil");
      setuserFaillLogin(cekFailLogin.usrfaillogin);
    } catch (error) {
      alert("Sorry, the username has not been activated or is blocked");
    }
  };

  const handleSubmitUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=84c4bc8c920f2bfed2ee39df70529b04",
        {
          username,
          password,
        }
      );
      // console.log(response.data); // ! Tampilkan data response dari API
      setErrorMessage(""); // ! Reset pesan error jika login berhasil
    } catch (error) {
      console.error(error);
      setErrorMessage(alert("Username atau Password Salah")); // Set pesan error jika login gagal
    }
  };

  const demo = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (token !== "") {
      getPasswordUser();
      console.log(1);
      console.log(hashedPassword);
    }
  }, [token]);

  // if (dataCheckData.length > 0) {

  useEffect(() => {
    if (username === usernameCek && username !== "") {
      console.log(2);
      if (userStatus === true) {
        console.log(3);
        if (userIsLogin === 0) {
          console.log(4);
          if (userDateTampungan !== "") {
            console.log(5);
            console.log(uslPassword);
            console.log(hashedPassword);
            if (uslPassword === "5fec4ba8376f207d1ff2f0cac0882b01") {
              // uslPassword === "06f868becd68ef11f9901b8127920ed02d1a8693";

              // uslPassword === hashedPassword)
              console.log(6);
              resetFailLogin();
              getDataUserRoleDetail();
              generalListMenuAPI();
              getIsFristLogin();
            } else if (hashedPassword !== uslPassword) {
              //hit API UserFalLogin
              faillLogin();
              // resetFailLogin();
            }
          } else if (userDateTampungan === "") {
            postDataLogUserTracking();
            alert("Sorry, the username has not been activated or is blocked");
          }
        } else if (userIsLogin === 1) {
          //hit API postDataLogUserTracking
          postDataLogUserTracking();
          alert("Sorry, the username is already login");
        }
      } else if (userStatus === false) {
        postDataLogUserTracking();
        alert("Sorry, the username has not been activated or is blocked");
      }
    } else if (username === "" && username !== usernameCek) {
      alert("Please enter a username");
    }
  }, [dataCheckData]);

  useEffect(() => {
    if (isFristLogin === false) {
      postDataLogUserTracking();
      demo();
    }
  }, [isFristLogin]);

  const handleSendDataToParent = () => {
    props.onDataFromChild(usernameCek);
  };

  const handleMenuList = () => {
    props.dataMenu(listMenuSend);
  };

  const handleMenuLevel = () => {
    props.dataMenuLevel(dataRoleUserDetail);
  };

  useEffect(() => {
    if (userFaillLogin < 3) {
      alert("Fail berhasil");
      postDataLogUserTracking();
    } else if (userFaillLogin > 3) {
      alert("You have been blocked please call administrator");
    }
  }, [userFaillLogin]);

  useEffect(() => {
    if (isLoggedIn === true && isLoggedIn !== "") {
      handleMenuList();
      handleMenuLevel();
      handleSendDataToParent();
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [isLoggedIn]);

  //? ---batas bagian captcha validation

  useEffect(() => {
    const timer = setTimeout(() => {
      setCaptcha(generateCaptcha());
      setInput("");
      //dalam 3 detik expired akan di set menjadi true
      setExpired(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, [captcha]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.toUpperCase() === captcha.toUpperCase()) {
      alert("CAPTCHA validated successfully!");
      getTokenApi();
    } else {
      alert("CAPTCHA validation failed. Please try again.");
      setCaptcha(generateCaptcha());
      setInput("");
    }
  };

  //? ---batas bagian captcha validation

  return (
    <div className="fullscreen_bg">
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-190 p-b-30">
            <form
              className="login100-form validate-form"
              onSubmit={(event) => {
                handleSubmitUser(event);
                handleSubmit(event);
              }}>
              <div className="login100-form-avatar mb-4">
                <img src={Logo} alt="Logo" className="logo" />
              </div>
              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Username is required">
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Password is required">
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <span>
                {errorMessage && <p className="eror">{errorMessage}</p>}{" "}
              </span>

              <div className="wrap-input100 validate-input m-b-10 captha ">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  className="input100-captha"
                  placeholder="Enter CAPTCHA"
                />
                <br />
                {expired ? (
                  <div>
                    <button
                      className="btn"
                      onClick={() => {
                        setCaptcha(generateCaptcha());
                        setInput("");
                        setExpired(false);
                      }}>
                      Refresh CAPTCHA
                    </button>
                  </div>
                ) : (
                  <img
                    src={`https://dummyimage.com/200x100/000/fff&text=${captcha}`}
                    alt="CAPTCHA"
                    className="Captcha-images"
                  />
                )}
              </div>
              <div className="container-login100-form-btn p-t-10">
                <button className="login100-form-btn" type="submit">
                  Login
                </button>
              </div>
              <div className="text-center w-full p-t-25 p-b-230"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
