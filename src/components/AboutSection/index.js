import React from "react";
import { Container, Row, Col } from "react-grid-system";
import {
  AboutContainer,
  Left,
  Wrapper,
  BtnWrapper,
  NavBtnLink,
  Right,
  Img,
  InnerWrapper,
} from "./AboutElement";
import SocialButton from "./SocialButton";

import bg from "../../images/background-about.png";
import img from "../../images/homepict4.png";
import BadgeBanner from "../FloatingBanner/BadgeBanner";

const AboutSection = () => {
  return (
    <>
      <AboutContainer bg={bg} id="about">
        <Wrapper>
          <Container>
            <Row>
              <Col xl={7} md={7} xs={12} sm={12}>
                <Left>
                  <h1>Mengenal Pak Danang</h1>
                  <br />
                  <p>
                    Pak Danang adalah seorang wakil rakyat yang sudah memiliki
                    rekam jejak yang cukup lama berkecimpung dalam dunia
                    legislatif. Seorang legislator yang memiliki integritas,
                    profesionalisme, dan dekat dengan rakyat
                  </p>
                  <p>
                    Saat ini, Pak Dadang duduk sebagai Ketua Komisi B DPRD
                    Provinsi Daerah Istimewa Yogyakarta, dan juga sebagai Ketua
                    Fraksi Partai Gerindra DPRD DIY. Wah keren bukan!
                  </p>
                  <BtnWrapper>
                    <NavBtnLink href="/guest/forum">
                      Sampaikan Aspirasimu ke Pak Danang
                    </NavBtnLink>
                  </BtnWrapper>
                  <h2>Yuk intip aktifitas Pak Danang</h2>
                  <br />
                  <SocialButton />
                </Left>
              </Col>
              <Col xl={5} md={5} xs={12} sm={12}>
                <InnerWrapper>
                  <Right>
                    <Img src={img} alt="Pak Danang" />
                    <h2>Danang Wahyu Broto SE.,M.Si</h2>
                    <h3>Ketua Komisi B DPRD Provinsi DIY</h3>
                    <h3>Fraksi Partai Gerindra</h3>
                  </Right>
                </InnerWrapper>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <BadgeBanner />
      </AboutContainer>
    </>
  );
};

export default AboutSection;
