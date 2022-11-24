import React, { useState, useEffect } from 'react'
import { Container, Flex } from '../styles/globalStyle'
import { HomeContainer } from '../styles/homeContainerStyle'
import v1 from '../assets/videos/12.mp4'
import { VideoContainer } from '../styles/videoContainerStyle'
import VideoBox from './videoBox'
import HomeText from './homeText'


const Home = () => {
    const [globalMousePos, setGlobalMousePos] = useState({});
    const [axis, setAxis] = useState({});

    const handleMouseMove = (event) => {
        // 👇 Get mouse position relative to element
        const localX = ((window.innerWidth / 2) - event.clientX) / 50;
        const localY = ((window.innerHeight / 2) - event.clientY ) / 50;

        setAxis({ x: localX, y: localY });
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            setGlobalMousePos({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            setAxis({x: 0, y : 0});
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
            setAxis({x: 0, y : 0});

            
        };
    }, []);

    return (
        <Flex flexCenter>
            <HomeContainer
                fluid
                // onMouseMove={handleMouseMove}
            >
                <HomeText></HomeText>
                <VideoBox></VideoBox>
                {/* <VideoContainer xAxis = {axis.x} yAxis = {axis.y}>
                </VideoContainer>
                <>{axis.x}</>
                <>{axis.y}</> */}
            </HomeContainer>
        </Flex>
    );
}

export default Home