import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/sb-admin-2.css";
import "../vendor/fontawesome-free/css/all.min.css";

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

  console.log(menuList);
  console.log(menuLevel);

  var lvusr = menuLevel;
  var objParent = menuList;
  let html = "";
  html +=
    '<ul className="nav side-menu" style="padding-left:16px;color: white">';
  console.log(lvusr.length);
  for (let i = 0; i < objParent.data.data.length; i++) {
    for (let d = 0; d < lvusr.length; d++) {
      if (lvusr[d].ldlmdescription === objParent.data.data[i].mn_acl) {
        if (objParent.data.data[i].child.length > 0) {
          //bagian admin dan parameter
          html =
            html +
            `<li className="nav-item"><a><i class="` +
            objParent.data.data[i].mn_icon +
            '"></i> ' +
            objParent.data.data[i].mn_name;
          html = html + ` <span class="fas fa-chevron-down"></span></a>`;
          html = html + `<ul className="nav child">`;

          for (var z = 0; z < objParent.data.data[i].child.length; z++) {
            for (var o = 0; o < lvusr.length; o++) {
              if (
                lvusr[o].ldlmdescription ===
                objParent.data.data[i].child[z].mn_acl
              ) {
                if (objParent.data.data[i].child[z].child.length > 0) {
                  html +=
                    `<li className='dropdown-item' style = 'color:white'><a style='font-weight: bold;' >` +
                    objParent.data.data[i].child[z].mn_name;
                  html += '<span class="fa fa-chevron-down"></span></a>';
                  html += '<ul class="nav child_menu">';
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
            '<li className="nav-item"><a href="${local_server}' +
            objParent.data.data[i].mn_link +
            '"><i class="' +
            objParent.data.data[i].mn_icon +
            '"></i>' +
            objParent.data.data[i].mn_name;
          html += "</li>";
        }
      }
    }
  }
  html += "</ul>";

  return (
    <div id="page-top">
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar">
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              {/* <i className="fas fa-laugh-wink"></i> */}
            </div>
            <div className="sidebar-brand-text mx-3">
              SkyWorx <sup></sup>
            </div>
          </a>

          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <hr className="sidebar-divider" />
          <div className="sidebar-heading mb-3">Menu</div>

          {/* <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo">
              <i class="fas fa-fw fa-cog"></i>
              <span>Components</span>
            </a>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar">
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Components:</h6>
                <a class="collapse-item" href="buttons.html">
                  Buttons
                </a>
                <a class="collapse-item" href="cards.html">
                  Cards
                </a>
              </div>
            </div>
          </li> */}

          <li
            className="nav-item"
            dangerouslySetInnerHTML={{ __html: html }}></li>
        </ul>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                  <a href="/" className="log-out">
                    Log Out
                  </a>
                </li>
              </ul>
            </nav>
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
