import React, { useState, useEffect } from "react";

const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

const Captcha = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState("");
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCaptcha(generateCaptcha());
      setInput("");
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
    } else {
      alert("CAPTCHA validation failed. Please try again.");
      setCaptcha(generateCaptcha());
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter CAPTCHA:</label>
        <br />
        <input type="text" value={input} onChange={handleInputChange} />
        <br />
        {expired ? (
          <div>
            <span>Expired</span>
            <br />
            <button
              className="btn btn-primary"
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
          />
        )}
        <br />
        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Captcha;
