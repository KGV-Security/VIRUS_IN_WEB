import React, {useEffect} from "react";
import styled from "styled-components";
import {Main_Ani} from "../Animations/Main_Ani";

const SDisplay = styled.div`

  opacity: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const About = styled.div`

  width: 96vw;
  height: 43vh;
  height: 43dvh;
  display: flex;

`

const AboutImg = styled.div`

  width: 48vw;
  height: 43vh;
  height: 43dvh;
  background-image: url("https://cdn.pixabay.com/photo/2019/08/03/16/52/education-4382169_1280.jpg");
  border-radius: 70px;
  background-size: cover;
  background-repeat: no-repeat;

`

const AboutTxt = styled.div`

  width: 48vw;
  height: 43vh;
  height: 43dvh;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


`

const ForTopSpace = styled.div`

  width: 100vw;
  height: 10vh;
  height: 10dvh;

`

const App = styled.div`

  width: 96vw;
  height: 43vh;
  height: 43dvh;
  display: flex;

`


const AppImg = styled.div`

  width: 48vw;
  height: 43vh;
  height: 43dvh;
  background-image: url("https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_1280.jpg");
  border-radius: 70px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

`

const AppTxt = styled.div`

  width: 48vw;
  height: 43vh;
  height: 43dvh;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


`

export default function SubPage() {

    useEffect( () => {

        Main_Ani("SubPAge");

    })

    return (

        <SDisplay id="SubPage">

            <ForTopSpace/>

            <About>

                <AboutTxt>

                    You can find words <br/>
                    related to the topic you have chosen

                </AboutTxt>

                <AboutImg/>



            </About>

            <App>

                <AppImg/>

                <AppTxt>

                    Search more easily with a comfortable search engine

                </AppTxt>

            </App>

        </SDisplay>

    );

}

