import React from "react";

function SearchBanner() {
  return (
    <section className="home promo">
      <div className="container">
        <div className="row">
          <div className="d-none d-sm-block col-md-2 golbanc">
            <img src="assets/images/sections/searchbanner/golbanc.jpg" />
          </div>
          <div className="col-md-10">
            <h1>
              골프뱅크 <small>Golf Banc</small>
            </h1>
            <h2>당신의 골프 라이프를 높이다</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBanner;
