import { CSSProperties } from "react";

const Footer = () => {
  const css: CSSProperties = {
    width: "100vw",
    padding: "30px",
  };
  const fontcss: CSSProperties = {
    maxWidth: "1024px",
    display: "flex",
    zIndex: 9999,
    margin: "0 auto",
    color: "#6c6c6d",
    fontSize: "11px",
    marginBottom: "20px",
  };
  const footermenu: CSSProperties = {
    maxWidth: "1024px",

    margin: "0 auto",
    fontSize: "11px",
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    width: "100%",
    gap: "40px",
    padding: "0px 0px 40px 0px",
  };
  return (
    <footer style={{ backgroundColor: "#f5f5f7" }}>
      <div style={css}>
        <p style={fontcss}>
          1. Apple Intelligence는 Siri 및 기기 언어를 미국 영어로 설정한 iPhone
          16 전 모델, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini(A17 Pro 모델)
          그리고 M1 이후 iPad 및 Mac 모델에서 베타로 사용할 수 있으며, iOS 18,
          iPadOS 18, macOS Sequoia 업데이트를 통해 제공됩니다.
          영어(오스트레일리아, 캐나다, 아일랜드, 뉴질랜드, 남아프리카 공화국,
          영국) 언어 지원은 올 12월 제공됩니다. 내년까지 계속해서 기능, 플랫폼
          및 지원 언어를 추가해 나갈 예정입니다. 추가 예정인 지원 언어는 한국어,
          중국어, 영어(인도, 싱가포르), 프랑스어, 독일어, 이탈리아어, 일본어,
          포르투갈어, 스페인어, 베트남어 등입니다. 2. ₩930,000은 iPhone 15 Pro
          Max 1TB 모델의 보상 판매 금액으로, 보상 판매 서비스는 Apple의 보상
          판매 파트너사를 통해 제공됩니다. 보상 판매 견적액은 예상 금액일
          뿐이며, 실제 보상 판매 금액이 예상 금액보다 낮을 수도 있습니다. 보상
          판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 모델, 그리고 보상
          판매 대상이 되는 제품이 최초 판매된 국가/지역에 따라 달라집니다. 일부
          기기는 보상 판매 대상이 아닙니다. 크레딧 또는 Apple Store Gift Card로
          보상 판매를 받으려면 성인 연령 이상이어야 합니다. 새 Apple 기기 구매
          시, 현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다. 최종 확정
          금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한
          기기의 설명과 일치하는지 비교 검수 후 정해집니다. 매장에서 보상 판매를
          받으려면 사진이 부착된 정부 발행의 유효한 신분증이 필요합니다. 일부
          매장에서는 본 프로그램을 이용할 수 없습니다. 온라인과 오프라인 매장의
          보상 판매 금액은 차이가 있을 수 있습니다. 일부 매장에서는 추가 요구
          사항이 있을 수 있습니다. Apple의 보상 판매 파트너사는 어떤 보상 판매도
          거래를 거부하거나, 취소하거나 보상 판매 기기 및 그 수량을 제한할
          권리를 보유합니다. 더 자세한 내용은 적용 대상 기기에 대한 보상 판매 및
          재활용 서비스를 제공하는 Apple의 보상 판매 파트너사에서 확인할 수
          있습니다. Apple 보상 판매 파트너사의 약관이 추가로 적용될 수 있습니다.
          Apple TV+ 이용을 위해서는 구독이 필요합니다. 기능은 변경될 수
          있습니다. 일부 기능, 애플리케이션 및 서비스를 이용할 수 없는 국가나
          언어도 있습니다.
        </p>
        <div
          style={{
            width: "1024px",
            height: "1px",
            backgroundColor: "grey",
            margin: "0 auto",
          }}
        ></div>
      </div>
      <div style={footermenu}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: 1000 }}>쇼핑 및 알아보기</p>
          <p>스토어</p>
          <p>MAC</p>
          <p>iPad</p>
          <p>iPhone</p>
          <p>Vision</p>
          <p>AirPords</p>
          <p>TV 및 홈</p>
          <p>AirTag</p>
          <p>액세서리</p>
          <p style={{ marginTop: "30px", fontSize: "13px", fontWeight: 1000 }}>
            Apple 지갑
          </p>
          <p>지갑</p>
          <p>Apple Pay</p>
        </div>

        <div>
          <p style={{ fontSize: "13px", fontWeight: 1000 }}>계정</p>
          <p>Apple 계정 관리</p>
          <p>Apple Store 계정</p>
          <p>iCloud.com</p>

          <p style={{ marginTop: "30px", fontSize: "13px", fontWeight: 1000 }}>
            엔터테인먼트
          </p>
          <p>Apple One</p>
          <p>Apple TV+</p>
          <p>Apple Music</p>
          <p>Apple Arcade</p>
          <p>Apple Podcasts</p>
          <p>Apple Books</p>
          <p>App Store</p>
        </div>

        <div>
          <p style={{ fontSize: "13px", fontWeight: 1000 }}>Apple Store</p>
          <p>매장 찾기</p>
          <p>Genius Bar</p>
          <p>Today at Apple</p>
          <p>그룹 예약</p>
          <p>Apple 캠프</p>
          <p>Apple Store 앱</p>
          <p>인증 리퍼비쉬 제품</p>
          <p>Apple Trade In</p>
          <p>할부 방식</p>
          <p>주문 상태</p>
          <p>쇼핑 도움말</p>
        </div>

        <div>
          <p style={{ fontSize: "13px", fontWeight: 1000 }}>비즈니스</p>
          <p>Apple과 비즈니스</p>
          <p>비즈니스를 위한 제품 쇼핑하기</p>
          <p style={{ marginTop: "30px", fontSize: "13px", fontWeight: 1000 }}>
            교육
          </p>
          <p>Apple과 교육</p>
          <p>초중고용 제품 쇼핑하기</p>
          <p>대학 생활을 위한 제품 쇼핑하기</p>
        </div>

        <div>
          <p style={{ fontSize: "13px", fontWeight: 1000 }}>Apple의 가치관</p>
          <p>손쉬운 사용</p>
          <p>교육</p>
          <p>환경</p>
          <p>개인정보 보호</p>
          <p>공급망</p>

          <p style={{ marginTop: "30px", fontSize: "13px", fontWeight: 1000 }}>
            Apple 정보
          </p>
          <p>Newsroom</p>
          <p>Apple 리더십</p>
          <p>채용 안내</p>
          <p>윤리 및 규정 준수</p>
          <p>이벤트</p>
          <p>일자리 창출</p>
          <p>Apple 연락처</p>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1024px",

          margin: "0 auto",
          fontSize: "12px",
          color: "grey",
        }}
      >
        <p>
          다양한 쇼핑 방법:
          <span style={{ color: "blue", textDecoration: "underline" }}>
            Apple Store를 방문
          </span>
          하거나,
          <span style={{ color: "blue", textDecoration: "underline" }}>
            리셀러
          </span>
          를 찾아보거나, 080-330-8877번으로 전화하세요.
        </p>
        <div
          style={{
            width: "1024px",
            height: "1px",
            backgroundColor: "grey",
            margin: "0 auto",
            marginTop: "25px",
          }}
        ></div>
        <div
          style={{ display: "flex", gap: "60px", padding: "20px 0px 20px 0px" }}
        >
          <span>Copyright © 2024 Apple Inc. 모든 권리 보유.</span>
          <span style={{ fontWeight: 600 }}>
            개인정보 | 처리방침 웹 사이트 이용 약관 | 판매 및 환불 | 법적 고지 |
            사이트 맵
          </span>
        </div>
        <p style={{ fontSize: "10px" }}>
          애플코리아 유한회사 | 대표이사: Peter R. Denwood | 주소: 서울특별시
          강남구 영동대로 517 | 전화: 080-333-4000 |
          https://support.apple.com/ko-kr | 사업자등록번호: 120-81-84429 |
        </p>
        <p style={{ fontSize: "10px" }}>
          통신판매업신고번호: 제2011-서울강남-00810호 | 호스팅 서비스 제공:
          Apple Inc. | 사업자정보
        </p>
      </div>
    </footer>
  );
};

export default Footer;
