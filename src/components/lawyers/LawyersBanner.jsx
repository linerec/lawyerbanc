import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import SearchBar from "../banner/SearchBar";

function LawyersBanner() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="home lawyer">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="recommand home">
        <button type="button">민사</button>
        <button type="button">상사</button>
        <button type="button">형사</button>
        <button type="button">가사</button>
        <button type="button">행정 헌법</button>
        <button type="button">조세</button>
        <button type="button">파산 회생</button>
        <button type="button">노동</button>
        <button type="button">지적재산</button>
        <button type="button">국제</button>
      </div>
      <h1 className="container cnt-head flex">
        <p className="head">
          <span className="rb">
            <strong className="color">‘나의 변호사’</strong>에서&nbsp;
          </span>
          <span className="rb">
            <strong>다양한 분야</strong>의 변호사를 만나보세요.
          </span>
        </p>
      </h1>

      <div className="slick-slider lawyer-list slick-initialized" dir="ltr">
        <div
          className="slick-list"
          style={{ height: 464, padding: "0px 50px" }}
        >
          <div
            className="slick-track"
            style={{
              opacity: 1,
              transform: "translate3d(-2301.5px, 0px, 0px)",
              width: 57210,
            }}
          >
            <div
              data-index={-10}
              tabIndex={-1}
              className="slick-slide slick-center slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="육이은 변호사 사진"
                        src="https://qrtn.koreanbar.org/archive/biz/2020/2020-05-10/101851316789194431887304152234.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>육이은</strong> 변호사
                    </p>
                    <p className="intro line2">
                      수원지방법원 바로 앞에 법률사무소 이은으로 개업하였습니다.
                      <br />
                      맡은 사건 하나하나 늘 최선을 다해 좋은 결과를 내도록
                      노력하겠습니다.
                    </p>
                    <dl className="office">
                      <dt>변호사육이은법률사무소</dt>
                      <dd>경기 수원시 영통구 광교중앙로248번길 101 (하동)</dd>
                      <dd>031-548-1788</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-9}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="김세찬 변호사 사진"
                        src="/pimg/profile/2022/2022-02-28/001/20220228132723299rr3hynth.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap over">
                      <ul className="keyword">
                        <li>인천</li>
                        <li>부천</li>
                        <li>민사</li>
                        <li>형사</li>
                        <li>이혼</li>
                      </ul>
                    </div>
                    <p className="name">
                      <strong>김세찬</strong> 변호사
                    </p>
                    <p className="intro line2">
                      안녕하세요. 법률사무소 제언 김세찬 변호사입니다.
                      <br />
                      의뢰인의 권익을 위하여, 꼼꼼하게 살피겠습니다.
                    </p>
                    <dl className="office">
                      <dt>법률사무소 제언</dt>
                      <dd>인천 미추홀구 소성로185번길 17 (학익동, 동원빌딩)</dd>
                      <dd>032-862-0162</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-8}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="김평우 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/www_filedata/mem_photo/KO_MEMBER_2014113172626_1.JPG"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>김평우</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사김평우법률사무소</dt>
                      <dd>서울 강남구 삼성동 141-36</dd>
                      <dd>3429-0151-2</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-7}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박성현 변호사 사진"
                        src="/pub/img/profile-man-default.png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박성현</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 헌율</dt>
                      <dd>제주 제주시 구남로7길 33-2, 3층</dd>
                      <dd />
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-6}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="이주호 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/증명사진(이주호).jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>이주호</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 커넥트</dt>
                      <dd>서울 강남구 테헤란로28길 7, 2층</dd>
                      <dd>02-6203-7701</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-5}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박철 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/KakaoTalk_20220607_162626001.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박철</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인(유한) 민</dt>
                      <dd>광주 동구 지산로63번길 2, 403,404,405,501,502호</dd>
                      <dd>062-229-1472</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-4}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="이진성 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/증명사진(10).png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>이진성</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 현산</dt>
                      <dd>서울 서초구 반포대로24길 82, 2층</dd>
                      <dd>02-591-7490</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-3}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박대현 변호사 사진"
                        src="https://qrtn.koreanbar.org/archive/biz/2022/2022-05-03/31110384023845197514335341296.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박대현</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사박대현법률사무소</dt>
                      <dd>
                        서울 영등포구 여의대로 8 (여의도동, 여의도파크센터)
                      </dd>
                      <dd>02-508-0479</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-2}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="배진한 변호사 사진"
                        src="/pub/img/profile-man-default.png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>배진한</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사배진한법률사무소</dt>
                      <dd>서울 서초구 서초중앙로</dd>
                      <dd>3476-0006</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={-1}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="최정희 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/최정희 증명 사진.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap over">
                      <ul className="keyword">
                        <li>부동산,건설</li>
                        <li>이혼,상속</li>
                        <li>손해배상,위자료</li>
                        <li>매매,임대차</li>
                        <li>계약금,권리금</li>
                      </ul>
                    </div>
                    <p className="name">
                      <strong>최정희</strong> 변호사
                    </p>
                    <p className="intro line2">
                      광주 부동산전문변호사, 가사법(이혼, 상속)전문변호사,
                      계약금, 권리금, 부동산매매, 임대차, 토지인도, 소유권,
                      취득시효, 경계분쟁, 공유물분할, 공사대금, 건설하자
                      손해배상
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 가현</dt>
                      <dd>광주 동구 지산로85번길 11-9</dd>
                      <dd>062-236-0222</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={0}
              className="slick-slide slick-active slick-center slick-current"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="육이은 변호사 사진"
                        src="https://qrtn.koreanbar.org/archive/biz/2020/2020-05-10/101851316789194431887304152234.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>육이은</strong> 변호사
                    </p>
                    <p className="intro line2">
                      수원지방법원 바로 앞에 법률사무소 이은으로 개업하였습니다.
                      <br />
                      맡은 사건 하나하나 늘 최선을 다해 좋은 결과를 내도록
                      노력하겠습니다.
                    </p>
                    <dl className="office">
                      <dt>변호사육이은법률사무소</dt>
                      <dd>경기 수원시 영통구 광교중앙로248번길 101 (하동)</dd>
                      <dd>031-548-1788</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={1}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="김세찬 변호사 사진"
                        src="/pimg/profile/2022/2022-02-28/001/20220228132723299rr3hynth.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap over">
                      <ul className="keyword">
                        <li>인천</li>
                        <li>부천</li>
                        <li>민사</li>
                        <li>형사</li>
                        <li>이혼</li>
                      </ul>
                    </div>
                    <p className="name">
                      <strong>김세찬</strong> 변호사
                    </p>
                    <p className="intro line2">
                      안녕하세요. 법률사무소 제언 김세찬 변호사입니다.
                      <br />
                      의뢰인의 권익을 위하여, 꼼꼼하게 살피겠습니다.
                    </p>
                    <dl className="office">
                      <dt>법률사무소 제언</dt>
                      <dd>인천 미추홀구 소성로185번길 17 (학익동, 동원빌딩)</dd>
                      <dd>032-862-0162</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={2}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="김평우 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/www_filedata/mem_photo/KO_MEMBER_2014113172626_1.JPG"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>김평우</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사김평우법률사무소</dt>
                      <dd>서울 강남구 삼성동 141-36</dd>
                      <dd>3429-0151-2</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={3}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박성현 변호사 사진"
                        src="/pub/img/profile-man-default.png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박성현</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 헌율</dt>
                      <dd>제주 제주시 구남로7길 33-2, 3층</dd>
                      <dd />
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={4}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="이주호 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/증명사진(이주호).jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>이주호</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 커넥트</dt>
                      <dd>서울 강남구 테헤란로28길 7, 2층</dd>
                      <dd>02-6203-7701</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={5}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박철 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/KakaoTalk_20220607_162626001.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박철</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인(유한) 민</dt>
                      <dd>광주 동구 지산로63번길 2, 403,404,405,501,502호</dd>
                      <dd>062-229-1472</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={6}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="이진성 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/증명사진(10).png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>이진성</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 현산</dt>
                      <dd>서울 서초구 반포대로24길 82, 2층</dd>
                      <dd>02-591-7490</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={7}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박대현 변호사 사진"
                        src="https://qrtn.koreanbar.org/archive/biz/2022/2022-05-03/31110384023845197514335341296.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박대현</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사박대현법률사무소</dt>
                      <dd>
                        서울 영등포구 여의대로 8 (여의도동, 여의도파크센터)
                      </dd>
                      <dd>02-508-0479</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={8}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="배진한 변호사 사진"
                        src="/pub/img/profile-man-default.png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>배진한</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사배진한법률사무소</dt>
                      <dd>서울 서초구 서초중앙로</dd>
                      <dd>3476-0006</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={9}
              className="slick-slide"
              tabIndex={-1}
              aria-hidden="true"
              style={{ outline: "none" }}
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="최정희 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/최정희 증명 사진.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap over">
                      <ul className="keyword">
                        <li>부동산,건설</li>
                        <li>이혼,상속</li>
                        <li>손해배상,위자료</li>
                        <li>매매,임대차</li>
                        <li>계약금,권리금</li>
                      </ul>
                    </div>
                    <p className="name">
                      <strong>최정희</strong> 변호사
                    </p>
                    <p className="intro line2">
                      광주 부동산전문변호사, 가사법(이혼, 상속)전문변호사,
                      계약금, 권리금, 부동산매매, 임대차, 토지인도, 소유권,
                      취득시효, 경계분쟁, 공유물분할, 공사대금, 건설하자
                      손해배상
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 가현</dt>
                      <dd>광주 동구 지산로85번길 11-9</dd>
                      <dd>062-236-0222</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={10}
              tabIndex={-1}
              className="slick-slide slick-center slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="육이은 변호사 사진"
                        src="https://qrtn.koreanbar.org/archive/biz/2020/2020-05-10/101851316789194431887304152234.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>육이은</strong> 변호사
                    </p>
                    <p className="intro line2">
                      수원지방법원 바로 앞에 법률사무소 이은으로 개업하였습니다.
                      <br />
                      맡은 사건 하나하나 늘 최선을 다해 좋은 결과를 내도록
                      노력하겠습니다.
                    </p>
                    <dl className="office">
                      <dt>변호사육이은법률사무소</dt>
                      <dd>경기 수원시 영통구 광교중앙로248번길 101 (하동)</dd>
                      <dd>031-548-1788</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={11}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="김세찬 변호사 사진"
                        src="/pimg/profile/2022/2022-02-28/001/20220228132723299rr3hynth.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap over">
                      <ul className="keyword">
                        <li>인천</li>
                        <li>부천</li>
                        <li>민사</li>
                        <li>형사</li>
                        <li>이혼</li>
                      </ul>
                    </div>
                    <p className="name">
                      <strong>김세찬</strong> 변호사
                    </p>
                    <p className="intro line2">
                      안녕하세요. 법률사무소 제언 김세찬 변호사입니다.
                      <br />
                      의뢰인의 권익을 위하여, 꼼꼼하게 살피겠습니다.
                    </p>
                    <dl className="office">
                      <dt>법률사무소 제언</dt>
                      <dd>인천 미추홀구 소성로185번길 17 (학익동, 동원빌딩)</dd>
                      <dd>032-862-0162</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={12}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="김평우 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/www_filedata/mem_photo/KO_MEMBER_2014113172626_1.JPG"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>김평우</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사김평우법률사무소</dt>
                      <dd>서울 강남구 삼성동 141-36</dd>
                      <dd>3429-0151-2</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={13}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박성현 변호사 사진"
                        src="/pub/img/profile-man-default.png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박성현</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 헌율</dt>
                      <dd>제주 제주시 구남로7길 33-2, 3층</dd>
                      <dd />
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={14}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="이주호 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/증명사진(이주호).jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>이주호</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 커넥트</dt>
                      <dd>서울 강남구 테헤란로28길 7, 2층</dd>
                      <dd>02-6203-7701</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={15}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박철 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/KakaoTalk_20220607_162626001.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박철</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인(유한) 민</dt>
                      <dd>광주 동구 지산로63번길 2, 403,404,405,501,502호</dd>
                      <dd>062-229-1472</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={16}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="이진성 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/증명사진(10).png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>이진성</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 현산</dt>
                      <dd>서울 서초구 반포대로24길 82, 2층</dd>
                      <dd>02-591-7490</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={17}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="박대현 변호사 사진"
                        src="https://qrtn.koreanbar.org/archive/biz/2022/2022-05-03/31110384023845197514335341296.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>박대현</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사박대현법률사무소</dt>
                      <dd>
                        서울 영등포구 여의대로 8 (여의도동, 여의도파크센터)
                      </dd>
                      <dd>02-508-0479</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={18}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="배진한 변호사 사진"
                        src="/pub/img/profile-man-default.png"
                      />
                    </figure>
                    <div className="keyword-wrap ">
                      <ul className="keyword" />
                    </div>
                    <p className="name">
                      <strong>배진한</strong> 변호사
                    </p>
                    <p className="intro line2">
                      <br />
                    </p>
                    <dl className="office">
                      <dt>변호사배진한법률사무소</dt>
                      <dd>서울 서초구 서초중앙로</dd>
                      <dd>3476-0006</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
            <div
              data-index={19}
              tabIndex={-1}
              className="slick-slide slick-cloned"
              aria-hidden="true"
            >
              <div>
                <div className="card" style={{ width: 290, minHeight: 410 }}>
                  <a>
                    <figure>
                      <img
                        alt="최정희 변호사 사진"
                        src="https://biz.koreanbar.or.kr/img/img_www/최정희 증명 사진.jpg"
                      />
                    </figure>
                    <div className="keyword-wrap over">
                      <ul className="keyword">
                        <li>부동산,건설</li>
                        <li>이혼,상속</li>
                        <li>손해배상,위자료</li>
                        <li>매매,임대차</li>
                        <li>계약금,권리금</li>
                      </ul>
                    </div>
                    <p className="name">
                      <strong>최정희</strong> 변호사
                    </p>
                    <p className="intro line2">
                      광주 부동산전문변호사, 가사법(이혼, 상속)전문변호사,
                      계약금, 권리금, 부동산매매, 임대차, 토지인도, 소유권,
                      취득시효, 경계분쟁, 공유물분할, 공사대금, 건설하자
                      손해배상
                      <br />
                    </p>
                    <dl className="office">
                      <dt>법무법인 가현</dt>
                      <dd>광주 동구 지산로85번길 11-9</dd>
                      <dd>062-236-0222</dd>
                    </dl>
                    <p className="detail">자세히 보기 </p>
                  </a>
                  <button type="button" className="wish ">
                    찜
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="button light sgl lawyer-more" href="/search">
        더 많은 변호사를 찾아볼까요?
      </a>
    </section>
  );
}

export default LawyersBanner;
