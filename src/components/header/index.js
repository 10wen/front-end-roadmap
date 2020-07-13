import React from "react";
import LOGO from "../../assets/logo.jpeg";
export default function Header() {
  return (
    <div className="header">
      <div className="top">
        <img
          src={LOGO}
          alt="logo"
          onClick={() => {
            window.location.href = "/front-end-roadmap";
          }}
        />
        <span className="github-button">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=objtube&repo=front-end-roadmap&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </span>
      </div>
      <div className="title">
        <span className="text">
          前端学习路线
          <span className="emoji">🧶🦌</span>
        </span>
      </div>
      <div className="sub-title">👨🏻‍💻 好好学习，天天敲代码 👩🏻‍💻</div>
    </div>
  );
}
