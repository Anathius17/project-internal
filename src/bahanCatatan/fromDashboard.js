import React, { useState } from "react";
import "./Dashboard.css";
import { Button } from "bootstrap";

function App({ title }) {
  const [content, setContent] = useState("Dashboard");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [user1, setUser] = useState("");
  const user = title;

  const handleClick = (page) => {
    setUser(page);
  };

  console.log(user);
  function Profile() {
    return (
      <div>
        <ul>
          <li onClick={() => handleClick("Demo")}>Profile</li>
        </ul>
      </div>
    );
  }

  function Messages() {
    return <h2>Messages</h2>;
  }

  function Settings() {
    return <h2>Settings</h2>;
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const DropDown = () => {
    return (
      <>
        <ul>
          <li>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </li>
        </ul>
      </>
    );
  };

  const Dashboard = () => {
    return (
      <div>
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>
    );
  };

  const Demo = () => {
    return (
      <div>
        <h2>Hallo Saya Grasia</h2>
      </div>
    );
  };

  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li onClick={() => handleClick("Dashboard")}>Dashboard</li>
          <li onClick={() => handleClick("Profile")}>Profile</li>
          <li onClick={() => handleClick("Messages")}>Messages</li>
          <li onClick={() => handleClick("Settings")}>Settings</li>
        </ul>
      </nav> */}

      <nav>
        {user === "crm_admin" && <Dashboard />}
        {user === "crm_admin" && <Profile />}
        {user === "admin1" && <Profile />}
        {user === "admin" && <DropDown />}
      </nav>

      <div className="content">
        {/* {content === "Dashboard" && <Dashboard />}
        {content === "Profile" && <Profile />}
        {content === "Messages" && <Messages />}
        {content === "Settings" && <Settings />} */}

        {user1 === "Demo" && <Demo />}
      </div>
      {/* <header>
        <h1>Dashboard</h1>
      </header> */}
    </div>
  );
}

export default App;
