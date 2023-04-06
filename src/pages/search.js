import React, { useState } from "react";
import Breadcrumb from "@common/Breadcrumb";
import Layout from "./../components/layout/Layout";
import SearchBar from "../components/banner/SearchBar";

const Search = () => {
  const [search, setSearch] = useState("");
  const [lawyers, setLawyers] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(`/api/lawyers?search=${search}`);
      const data = await res.json();
      setLawyers(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Breadcrumb pageTitle="변호사 찾기" />
      <main className="container lawyer">
        <SearchBar />
        <div className="recommand">
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
        <div className="container lawyer-sort">
          <p>나와 가까운 거리순으로 보기</p>
          <label className="toggle">
            <input type="checkbox" id="" name="" defaultValue="" />
            <span>OnOff</span>
          </label>
        </div>
        <ul className="lawyer-list">
          <li className="card">
            <a>
              <figure>
                <img
                  alt="김용학 변호사 사진"
                  src="/pub/img/profile-man-default.png"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>김용학</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>변호사김용학법률사무소</dt>
                <dd>강원 영월군 영월읍 영흥7리</dd>
                <dd>033-374-­0330∼2</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="임철승 변호사 사진"
                  src="https://biz.koreanbar.or.kr/img/www_filedata/mem_photo/KO_MEMBER_201139144011_1.JPG"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>임철승</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인 정상</dt>
                <dd>경기 수원시 영통구 광교중앙로248번길 7-1, 403호, 404호</dd>
                <dd>031-211-3700</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="김인수 변호사 사진"
                  src="/pub/img/profile-man-default.png"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>김인수</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인(유한) 광장</dt>
                <dd>서울 중구 남대문로 63</dd>
                <dd>772-4000</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="최효종 변호사 사진"
                  src="/pimg/profile/2022/2022-03-04/001/20220304103205830itkkv7l9.png"
                />
              </figure>
              <div className="keyword-wrap over">
                <ul className="keyword">
                  <li>기업회생</li>
                  <li>파산</li>
                  <li>도산법</li>
                  <li>M&amp;A</li>
                  <li>기업법무</li>
                </ul>
              </div>
              <p className="name">
                <strong>최효종</strong> 변호사
              </p>
              <p className="intro line2">
                조선비즈의 2022년 한국의 Best Lawyer 72인에 선정된 변호사입니다.
                <br />
              </p>
              <dl className="office">
                <dt>법무법인 린</dt>
                <dd>
                  서울 서초구 서초중앙로24길 27, 202호, 204호, 325호, 326호,
                  327호, 413호(서초동, G5센트럴프라자)
                </dd>
                <dd>02-3477-8686</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="정지석 변호사 사진"
                  src="https://biz.koreanbar.or.kr/img/www_filedata/mem_photo/KO_MEMBER_2014826164436_1.JPG"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>정지석</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인 남강</dt>
                <dd>서울 서초구 서초대로46길</dd>
                <dd>02-532-4400</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="송상헌 변호사 사진"
                  src="/pimg/profile/2022/2022-03-30/001/202203301029513007jqcttcg.jpg"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>송상헌</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>변호사송상헌법률사무소</dt>
                <dd>서울 서초구 반포대로 26길 70</dd>
                <dd />
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="부종식 변호사 사진"
                  src="/pimg/profile/2022/2022-03-31/001/20220331141202256chsiwwbt.jpg"
                />
              </figure>
              <div className="keyword-wrap over">
                <ul className="keyword">
                  <li>집합건물</li>
                  <li>재건축,재개발</li>
                  <li>부동산</li>
                  <li>법무법인라움</li>
                  <li>서울교대역8번출구</li>
                </ul>
              </div>
              <p className="name">
                <strong>부종식</strong> 변호사
              </p>
              <p className="intro line2">
                소속 : 법무법인 라움 대표변호사, 변리사, 세무사
                <br />
                분야 : 집합건물, 재건축, 재개발, 부동산전문변호사(대한변협인증)
              </p>
              <dl className="office">
                <dt>법무법인 라움</dt>
                <dd>서울 서초구 반포대로30길 81, 16층</dd>
                <dd>3477-7006</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="홍성애 변호사 사진"
                  src="/pub/img/profile-woman-default.png"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>홍성애</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인(유한) 시그니처</dt>
                <dd>부산 연제구 법원로32번길 18, 402호</dd>
                <dd>051-501-0405</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="임태호 변호사 사진"
                  src="/pub/img/profile-man-default.png"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>임태호</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인 에스</dt>
                <dd>서울 서초구 서초대로41길 20, 4층</dd>
                <dd />
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="봉정현 변호사 사진"
                  src="/pimg/profile/2022/2022-03-11/001/20220311104941609mdcqa8xk.jpg"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>봉정현</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>변호사봉정현법률사무소</dt>
                <dd>세종 한누리대로 1952 (반곡동, 반곡타워)</dd>
                <dd>044-865-5588</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="전기연 변호사 사진"
                  src="https://qrtn.koreanbar.org/archive/biz/2019/2019-11-11/11123149451097056888554114734.jpg"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>전기연</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인 명진</dt>
                <dd>서울 서초구 강남대로 479 (반포동, 신논현타워)</dd>
                <dd />
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="이종경 변호사 사진"
                  src="/pimg/profile/2022/2022-03-07/001/20220307103901430bjghb7uz.jpg"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>이종경</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>공증인가 대구고려</dt>
                <dd>대구 수성구 범어동</dd>
                <dd>053-756-­4141~2</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="이범주 변호사 사진"
                  src="/pub/img/profile-man-default.png"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>이범주</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인 조우</dt>
                <dd>인천 남구 학익소로 19, 401호</dd>
                <dd>032-872-6601</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="조영수 변호사 사진"
                  src="/pimg/profile/2022/2022-03-31/001/202203311721123041tlwmebn.jpg"
                />
              </figure>
              <div className="keyword-wrap over">
                <ul className="keyword">
                  <li>형사</li>
                  <li>손해배상</li>
                  <li>이혼상속</li>
                  <li>파산회생</li>
                  <li>민사(부동산,손배등</li>
                </ul>
              </div>
              <p className="name">
                <strong>조영수</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt>법무법인 조율</dt>
                <dd>서울 서초구 서초대로</dd>
                <dd>02-597-9800</dd>
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
          <li className="card">
            <a>
              <figure>
                <img
                  alt="이시언 변호사 사진"
                  src="https://biz.koreanbar.or.kr/img/img_www/이시언님_인터넷용 (2).jpg"
                />
              </figure>
              <div className="keyword-wrap ">
                <ul className="keyword" />
              </div>
              <p className="name">
                <strong>이시언</strong> 변호사
              </p>
              <p className="intro line2">
                <br />
              </p>
              <dl className="office">
                <dt />
                <dd />
                <dd />
              </dl>
              <p className="detail">자세히 보기 </p>
            </a>
            <button type="button" className="wish ">
              찜
            </button>
          </li>
        </ul>
        <button type="button" className="light sgl lawyer-more">
          더 많은 변호사를 보여주세요.
        </button>
        <div />
      </main>
    </Layout>
  );
};

export default Search;
