import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import v1 from '../assets/videos/12.mp4'

// import imgs from "./data";

import styles from "../styles/styles.module.css";

const calcX = (y, ly) =>
    (y - ly - window.innerHeight / 2) / 10;
const calcY = (x, lx) => -(x - lx - window.innerWidth / 2) / 20;



const VideoBox = () => {
    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();
        document.addEventListener("gesturestart", preventDefault);
        document.addEventListener("gesturechange", preventDefault);

        return () => {
            document.removeEventListener("gesturestart", preventDefault);
            document.removeEventListener("gesturechange", preventDefault);
        };
    }, []);

    const domTarget = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: { mass: 5, tension: 350, friction: 40 }
        })
    );
        console.log(calcX())
    useGesture(
        {
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.2
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 })
        },
        { domTarget, eventOptions: { passive: false } }
    );
    return (
        <div className={styles.container}>
            <animated.div
                ref={domTarget}
                className={styles.card}
                style={{
                    transform: "perspective(800px)",
                    x,
                    y,
                    scale: to([scale, zoom], (s, z) => s + z),
                    rotateX,
                    rotateY,
                    rotateZ
                }}
            >
                <animated.div >
                    {/* {imgs.map((img, i) => ( */}
                    <video
                        style={{backgroundSize: 'contain', width:'100%'}}
                        src={v1} autoPlay loop muted>
                    </video>
                    {/* ))} */}
                </animated.div>
            </animated.div>
        </div>
    )
}

export default VideoBox