import React, {useEffect} from "react";
import styled from "styled-components";
import {AiFillWindows} from "react-icons/ai";
import {AiFillApple} from "react-icons/ai";
import {AiFillAndroid} from "react-icons/ai";
import Download_Windows from "../molcules/Download_Windows";
import Download_Mac from "../molcules/Download_Mac";
import Download_Android from "../molcules/Download_Android";
import Download_ios from "../molcules/Download_ios";
import {Main_Ani} from "../Animations/Main_Ani";

const Download = styled.div`

  opacity: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  display: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`

const ForTopSpace = styled.div`

  width: 100vw;
  height: 10vh;
  height: 10dvh;

`

const DownloadBlock = styled.div`

  width: 96vw;
  height: 90vh;
  height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`

const Window = styled.div`

  transition: box-shadow .3s;
  width: 24vw;
  height: 86vh;
  height: 86dvh;
  border-radius: 40px;
  margin: 1vw;
  display: flex;
  align-items: center;
  background-color: #6495ED;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .4);
  }

`

const Mac = styled.div`

  transition: box-shadow .3s;
  width: 24vw;
  height: 86vh;
  height: 86dvh;
  border-radius: 40px;
  margin: 1vw;
  display: flex;
  align-items: center;
  background-color: #CCCCFF;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .4);
  }

`

const Android = styled.div`

  transition: box-shadow .3s;
  width: 24vw;
  height: 86vh;
  height: 86dvh;
  border-radius: 40px;
  margin: 1vw;
  display: flex;
  align-items: center;
  background-color: #40E0D0;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .4);
  }

`

const Ios = styled.div`

  transition: box-shadow .3s;
  width: 24vw;
  height: 86vh;
  height: 86dvh;
  border-radius: 40px;
  margin: 1vw;
  display: flex;
  align-items: center;
  background-color: #9FE2BF;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .4);
  }

`

const OsText = styled.div`

  padding-top: 10%;
  display: flex;
  justify-content: center;
  width: 90%;
  height: 10%;
  font-size: 3rem;
  color: white;
  flex-direction: column;

`

const VersionText = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  width: 90%;
  height: 30%;
  font-size: 2rem;
  color: white;

`

const DownloadBtn = styled.div`

  margin-top: 20vh;
  margin-top: 20dvh;
  display: inline-block;
  text-align: center;
  width: 200px;
  font-size: 1.5rem;
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

  background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);


  &:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
`


export default function DownloadPage() {

    useEffect(() => {
        Download_Windows("Windows");
        Download_Mac("MacOS");
        Download_Android("Android");
        Download_ios("ios");
        Main_Ani("DownloadPage");
    })

    return (

        <Download id="DownloadPage">

            <ForTopSpace/>

            <DownloadBlock>

                <Window>

                    <OsText>

                        For Windows

                    </OsText>

                    <VersionText>

                        This Version for <br/>
                        Windows <br/> <br/> <br/> <br/> <br/> <br/>

                        Version 1.0.0

                    </VersionText>

                    <DownloadBtn id="Windows">

                        Download <AiFillWindows/>

                    </DownloadBtn>

                </Window>

                <Mac>

                    <OsText>

                        For MacOS

                    </OsText>

                    <VersionText>

                        This Version for <br/>
                        MacOS <br/> <br/> <br/> <br/> <br/> <br/>

                        Version 1.0.0

                    </VersionText>

                    <DownloadBtn id="MacOS">

                        Download <AiFillApple/>

                    </DownloadBtn>

                </Mac>

                <Android>

                    <OsText>

                        For Android

                    </OsText>

                    <VersionText>

                        This Version for <br/>
                        Android <br/> <br/> <br/> <br/> <br/> <br/>

                        Version 1.0.0

                    </VersionText>

                    <DownloadBtn id="Android">

                        Download <AiFillAndroid/>

                    </DownloadBtn>

                </Android>

                <Ios>

                    <OsText>

                        For ios

                    </OsText>

                    <VersionText>

                        This Version for <br/>
                        ios <br/> <br/> <br/> <br/> <br/> <br/>

                        Version 1.0.0

                    </VersionText>

                    <DownloadBtn id="ios">

                        Download <AiFillApple/>

                    </DownloadBtn>

                </Ios>

            </DownloadBlock>

        </Download>

    );

}