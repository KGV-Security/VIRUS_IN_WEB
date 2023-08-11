import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {Main_Ani} from "../Animations/Main_Ani";
import {LeftAnimation} from "../Animations/LeftAnimation";
import {animateScroll, Link} from "react-scroll";
import TopAnimation from "../Animations/TopAnimation";
import TopReverse from "../Animations/TopReverse";

const Top = styled.div`

  z-index: 9999;
  width: 0.1vw;
  height: 10vh;
  top: 0;
  left: 0;
  height: 10dvh;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  justify-content: space-between;
  position: unset;
  background-color: white;


`

const Main = styled.div`

  position: absolute;
  width: 100vw;
  height: 90vh;
  height: 90dvh;
  justify-content: start;
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  align-items: center;
  text-align: center;

`

const LeftBox = styled.div`

  opacity: 0;
  width: 40vw;
  height: 90vh;
  height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;

`

const RightBox = styled.div`

  opacity: 0;
  width: 60vw;
  height: 90vh;
  height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

`

const Display = styled.div`

  opacity: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;

`

const Logo = styled.div`

  x: default;
  padding-left: 3vw;
  opacity: 0;
  width: 20vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 4rem;
  cursor: pointer;

`

const Menu = styled.div`

  opacity: 0;
  width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;

`

const MenuText = styled.div`

  opacity: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;

`

const Info = styled.div`

  width: fit-content;
  height: 40vh;
  height: 40dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  padding: 30px;
  border-radius: 15px;

`

const DownloadBtn = styled.div`
  
  margin-top: 3vh;
  margin-top: 3dvh;
  display: inline-block;
  text-align: center;
  width: 200px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border: none;
  padding: 3%;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;

  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);


  &:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
`

const WuImage = styled.div`

  background-image: url("https://cdn.pixabay.com/photo/2018/04/03/00/52/mental-health-3285634_1280.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 35vw;
  height: 85vh;

`

export default function MainPage() {


    const topRef = useRef(null);

    useEffect(() => {
        Main_Ani("DP");
        LeftAnimation("Left");

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0, // Top이 전혀 보이지 않을 때 애니메이션 실행
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    // Top이 화면에서 안 보일 때
                    console.log("Top is not visible!");
                    TopAnimation("logo");

                }
            });
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY === 0) {
                // 페이지가 맨 위에 도달했을 때
                console.log("Page reached the top!");
                TopReverse("logo");
            }
        };

        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(handleIntersect, options);
        if (topRef.current) {
            observer.observe(topRef.current);
        }

        return () => {
            if (topRef.current) {
                observer.unobserve(topRef.current);
            }
        };
    }, []);

    useEffect( () => {
        const handlePageRefresh = () => {
            window.scrollTo(0, 0);
        };

        window.addEventListener('beforeunload', handlePageRefresh);

        return () => {
            window.removeEventListener('beforeunload', handlePageRefresh);
        }

    }, []);

    const handleLogoClick = () => {
        animateScroll.scrollToTop({ duration: 500, smooth: true }); // 페이지 맨 위로 부드럽게 스크롤
    };

    return (

        <Display id="DP">

            <Top id="top" ref={topRef}>

                <Logo id="logo" onClick={handleLogoClick}>

                    WordUniverse

                </Logo>

                <Menu id="menu">

                    <Link to="SubPage" smooth={true} duration={500}>
                        <MenuText id="menu1">About</MenuText>
                    </Link>

                    <Link to="DownloadPage" smooth={true} duration={500}>
                        <MenuText id="menu2">Download</MenuText>
                    </Link>

                    <Link to="MorePage" smooth={true} duration={500}>
                        <MenuText id="menu3">More</MenuText>
                    </Link>

                </Menu>

            </Top>

            <Main id="main">

                <LeftBox id="Left">

                    <WuImage/>

                </LeftBox>

                <RightBox id="Right">

                    <Info>


                        WordUniverse is an application <br/>
                        that finds word associations. <br/>
                        Find the things you need when<br/>
                        writing English or choosing a topic.

                        <div>
                            <Link to="DownloadPage" smooth={true} duration={500}>

                                <DownloadBtn>

                                    Download

                                </DownloadBtn>

                            </Link>
                        </div>

                    </Info>

                </RightBox>

            </Main>

        </Display>

    );

}