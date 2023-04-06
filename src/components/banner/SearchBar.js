import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

function toggleAdvanced() {
  const searchFieldset = document.querySelector(".lawyer-search");
  const advancedDiv = searchFieldset.querySelector(".advanced");

  // 'on' 클래스 추가
  searchFieldset.classList.toggle("on");

  // 스타일 속성 변경
  advancedDiv.style.display =
    advancedDiv.style.display === "block" ? "none" : "block";
}

const SearchBar = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState(null);
  const [childCategories, setChildCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/get-categories");
      setCategories(response.data);
    };
    fetchData();
  }, []);

  // states 데이터 가져오기
  useEffect(() => {
    axios.get("/api/get-all-states").then((response) => {
      setStates(response.data);
    });
  }, []);

  // 선택된 주에 해당하는 cities 데이터 가져오기
  useEffect(() => {
    if (selectedState !== null) {
      axios
        .get(`/api/get-cities?state=${selectedState.value}`)
        .then((response) => {
          setCities(response.data);
        });
    } else {
      setCities([]);
    }
  }, [selectedState]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/api/get-categories?parent_id=${parentCategory}`
      );
      setChildCategories(response.data);
    };
    if (parentCategory) {
      fetchData();
    } else {
      setChildCategories([]);
    }
  }, [parentCategory]);
  const stateOptions = states.map((state) => ({
    label: state.state_name,
    value: state.state_code,
  }));

  const cityOptions = cities.map((city) => ({
    label: city.city_name,
    value: city.zip_code,
  }));

  const parentCategoryOptions = categories.map((category) => ({
    label: category.name_kor,
    value: category.id,
  }));

  const childCategoryOptions = Array.isArray(childCategories)
    ? childCategories.map((childCategory) => ({
        label: childCategory.name_kor,
        value: childCategory.id,
      }))
    : [];

  const handleSearch = () => {
    // 여기서 검색 기능을 구현하세요.
  };

  const handleAdvancedSearch = (e) => {
    e.preventDefault();
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <fieldset className="lawyer-search">
      <div className="search-wrap">
        <div className="quick">
          <div style={{ display: "block" }}>
            <input
              name="kword"
              type="text"
              placeholder="지역, 분야, 사례, 변호사 이름을 검색해보세요"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="false"
              autoComplete="off"
              defaultValue=""
            />
          </div>
        </div>
        <div className="advanced" style={{ display: "none" }}>
          <div className="wrap">
            <dl>
              <dt>
                <label className="label">지역</label>
              </dt>
              <dd>
                <div>
                  <Select
                    name="location1"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={stateOptions}
                    value={selectedState}
                    onChange={setSelectedState}
                  />
                </div>
                <div>
                  <Select
                    name="location2"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={cityOptions}
                    value={selectedCity}
                    onChange={setSelectedCity}
                    isDisabled={selectedState == null}
                  />
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <label className="label">분야</label>
              </dt>
              <dd>
                <div>
                  <select name="category1">
                    <option value="">분야를 선택해주세요.</option>
                    <option value="C01">민사</option>
                    <option value="C02">상사</option>
                    <option value="C03">형사</option>
                    <option value="C04">가사</option>
                    <option value="C05">행정 헌법</option>
                    <option value="C06">파산 회생</option>
                    <option value="C07">노동</option>
                    <option value="C08">조세</option>
                    <option value="C09">지적재산</option>
                    <option value="C10">국제</option>
                    <option value="C11">기타</option>
                  </select>
                </div>
                <div>
                  <select name="category2">
                    <option value="">2차 분야</option>
                    <option value="C0101">민사(일반)</option>
                    <option value="C0301">형사(일반)</option>
                    <option value="C0201">상사(일반)</option>
                    <option value="C0102">부동산</option>
                    <option value="C0302">성폭력</option>
                    <option value="C0202">기업 회사</option>
                    <option value="C0303">학교폭력</option>
                    <option value="C0103">건설</option>
                    <option value="C0203">인수 합병</option>
                    <option value="C0204">증권</option>
                    <option value="C0304">군형법</option>
                    <option value="C0104">재개발 · 재건축</option>
                    <option value="C0105">의료</option>
                    <option value="C0205">금융</option>
                    <option value="C0106">손해배상</option>
                    <option value="C0206">보험</option>
                    <option value="C0107">교통사고</option>
                    <option value="C0207">해상</option>
                    <option value="C0108">임대차</option>
                    <option value="C0208">무역</option>
                    <option value="C0109">국가계약</option>
                    <option value="C0209">조선</option>
                    <option value="C0210">중재</option>
                    <option value="C0110">민사집행</option>
                    <option value="C0111">채권추심</option>
                    <option value="C0601">파산 · 회생(일반)</option>
                    <option value="C0602">개인 파산 · 회생</option>
                    <option value="C0701">노동(일반)</option>
                    <option value="C0702">산재</option>
                    <option value="C0801">조세(일반)</option>
                    <option value="C0802">법인세</option>
                    <option value="C0803">관세</option>
                    <option value="C0804">상속 증여세</option>
                    <option value="C0805">국제조세</option>
                    <option value="C0901">지적재산(일반)</option>
                    <option value="C0902">특허</option>
                    <option value="C0903">상표</option>
                    <option value="C0904">저작권</option>
                    <option value="C0905">영업비밀</option>
                    <option value="C0906">엔터테인먼트</option>
                    <option value="C1001">국제관계법(일반)</option>
                    <option value="C1002">국제거래</option>
                    <option value="C1003">국제중재</option>
                    <option value="C1004">이주 비자</option>
                    <option value="C1005">해외투자</option>
                    <option value="C1101">스포츠</option>
                    <option value="C1102">종교</option>
                    <option value="C1103">스타트업</option>
                    <option value="C1104">입법</option>
                    <option value="C1105">IT</option>
                    <option value="C0401">가사(일반)</option>
                    <option value="C0402">상속</option>
                    <option value="C0403">이혼</option>
                    <option value="C0404">소년</option>
                    <option value="C0501">행정(일반)</option>
                    <option value="C0502">공정거래</option>
                    <option value="C0503">방송통신</option>
                    <option value="C0504">헌법재판</option>
                    <option value="C0505">환경</option>
                    <option value="C0506">에너지</option>
                    <option value="C0507">수용 · 보상</option>
                    <option value="C0112">등기 · 경매</option>
                    <option value="C0113">성년후견</option>
                    <option value="C0508">식품 · 의약</option>
                  </select>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="button">
          <div>
            <button id="" name="" type="reset" className="reset">
              초기화
            </button>
            <button id="" name="" type="submit" className="search">
              검색
            </button>
          </div>
          <button
            id=""
            name=""
            type="button"
            className="advanced"
            onClick={toggleAdvanced}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default SearchBar;
