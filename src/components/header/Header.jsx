import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container">
        <h1>
          <Link href="/">
            대한변호사협회 <strong>변호사정보센터</strong>
          </Link>
        </h1>
        <button type="button" className="drawer">
          메뉴 내비게이션
        </button>
        <nav>
          <div className="nav-wrap">
            <div className="gnb">
              <Link className="home" href="/">
                홈
              </Link>
              <Link href="/search">변호사 찾기</Link>
              <Link href="/via">사건 의뢰하기</Link>
              <Link href="/task">업무 의뢰하기</Link>
            </div>
            <div className="util">
              <Link href="/intro">서비스 소개</Link>
              <Link href="/join">회원가입</Link>
              <Link href="/login">로그인</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
