import { Children } from "react";
import Headertext from "./components/Header/Headertext";
import Header from "./components/Layout/Header";
import Banner from "./components/Main/Banner";
import { url } from "inspector";
import Bannertype2 from "./components/Main/Bannertype2";
import Bannertype3 from "./components/Main/Bannertype3";
import { CiSearch } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SubMenu from "./components/SubMenu/SubMenu";
import SubMenu2 from "./components/SubMenu/SubMenu2";
import SubMenu3 from "./components/SubMenu/SubMenu3";
import Footer from "./components/Footer/Footer";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Bottomimg from "./BottomMenu/Bottomimg";

function App() {
  const gridcss = {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    width: "100%",
    gap: "10px",
    padding: "20px",
  };
  return (
    <div
      className="App"
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Header
        children={
          <>
            <FaApple style={{ fontSize: "25px" }} />

            <Headertext menuTitle="스토어" />
            <Headertext menuTitle="Mac" />
            <Headertext menuTitle="iPad" />
            <Headertext menuTitle="iPhone" />
            <Headertext menuTitle="Watch" />
            <Headertext menuTitle="Vision" />
            <Headertext menuTitle="AirPods" />
            <Headertext menuTitle="TV 및 홈" />
            <Headertext menuTitle="엔터테이먼트" />
            <Headertext menuTitle="액세서리" />
            <Headertext menuTitle="고객지원" />
            <CiSearch style={{ fontSize: "23px" }} />
            <HiOutlineShoppingBag
              style={{ fontSize: "23px", alignItems: "center" }}
            />
          </>
        }
      />
      <Banner
        backgroundImage="https://www.apple.com/kr/home/bv/images/heroes/apple-vision-pro/hero_apple_vision_pro_alt_announce__dvkmwlr7ihiu_largetall.jpg"
        title="Vision Pro"
        subtitle="공간 컴퓨팅의 시대가 이제 여기에."
      />
      <Bannertype2
        backgroundImage="https://www.apple.com/v/home/bv/images/heroes/holiday-2024/hero_holiday_2024__bbs03706zple_large.jpg"
        title="올 선물은 감동."
        subtitle="누가나 받고 싶은 연말연시 선물"
      />
      <Bannertype3
        backgroundImage="https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg"
        title="Vision Pro"
        subtitle="공간 컴퓨팅의 시대가 이제 여기에."
      />
      <div style={gridcss}>
        <SubMenu backgroundImage="https://www.apple.com/kr/home/bv/images/promos/iphone-16/promo_iphone16_avail__cl72dn7xdfv6_small.jpg" />
        <SubMenu2
          fontColor="black"
          button2text="사전주문하기"
          title="iPad mini"
          subtitle="놀라움이 한 손에 쏙."
          sub2title="11월 21일 출시"
          backgroundImage="https://www.apple.com/v/home/bv/images/promos/ipad-mini/promo_ipad_mini__spq4zjcuuaie_small.jpg"
        />
        <SubMenu2
          fontColor="white"
          button2text="가격 보기"
          title="MacBook Pro"
          subtitle="예술의 경지에 오른 스마트함"
          sub2title="출시일 추후 공개"
          backgroundImage="https://www.apple.com/v/home/bv/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_small.jpg"
        />
        <SubMenu2
          fontColor="black"
          button2text="가격 보기"
          title="Mac mini"
          subtitle="사이즈는 줄이고, 파워는 키우고."
          sub2title="출시일 추후 공개"
          backgroundImage="https://www.apple.com/v/home/bv/images/promos/mac-mini/promo_macmini_announce__bwha5fjvaioi_small.jpg"
        />
        <SubMenu2
          fontColor="black"
          button2text="가격 보기"
          title="iMac"
          subtitle="다채||||다능."
          sub2title="출시일 추후 공개"
          backgroundImage="https://www.apple.com/v/home/bv/images/promos/imac/promo_imac_announce__f4qdil7mfmeu_large.jpg"
        />
        <SubMenu3
          fontColor="black"
          button2text=""
          title="iMac"
          subtitle="다채||||다능."
          sub2title="출시일 추후 공개"
          backgroundImage="https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg"
        />
      </div>
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <Bottomimg
              text="SF·살아남으려면,목숨 걸고 지켜야 한다."
              img="https://is1-ssl.mzstatic.com/image/thumb/SSVr2ZxJ3bUc655YFoRy1Q/689x387.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Bottomimg
              text="드라마·우리 안에는 운명을 스스로 바꿀 용기가 있다"
              img="https://is1-ssl.mzstatic.com/image/thumb/hCfBMF1R8mitgipZtRrJIw/689x387.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Bottomimg
              text="SF·살아남으려면,목숨 걸고 지켜야 한다."
              img="https://is1-ssl.mzstatic.com/image/thumb/IrYGXFGNRK9Mt3z4N3LvWQ/689x387.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Bottomimg
              text="드라마·스티븐 스필버그,톰 행크스, 게리 고츠만 제작"
              img="https://is1-ssl.mzstatic.com/image/thumb/PpNA7zp0nJJN23khb-XDUw/689x387.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Bottomimg
              text="어드벤처·어떤 비밀은 결코 묻히지 않는다"
              img="https://is1-ssl.mzstatic.com/image/thumb/xO0BO6SH877VpYQg4t5yjw/689x387.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Bottomimg
              text="범죄·아무 것도 확신하지 마라"
              img="https://is1-ssl.mzstatic.com/image/thumb/c6frrJga7b7z4Pxb0WLHCQ/689x387.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </>

      <Footer />
    </div>
  );
}

export default App;
