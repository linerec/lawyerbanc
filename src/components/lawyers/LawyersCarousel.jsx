import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  draggable: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  variableWidth: true,
  autoplay: true,
};

const slideItemStyle = {
  width: "290px",
  minHeight: "410px",
};

const LawyersCarousel = ({ items }) => {
  return (
    <Slider {...settings} className="lawyer-list">
      {items.map((item, index) => (
        <div>
          <div className="card" style={slideItemStyle}>
            <a>
              <figure>
                <img
                  alt={`${item.name_ko} 사진`}
                  src={item.profile_picture_url}
                />
              </figure>
              <div className="keyword-wrap ">
                <ul class="keyword">
                  {item.keywords.map((keyword) => (
                    <li>{keyword}</li>
                  ))}
                </ul>
              </div>
              <p className="name">
                <strong>{item.name_ko}</strong> {item.position}
              </p>
              <p className="intro line2">{item.introduction}</p>
              <dl className="office">
                <dt>{item.office_name}</dt>
                <dd>{item.office_address}</dd>
                <dd>{item.office_phone}</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default LawyersCarousel;
