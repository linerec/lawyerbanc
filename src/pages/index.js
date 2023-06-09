import { NextSeo } from "next-seo";
import React, { useEffect, useState } from "react";
import SearchBanner from "../components/banner/SearchBanner";
import Banner1 from "../components/banner/Banner1";
import Home1Blog from "../components/blog/Home1Blog";
import Preloader from "../components/common/Preloader ";
import Footer from "../components/footer/Footer";
import HowItwork1 from "../components/howItWork/HowItwork1";
import CreativeService from "../components/service/CreativeService";
import HomeService from "../components/service/HomeService";
import OfferService from "../components/service/OfferService";
import PopularService from "../components/service/PopularService";
import FeaturesShop from "../components/shop/FeaturesShop";
import Testimonial1 from "../components/testimonial/Testimonial1";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import Header1 from "./../components/header/Header1";
import MapService from "@components/service/MapService";
import Header from "./../components/header/Header";
import LawyersBanner from "./../components/lawyers/LawyersBanner";
import FieldsBanner from "../components/fields/FieldsBanner";

export default function Home({ data }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 300);
  }, []);

  // SEO 데이터 파싱
  const seoData = data;

  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <SearchBanner />
          <LawyersBanner />
          <FieldsBanner />
          <MapService />
          {/* <Banner1 />
          <CreativeService />
          <PopularService />
          <HomeService />
          <FeaturesShop />
          <OfferService />
          <WhyChooseUs />
          <Testimonial1 />
          <HowItwork1 />
          <Home1Blog /> */}
          <Footer />
        </>
      )}
    </>
  );
}
