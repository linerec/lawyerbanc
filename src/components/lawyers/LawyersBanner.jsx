import React, { useState, useEffect } from "react";
import LawyersCarousel from "./LawyersCarousel";
import SearchBar from "../banner/SearchBar";

function LawyersBanner() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      id: 1,
      name_ko: "김영수",
      position: "스윙 코치",
      keywords: ["스윙", "코치", "레슨", "골프"],
      profile_picture_url: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "저는 골프 초보자부터 전문가까지 모두에게 효과적인 스윙 방법을 가르치고 있습니다. 골프를 즐기는 모든 이들이 성공적인 라운드를 즐길 수 있도록 최선을 다하겠습니다.",
      office_name: "Kim's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 2,
      name_ko: "박태환",
      position: "골프 강사",
      keywords: ["골프", "강사", "레슨", "기초"],
      profile_picture_url: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "골프를 처음 접하는 분들을 위해 기초부터 꼼꼼하게 가르치고 있습니다. 누구나 쉽게 따라할 수 있는 강의를 제공하여, 골프의 매력을 느끼며 성장할 수 있도록 돕겠습니다.",
      office_name: "Park's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 3,
      name_ko: "이선영",
      position: "골프 코치",
      keywords: ["골프", "코치", "레슨", "실력 향상"],
      profile_picture_url: `https://randomuser.me/api/portraits/women/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "골프 기술을 개선하고 싶은 분들에게 적합한 레슨을 제공하고 있습니다. 맞춤형 코칭과 다양한 연습법을 통해 선수들이 더 나은 실력을 갖출 수 있도록 돕겠습니다.",
      office_name: "Lee's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 4,
      name_ko: "홍길동",
      position: "골프 강사",
      keywords: ["골프", "강사", "레슨", "전문가"],
      profile_picture_url: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "골프를 좋아하는 분들에게 기초부터 전문적인 기술까지 폭넓게 가르치고 있습니다. 학생들이 자신감을 가지고 라운드에 나갈 수 있도록 지도하며, 더 나은 골퍼가 될 수 있도록 돕겠습니다.",
      office_name: "Hong's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 5,
      name_ko: "이수진",
      position: "골프 프로",
      keywords: ["골프", "프로", "대회", "챔피언"],
      profile_picture_url: `https://randomuser.me/api/portraits/women/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "프로 골퍼로써 다양한 대회에서 경험을 쌓았으며, 그 경험을 바탕으로 학생들에게 유익한 레슨을 제공하고 있습니다. 모든 학생들이 대회에서 빛나는 챔피언이 될 수 있도록 지도하겠습니다.",
      office_name: "Lee's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 6,
      name_ko: "최진호",
      position: "골프 강사",
      keywords: ["골프", "강사", "레슨", "실력 향상"],
      profile_picture_url: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "골프를 좋아하는 분들에게 실력 향상에 도움이 되는 강의를 제공하고 있습니다. 기본기를 탄탄하게 다지는 것부터 전문 기술까지 학생들의 목표에 맞게 지도하여, 더 나은 골퍼가 되도록 돕겠습니다.",
      office_name: "Choi's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 7,
      name_ko: "장미나",
      position: "골프 코치",
      keywords: ["골프", "코치", "레슨", "신체 교정"],
      profile_picture_url: `https://randomuser.me/api/portraits/women/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "골프를 즐기는 모든 분들이 불편없이 즐길 수 있도록,학생들의 신체 교정에 집중하고 있습니다. 제대로 된 자세를 유지하면서 스윙을 하면 더 나은 결과를 얻을 수 있으며, 그것이 학생들이 즐거운 골프 라운드를 즐길 수 있는 길입니다.",
      office_name: "Jang's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 8,
      name_ko: "이상호",
      position: "골프 프로",
      keywords: ["골프", "프로", "대회", "경험"],
      profile_picture_url: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "다양한 대회에서 경험을 쌓은 골프 프로입니다. 그 경험을 바탕으로, 학생들의 레벨에 맞게 강의를 제공하여 실력 향상에 도움이 되도록 돕겠습니다.",
      office_name: "Lee's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 9,
      name_ko: "최승훈",
      position: "골프 강사",
      keywords: ["골프", "강사", "레슨", "기초"],
      profile_picture_url: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "골프 초보자를 위한 기초 강의부터 전문 기술까지 다양한 레슨을 제공하고 있습니다. 학생들이 자신감을 가지고 골프를 즐길 수 있도록 지도하겠습니다.",
      office_name: "Choi's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
    {
      id: 10,
      name_ko: "박태준",
      position: "골프 코치",
      keywords: ["골프", "코치", "레슨", "집중력"],
      profile_picture_url: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 99
      )}.jpg`,
      introduction:
        "집중력은 골프에서 가장 중요한 요소 중 하나입니다. 학생들이 집중력을 높이고 더 나은 스윙을 할 수 있도록, 전문 코칭을 제공하겠습니다.",
      office_name: "Park's Golf Academy",
      office_address: "New Jersey, USA",
      office_phone: "+1-123-456-7890",
    },
  ];

  return (
    <section className="home lawyer">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="recommand home">
        <button type="button">GolfBanc</button>
        <button type="button">코스</button>
        <button type="button">여행</button>
        <button type="button">뉴스</button>
        <button type="button">골프지도</button>
        <button type="button">골프커뮤니티</button>
        <button type="button">스윙</button>
        <button type="button">골프장비</button>
        <button type="button">골프프로</button>
      </div>
      <h1 className="container cnt-head flex">
        <p className="head">
          <span className="rb">
            <strong className="color">골프뱅크</strong>에서&nbsp;
          </span>
          <span className="rb">
            <strong>다양한 분야</strong>의 실력있는 골프전문가를 찾으세요.
          </span>
        </p>
      </h1>

      <LawyersCarousel items={items} />

      <a className="button light sgl lawyer-more" href="/search">
        더 많은 전문가를 찾아보세요
      </a>
    </section>
  );
}

export default LawyersBanner;
