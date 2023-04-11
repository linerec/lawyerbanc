import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-qna">
          <h1>Q&amp;A</h1>
          <ul className="link">
            <li>
              <a href="/notice">공지사항</a>
            </li>
            <li>
              <a href="/faq">자주 하는 질문</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-menu">
        <a href="/usepolicy">이용약관</a>
        <a href="/privacypolicy">개인정보처리방침</a>
      </div>
      <div className="container">
        <div className="foot-foot">
          <div className="sinistra">
            <div className="info">
              <h1>ADJOA</h1>
              <p>2160 N Central Rd #106, Fort Lee, NJ 07024</p>

              <p className="mail">
                <span>Email: </span> <span>info@theadjoa.com</span>
              </p>
            </div>
            <p>© {new Date().getFullYear()} ADJOA - All Rights Reserved.</p>
          </div>
          <div className="destra">
            <p className="slogan">골프에 대한 열정을 함께 나누세요!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
