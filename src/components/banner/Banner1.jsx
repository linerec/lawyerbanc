import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import SearchBar from "./SearchBar";

function Banner1() {
  const { t } = useTranslation("common");

  return (
    <section className="hero-area">
      <div className="container-fluid">
        <div className="hero-wrapper">
          <div
            className="hero-content wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <span>{t("welcomeMessage")}</span>
            <h1>{t("pageTitle")}</h1>
            <SearchBar />
            <div className="find-service">
              <div className="location-search">
                <div className="location-btn"></div>
              </div>
              <div className="suggest">
                <span>Suggest For You:</span>
                <ul className="suggest-list">
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Beauty &amp; Salon</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>Shifting</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>AC Repair</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/service">
                      <a>WallPainting</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="hero-banner wow animate fadeInRight"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <img
              src="assets/images/home-1/hero-section-right-img.png"
              alt=""
              className="banner"
            />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#category">
          Scroll Down
          <span>
            <i className="bi bi-arrow-right" />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Banner1;
