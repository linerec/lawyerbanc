import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "@common/Breadcrumb";
import Layout from "@components/layout/Layout";
import ReviewList from "@components/reviews/ReviewList";
import MagicGrid from "magic-grid";

const Grid = ({ children }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const magicGrid = new MagicGrid({
      container: gridRef.current,
      static: false,
      items: children.length,
      maxColumns: 2,
      animate: true,
      center: false,
      gutter: 20,
      useMin: true,
    });

    magicGrid.listen();
  }, [children]);

  return (
    <section ref={gridRef} className="lawyer-info">
      {children}
    </section>
  );
};

function LawyerPage({ data }) {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const {
    lawyer,
    offices,
    reviews,
    tags,
    certificates,
    fields,
    educations,
    careers,
    broadcasts,
    articles,
  } = data;

  return (
    <Layout>
      <Breadcrumb pageTitle="변호사 찾기"></Breadcrumb>
      {console.log(JSON.stringify(data, null, 2))}
      <main>
        {lawyer && (
          <div className="container">
            <section className="lawyer-view front">
              <div className="core">
                <div className="photo">
                  <figure>
                    <img
                      alt={`${lawyer.name_ko} 변호사 사진`}
                      src={lawyer.profile_picture_url}
                    />
                  </figure>
                </div>
                <div className="field">
                  <div className="div">
                    <ul>
                      {fields.map((field) => (
                        <li key={field.id} style={{ cursor: "pointer" }}>
                          {field.name_kor}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="name">
                    <span>
                      <strong>{lawyer.name_ko}</strong> 변호사
                    </span>
                    <button type="button" className="wish ">
                      찜
                    </button>
                  </p>
                  <div className="keyword">
                    <ul>
                      {tags.map((tag) => (
                        <li key={tag.name_en} style={{ cursor: "pointer" }}>
                          {tag.name_ko}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sns">
                <div className="social" />
                <div className="kakao" />
              </div>
            </section>

            <section className="lawyer-intro">
              <div
                dangerouslySetInnerHTML={{ __html: data.lawyer.introduction }}
              />
            </section>
            <Grid>
              <div className="card">
                <h2>
                  <span>기본 정보</span>
                </h2>
                <ul>
                  <li>
                    <dl>
                      <dt>
                        <span className="label">성명</span>
                      </dt>
                      <dd>
                        <p>
                          {lawyer.name_ko && (
                            <span className="ko">{lawyer.name_ko}</span>
                          )}
                          {lawyer.name_ch && (
                            <span className="cn">{lawyer.name_ch}</span>
                          )}
                          {lawyer.name_en && (
                            <span className="en">{lawyer.name_en}</span>
                          )}
                        </p>
                      </dd>
                    </dl>
                  </li>
                  {lawyer.email && (
                    <li className="half">
                      <dl>
                        <dt>
                          <span className="label">이메일주소</span>
                        </dt>
                        <dd>
                          <p>{lawyer.email}</p>
                        </dd>
                      </dl>
                    </li>
                  )}
                  {lawyer.phone_number && (
                    <li className="half">
                      <dl>
                        <dt>
                          <span className="label">전화번호</span>
                        </dt>
                        <dd>
                          <p>{lawyer.phone_number}</p>
                        </dd>
                      </dl>
                    </li>
                  )}
                  {lawyer.mobile_number && (
                    <li className="half">
                      <dl>
                        <dt>
                          <span className="label">휴대폰</span>
                        </dt>
                        <dd>
                          <p>{lawyer.mobile_number}</p>
                        </dd>
                      </dl>
                    </li>
                  )}
                  {lawyer.fax_number && (
                    <li className="half">
                      <dl>
                        <dt>
                          <span className="label">팩스번호</span>
                        </dt>
                        <dd>
                          <p>{lawyer.fax_number}</p>
                        </dd>
                      </dl>
                    </li>
                  )}
                  {lawyer.status && (
                    <li className="half">
                      <dl>
                        <dt>
                          <span className="label">상태</span>
                        </dt>
                        <dd>
                          <p>{lawyer.status_name}</p>
                        </dd>
                      </dl>
                    </li>
                  )}
                </ul>
              </div>
              {offices.map((office) => (
                <div className="card">
                  <h2>
                    <span>사무실 정보</span>
                  </h2>
                  <ul>
                    <li className="">
                      <dl>
                        <dt>
                          <span className="label">사무실 주소</span>
                          <button className="map-view">지도보기</button>
                        </dt>
                        <dd>
                          <p>{office.address}</p>
                        </dd>
                      </dl>
                    </li>
                    <li className="">
                      <dl>
                        <dt>
                          <span className="label">전화번호</span>
                        </dt>
                        <dd>
                          <p>{office.phone}</p>
                        </dd>
                      </dl>
                    </li>
                    <li className="">
                      <dl>
                        <dt>
                          <span className="label">팩스번호</span>
                        </dt>
                        <dd>
                          <p>{office.fax}</p>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              ))}
              {educations && (
                <div className="card">
                  <h2>
                    <span>학력</span>
                  </h2>
                  <ul>
                    {educations.map((education) => (
                      <li>
                        <dl>
                          <dt>
                            <p>
                              <span>[{education.school_type}]</span>{" "}
                              <span>{education.school_name}</span> <span />{" "}
                              <span>{education.school_status}</span>
                            </p>
                          </dt>
                          <dd>
                            <span className="sub">
                              {new Date(
                                education.enrollment_date
                              ).toLocaleDateString()}{" "}
                              ~{" "}
                              {new Date(
                                education.graduation_date
                              ).toLocaleDateString()}
                            </span>
                            <span className="sub" />
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {careers && careers.length > 0 && (
                <div className="card">
                  <h2>
                    <span>법조경력</span>
                  </h2>
                  <ul>
                    {careers.map((career) => (
                      <li key={career.id}>
                        <dl>
                          <dt>
                            <p>
                              <span>{career.law_firm_name}</span>{" "}
                              <span>[{career.position}]</span>
                            </p>
                          </dt>
                          <dd>
                            <span className="sub">
                              {new Date(career.start_year).toLocaleDateString()}{" "}
                              ~{" "}
                              {career.end_year
                                ? new Date(career.end_year).toLocaleDateString()
                                : "현재"}
                            </span>
                            <span className="sub" />
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {certificates && certificates.length > 0 && (
                <div className="card">
                  <h2>
                    <span>기타경력</span>
                  </h2>
                  <ul>
                    {certificates.map((certificate) => (
                      <li>
                        <dl>
                          <dt>
                            <p>
                              <span>{certificate.certificate_name}</span>{" "}
                              <span>({certificate.issuing_organization})</span>
                            </p>
                          </dt>
                          <dd>
                            <span className="sub">2015-03-01 ~ 2018-02-28</span>
                            <span className="sub" />
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {broadcasts && broadcasts.length > 0 && (
                <div className="card">
                  <h2>
                    <span>방송</span>
                  </h2>
                  <ul>
                    {broadcasts.map((broadcast) => (
                      <li key={broadcast.id}>
                        <dl>
                          <dt>
                            <p>{broadcast.program_name}</p>
                          </dt>
                          <dd>
                            <span className="sub">
                              {broadcast.broadcast_date}
                            </span>
                            <span className="sub"> - </span>
                            <a href={broadcast.broadcast_url} target="_blank">
                              방송보기
                            </a>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {articles && articles.length > 0 && (
                <div className="card">
                  <h2>
                    <span>주요기사</span>
                  </h2>
                  <ul>
                    {articles.map((article) => (
                      <li key={article.id}>
                        <dl>
                          <dt>
                            <p>{article.title}</p>
                          </dt>
                          <dd>
                            <span className="sub">{article.date}</span>
                            <span className="sub"> - </span>
                            <a href={article.article_url} target="_blank">
                              기사원문보기
                            </a>
                          </dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="card">
                <h2>
                  <span>기타 자격</span>
                </h2>
                <ul>
                  <li>
                    <dl>
                      <dt>
                        <p>변리사</p>
                      </dt>
                      <dd>
                        <span className="sub">특허청 - 2011-04-20</span>
                        <span className="sub" />
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>
                        <p>세무사</p>
                      </dt>
                      <dd>
                        <span className="sub">기획재정부 - 2013-12-18</span>
                        <span className="sub" />
                      </dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </Grid>

            <ReviewList lawyerId={id} />
          </div>
        )}
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`${process.env.API_URL}/get-lawyer/${id}`);
    const data = await res.json();

    return {
      props: { data, status: "ok" },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
        status: "error",
        message: error.message,
      },
    };
  }
}

export default LawyerPage;
