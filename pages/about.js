import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import OverlayBtn from "@/components/overlaybtn";
import Matter from "matter-js";

const Ball = ({ ball }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: ball.position.y,
        left: ball.position.x,
        width: ball.circleRadius * 2,
        height: ball.circleRadius * 2,
        borderRadius: "50%",
        backgroundColor: ball.render.fillStyle,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    />
  );
};

export default function About() {
  const [isBlank, setIsBlank] = useState(false);
  const [balls, setBalls] = useState([]);
  const engineRef = useRef(null);
  const worldRef = useRef(null);
  const requestRef = useRef();
  const sceneRef = useRef();
  const mouseConstraintRef = useRef(null);
  const isDraggingRef = useRef(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Setup Matter.js
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0.5 },
    });
    const world = engine.world;
    engineRef.current = engine;
    worldRef.current = world;

    // Create walls to contain the balls
    const width = window.innerWidth;
    const height = window.innerHeight;
    const wallOptions = { isStatic: true, render: { visible: false } };

    const ground = Matter.Bodies.rectangle(
      width / 2,
      height + 25,
      width,
      50,
      wallOptions
    );
    const leftWall = Matter.Bodies.rectangle(
      -25,
      height / 2,
      50,
      height,
      wallOptions
    );
    const rightWall = Matter.Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      wallOptions
    );

    Matter.World.add(world, [ground, leftWall, rightWall]);

    // Create a transparent overlay for mouse interactions
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.zIndex = "2";
    overlay.style.pointerEvents = "none";
    document.body.appendChild(overlay);

    const mouse = Matter.Mouse.create(overlay);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    // Only allow dragging of balls
    mouseConstraint.collisionFilter.mask = 0x0001;
    Matter.World.add(world, mouseConstraint);
    mouseConstraintRef.current = mouseConstraint;

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      mouse.position.x = e.clientX;
      mouse.position.y = e.clientY;

      // Enable dragging
      const bodies = Matter.Composite.allBodies(world);
      const isNearBall = bodies.some(
        (body) =>
          body.circleRadius &&
          Matter.Vector.magnitude(
            Matter.Vector.sub({ x: e.clientX, y: e.clientY }, body.position)
          ) <
            body.circleRadius * 1.5
      );

      overlay.style.pointerEvents = isNearBall ? "auto" : "none";
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      Matter.Engine.update(engine, 1000 / 60);
      setBalls(
        Matter.Composite.allBodies(world).filter((body) => body.circleRadius)
      );
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(overlay);
      Matter.Engine.clear(engine);
    };
  }, []);

  const handleClick = () => {
    setIsBlank(true);
    setTimeout(() => {
      setIsBlank(false);
      createBall();
    }, 1000);
  };

  const createBall = () => {
    const colors = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const ball = Matter.Bodies.circle(
      Math.random() * window.innerWidth,
      50,
      20 + Math.random() * 20,
      {
        restitution: 0.9,
        friction: 0.005,
        frictionAir: 0.001,
        render: {
          fillStyle: randomColor,
        },
        collisionFilter: {
          category: 0x0001,
        },
      }
    );

    Matter.World.add(worldRef.current, ball);
  };

  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <main className={isBlank ? styles.blankPage : styles.mainContent}>
          <div className={styles.content}>
            <h2 className={styles.hello}>
              I guess you're here to get to know me 😉
            </h2>
            <div className={styles.ms_char}>
              <Image
                src="/yeti.png"
                alt="yeti"
                width={400}
                height={400}
                className={styles.character}
              />
              <div className={styles.btn}>
                <button className={styles.ball_btn} onClick={handleClick}>
                  Click me!
                </button>
              </div>
            </div>

            <div
              ref={sceneRef}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 1,
                pointerEvents: "none",
                overflow: "hidden",
              }}
            >
              {balls.map((ball, index) => (
                <Ball key={`ball-${index}`} ball={ball} />
              ))}
            </div>

            <div className={styles.content_text}>
              <p className={styles.content_text2}>
                My name is Parnell and I am a UX/UI and Graphic Designer from
                Vancouver (yes, the rainy one)! For me, design is about turning
                complex problems into something simple, creative, and
                meaningful, while telling stories through visuals and
                experiences. I am driven by curiosity and always learning about
                new things.
              </p>
              <p className={styles.content_text2}>
                I am currently a student at the British Columbia Institute of
                Technology studying Digital Design and Development. I am
                currently looking for an internship for 2025.
              </p>
              <p className={styles.content_text3}>My Current Favourites</p>
              <p className={styles.content_text4}>
                When I'm not designing or studying, you will find me training
                martial arts or playing video games. Below, you can see what
                some of my current favourites are:
              </p>
              <div className={styles.obssesed}>
                <OverlayBtn
                  title="Favourite Video Games"
                  items={["Marvel Rivals", "Maplestory", "Age of Empires"]}
                  className={styles.btn}
                />
                <OverlayBtn
                  title="Favourite Movies"
                  items={[
                    "Basic Instinct",
                    "Titanic",
                    "Paddington",
                    "Twilight (don't judge me on this one)",
                  ]}
                  className={styles.btn}
                />
                <OverlayBtn
                  title="Favourite Places to get Food"
                  items={[
                    "Via Tevere Pizzeria",
                    "Ba-Le Deli & Bakery",
                    "Angus T Bakery & Cafe",
                    "Chocho Hotpot",
                  ]}
                />
              </div>
              <p className={styles.spotify}>What I'm Currently Listening To</p>
              <iframe
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  height: "152px",
                  border: "none",
                  marginTop: "20px",
                }}
                src="https://open.spotify.com/embed/track/47No93LxERvV6MtOAmQzHS?utm_source=generator"
                width="100%"
                height="352"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
