import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import "../styles/homeStyle.css";

const calcX = (y, ly) =>
    (y - ly - window.innerHeight / 2) / 30;
const calcY = (x, lx) => -(x - lx - window.innerWidth / 2) / 30;

const HomeText = () => {
    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();
        document.addEventListener("gesturestart", preventDefault);
        document.addEventListener("gesturechange", preventDefault);

        return () => {
            document.removeEventListener("gesturestart", preventDefault);
            document.removeEventListener("gesturechange", preventDefault);
        };
    }, []);
    const [flip, set] = useState(false)

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
            config: { mass: 20, tension: 350, friction: 40 }
        })
    );


    const words = ['Santosh Ingale', '                ', '                ', '                ','Software Developer']

    const { scroll } = useSpring({
        scroll: (words.length - 1) * 50,
        from: { scroll: 0 },
        // reset: true,
        reverse: flip,
        delay: 6000,
        // config: { mass: 1, tension: 50, friction: 40 },

        onRest: () => set(!flip),
    })

    useGesture(
        {
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.3
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 })
        },
        { domTarget, eventOptions: { passive: false } }
    );
    return (
        <div className="ontainer">
            <h3
                style={{
                    width: '100%', height: 50, fontSize: '3rem', lineHeight: 6.6,
                    fontFamily: 'Roboto Slab serif',

                }}
            >
                I'm
            </h3>
            <animated.div
                ref={domTarget}
                className="card"
                style={{
                    transform: 'perspective(600px)',
                    x,
                    y,
                    scale: to([scale, zoom], (s, z) => s + z),
                    rotateX,
                    rotateY,
                    rotateZ,
                }}>
                <animated.div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '300px',
                        overflow: 'hidden',
                        fontSize: '1.5em',
                        // overflow: 'scroll'
                        margin: '0vw 0'

                    }}
                    scrollTop={scroll}>
                    {words.map((word, i) => (
                        <h3
                            key={`${word}_${i}`}
                            style={{
                                width: '100%', height: 50, fontSize: '3rem', lineHeight: 6.6,
                                fontFamily: 'Roboto Slab serif',

                            }}
                        >

                            {word}
                        </h3>
                    ))}
                </animated.div>
            </animated.div>
        </div>
    )
}

export default HomeText