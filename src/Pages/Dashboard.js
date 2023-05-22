import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/sb-admin-2.css";
import "../vendor/fontawesome-free/css/all.min.css";
import Sky from "../asset/images/Sky.png";
import Skysite from "../asset/images/LogoSky.png";
import "../Pages/Dashboard.css";
import Demo from "../Component/Demo";
import { IconName } from "react-icons/ri";
import "../Component/modal.css";

//catatan ketika di refers dia error karena kita harus tampung session
// const menu = {
//   status: "true",
//   status_code: 200,
//   message: "Processed",
//   data: [
//     {
//       id: "1",
//       mn_name: "Dashboard",
//       mn_link: "/dashboard",
//       mn_parentid: "0",
//       mn_acl: "lvl_dash",
//       mn_order: "1",
//       mn_icon: "fa fa-dashboard",
//       mn_breadcrumb: " ",
//       child: [],
//     },
//     {
//       id: "2",
//       mn_name: "Administrator",
//       mn_link: "",
//       mn_parentid: "0",
//       mn_acl: "lvl_adm",
//       mn_order: "2",
//       mn_icon: "fa fa-users",
//       mn_breadcrumb: " ",
//       child: [
//         {
//           id: "4",
//           mn_name: "User Management",
//           mn_link: "/user",
//           mn_parentid: "2",
//           mn_acl: "lvl_adm_mgt",
//           mn_order: "1",
//           mn_icon: "",
//           mn_breadcrumb: "User Management",
//           child: [],
//         },
//         {
//           id: "5",
//           mn_name: "Role Management",
//           mn_link: "/RoleManagement",
//           mn_parentid: "2",
//           mn_acl: "lvl_adm_acl",
//           mn_order: "2",
//           mn_icon: "",
//           mn_breadcrumb: "Role Management",
//           child: [],
//         },
//         {
//           id: "6",
//           mn_name: "System",
//           mn_link: "",
//           mn_parentid: "2",
//           mn_acl: "lvl_adm_sys",
//           mn_order: "3",
//           mn_icon: "",
//           mn_breadcrumb: "fa fa-cogs",
//           child: [
//             {
//               id: "11",
//               mn_name: "Batch Schedule",
//               mn_link: "/BatchSchedule",
//               mn_parentid: "6",
//               mn_acl: "lvl_sys_bch_sch",
//               mn_order: "1",
//               mn_icon: "",
//               mn_breadcrumb: "Batch Schedule",
//               child: [],
//             },
//             {
//               id: "12",
//               mn_name: "Batch Schedule Checker",
//               mn_link: "/BatchSchedule/Checker",
//               mn_parentid: "6",
//               mn_acl: "lvl_sys_bch_sch_chk",
//               mn_order: "2",
//               mn_icon: "",
//               mn_breadcrumb: "Batch Schedule Checker",
//               child: [],
//             },
//             {
//               id: "13",
//               mn_name: "Batch Schedule Approval",
//               mn_link: "/BatchSchedule/Approval",
//               mn_parentid: "6",
//               mn_acl: "lvl_sys_bch_sch_apr",
//               mn_order: "3",
//               mn_icon: "",
//               mn_breadcrumb: "Batch Schedule Approval",
//               child: [],
//             },
//           ],
//         },
//         {
//           id: "7",
//           mn_name: "Audit Trail",
//           mn_link: "/AuditTrail",
//           mn_parentid: "2",
//           mn_acl: "lvl_adm_adt",
//           mn_order: "4",
//           mn_icon: "",
//           mn_breadcrumb: "Audit Trail",
//           child: [],
//         },
//       ],
//     },
//     {
//       id: "3",
//       mn_name: "Parameter",
//       mn_link: "",
//       mn_parentid: "0",
//       mn_acl: "lvl_prm",
//       mn_order: "3",
//       mn_icon: "",
//       mn_breadcrumb: " ",
//       child: [
//         {
//           id: "9",
//           mn_name: "Global Setting",
//           mn_link: "/global",
//           mn_parentid: "3",
//           mn_acl: "lvl_prm_gnr",
//           mn_order: "1",
//           mn_icon: "",
//           mn_breadcrumb: "Global Setting",
//           child: [],
//         },
//         {
//           id: "10",
//           mn_name: "Branch Management",
//           mn_link: "/Branch",
//           mn_parentid: "3",
//           mn_acl: "lvl_prm_brm",
//           mn_order: "2",
//           mn_icon: "",
//           mn_breadcrumb: "Branch Management",
//           child: [],
//         },
//       ],
//     },
//   ],
// };

// const menuLevel = [
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_dash",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_adm",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_prm",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_adm_mgt",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_adm_acl",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_adm_sys",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_adm_adt",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_prm_gnr",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_prm_brm",
//     modules: "CORE",
//   },
//   {
//     usruserid: "crm_admin",
//     usrname: "crm_admin",
//     usrnip: "crm_admin",
//     usraccesslevel: "1",
//     usrbranch: "0001",
//     usrstatus: 1,
//     ldlmdescription: "lvl_sys_bch_sch",
//     modules: "CORE",
//   },
// ];

const Dashboard = ({ listmenu, levelmenu }) => {
  const [menuList, setMenuList] = useState(listmenu);
  const [menuLevel, setMenuLevel] = useState(levelmenu);
  const [menuList1, setMenuList1] = useState(listmenu);
  const [menuLevel1, setMenuLevel1] = useState(levelmenu);
  const [sideBarHide, setSideBarHide] = useState(true);

  useEffect(() => {
    if (menuList === undefined) {
      setMenuList(listMenu);
    }
    if (menuLevel === undefined) {
      setMenuLevel(levelMenu);
    }
    if (menuList1 === undefined) {
      setMenuList1(listMenu);
    }
    if (menuLevel1 === undefined) {
      setMenuLevel1(levelMenu);
    }
  }, [menuList, menuLevel, menuList1, menuLevel1]);

  // Dapatkan data sesi
  const sessionData = JSON.parse(localStorage.getItem("sessionData"));
  const listMenu = JSON.parse(localStorage.getItem("ListMenu"));
  const levelMenu = JSON.parse(localStorage.getItem("LevelMenu"));
  console.log(menuList);
  console.log(menuLevel);
  console.log(menuList1);
  console.log(menuLevel1);
  console.log(listMenu);
  console.log(levelMenu);

  const lvusr = menuLevel;
  const objParent = menuList;
  let html = "";
  html +=
    '<ul className="nav side-menu" style="padding-left:16px;color: white">';
  // console.log(lvusr.length);
  for (let i = 0; i < objParent.data.data.length; i++) {
    for (let d = 0; d < lvusr.length; d++) {
      if (lvusr[d].ldlmdescription === objParent.data.data[i].mn_acl) {
        if (objParent.data.data[i].child.length > 0) {
          //bagian admin dan parameter
          html =
            html +
            `<li class="nav-item dropdown"><a class='dropdown-new'><i class="` +
            objParent.data.data[i].mn_icon +
            '"></i> ' +
            objParent.data.data[i].mn_name;
          html = html + ` <span class="fas fa-chevron-down"></span></a>`;
          html = html + `<ul class="nav-child" >`;

          for (var z = 0; z < objParent.data.data[i].child.length; z++) {
            for (var o = 0; o < lvusr.length; o++) {
              if (
                lvusr[o].ldlmdescription ===
                objParent.data.data[i].child[z].mn_acl
              ) {
                if (objParent.data.data[i].child[z].child.length > 0) {
                  html +=
                    `<li class='dropdown-item2' style = 'color:white'><a class='system-list' >` +
                    objParent.data.data[i].child[z].mn_name;
                  html += '<span class="fa fa-chevron-down"></span></a>';
                  html += '<ul class="nav child_menu2">';
                  for (
                    var u = 0;
                    u < objParent.data.data[i].child[z].child.length;
                    u++
                  ) {
                    for (var h = 0; h < lvusr.length; h++) {
                      if (
                        lvusr[h].ldlmdescription ===
                        objParent.data.data[i].child[z].child[u].mn_acl
                      ) {
                        html +=
                          '<li class="sub_menu"><a href="${local_server}' +
                          objParent.data.data[i].child[z].child[u].mn_link +
                          '">' +
                          objParent.data.data[i].child[z].child[u].mn_name +
                          "</a></li>";
                      }
                    }
                  }
                  html += "</ul>";
                  html += "</li>";
                } else {
                  html +=
                    '<li className="dropdown-item"><a href="${local_server}' +
                    objParent.data.data[i].child[z].mn_link +
                    '">' +
                    objParent.data.data[i].child[z].mn_name;
                  html += "</li>";
                }
              }
            }
          }
          html += "</ul>";
          html += "</li>";
        } else {
          html +=
            '<li class="nav-item"><a class="dropdown-new" href="${local_server}' +
            objParent.data.data[i].mn_link +
            `"><i class="` +
            objParent.data.data[i].mn_icon +
            `"></i>` +
            objParent.data.data[i].mn_name;
          html += "</li>";
        }
      }
    }
  }
  html += "</ul>";

  const lvusr1 = menuLevel1;
  const objParent1 = menuList1;
  let html1 = "";
  html1 +=
    '<ul className="nav side-menu" style="padding-left:16px;color: white">';
  // console.log(lvusr1.length);
  for (let a = 0; a < objParent1.data.data.length; a++) {
    for (let b = 0; b < lvusr1.length; b++) {
      if (lvusr1[b].ldlmdescription === objParent1.data.data[a].mn_acl) {
        if (objParent1.data.data[a].child.length > 0) {
          //bagian admin dan parameter
          html1 =
            html1 +
            `<li class="nav-item dropdown1"><a class='dropdown-new'><i class="` +
            "<RiAdminFill/>" +
            '"></i> ';
          // +
          // objParent1.data.data[a].mn_name;
          html1 = html1 + ` <span class="item"></span></a>`;
          html1 = html1 + `<ul class="nav-child1" >`;
          for (var y = 0; y < objParent1.data.data[a].child.length; y++) {
            for (var p = 0; p < lvusr1.length; p++) {
              if (
                lvusr1[p].ldlmdescription ===
                objParent1.data.data[a].child[y].mn_acl
              ) {
                if (objParent1.data.data[a].child[y].child.length > 0) {
                  html1 +=
                    `<li class='dropdown-item1' style = 'color:white'><a class='system-list' >` +
                    objParent1.data.data[a].child[y].mn_name;
                  html1 += '<span class="fa fa-chevron-down"></span></a>';
                  html1 += '<ul class="nav child_menu1">';
                  for (
                    var n = 0;
                    n < objParent1.data.data[a].child[y].child.length;
                    n++
                  ) {
                    for (var c = 0; c < lvusr1.length; c++) {
                      if (
                        lvusr1[c].ldlmdescription ===
                        objParent1.data.data[a].child[y].child[n].mn_acl
                      ) {
                        html1 +=
                          '<li class="sub_menu-site"><a href="${local_server}' +
                          objParent1.data.data[a].child[y].child[n].mn_link +
                          '">' +
                          objParent1.data.data[a].child[y].child[n].mn_name +
                          "</a></li>";
                      }
                    }
                  }
                  html1 += "</ul>";
                  html1 += "</li>";
                } else {
                  html1 +=
                    '<li className="dropdown-item"><a href="${local_server}' +
                    objParent1.data.data[a].child[y].mn_link +
                    '">' +
                    objParent1.data.data[a].child[y].mn_name;
                  html1 += "</li>";
                }
              }
            }
          }
          html1 += "</ul>";
          html1 += "</li>";
        } else {
          html1 +=
            '<li class="nav-item"><a class="dropdown-new" href="${local_server}' +
            objParent1.data.data[a].mn_link +
            `"><i class="` +
            objParent1.data.data[a].mn_icon +
            `"></i>`;
          //  +
          // objParent1.data.data[a].mn_name;
          html1 += "</li>";
        }
      }
    }
  }
  html1 += "</ul>";

  return (
    <div id="page-top">
      <div id="wrapper">
        {sideBarHide === true ? (
          <div className="test-sidebar">
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html">
              <div className="sidebar-brand-icon rotate-n-15">
                {/* <i className="fas fa-laugh-wink"></i> */}
              </div>
              <div className="sidebar-brand-text mx-3 shadow">
                <img src={Sky} alt="" className="logoSky" />
              </div>

              {/* <button
                className="fa fa-bars"
                onClick={() => setSideBarHide(false)}></button> */}
            </a>
            <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar">
              <li
                className="nav-item"
                dangerouslySetInnerHTML={{ __html: html }}></li>
            </ul>
          </div>
        ) : (
          <div className="test-sidebar-site">
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html">
              <div className="sidebar-brand-icon rotate-n-15">
                {/* <i className="fas fa-laugh-wink"></i> */}
              </div>
              <div className="sidebar-brand-text mx-3 shadow">
                <img src={Skysite} alt="" className="logoSkySite" />
              </div>

              {/* <button
                className="fa fa-bars"
                onClick={() => setSideBarHide(true)}></button> */}
            </a>
            <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar">
              <li
                className="nav-item"
                dangerouslySetInnerHTML={{ __html: html1 }}></li>
            </ul>
          </div>
        )}

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-2 static-top shadow">
              {sideBarHide === true ? (
                <>
                  <button
                    className="btn mr-3"
                    onClick={() => setSideBarHide(false)}>
                    <i className="fa fa-bars"></i>
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn mr-3 "
                    onClick={() => setSideBarHide(true)}>
                    <i className="fa fa-bars"></i>
                  </button>
                </>
              )}

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a href="/" className="log-out">
                    <i className="fa fa-user-circle"></i> Log Out
                  </a>
                </li>
              </ul>
            </nav>

            <Demo />
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2023</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
