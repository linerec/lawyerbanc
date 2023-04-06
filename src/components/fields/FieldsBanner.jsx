import React from "react";

function FieldsBanner() {
  return (
    <section className="home field">
      <div className="container quick-link">
        <button type="button">민사</button>
        <button type="button">상사</button>
        <button type="button">형사</button>
        <button type="button">가사</button>
        <button type="button">행정 헌법</button>
        <button type="button">파산 회생</button>
        <button type="button">노동</button>
        <button type="button">조세</button>
        <button type="button">
          지적재산
          <br />
          특허상표
        </button>
        <button type="button">국제</button>
      </div>
    </section>
  );
}

export default FieldsBanner;
