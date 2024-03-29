import { gsap, Expo } from "gsap/dist/gsap";
import React, { useEffect, useState } from "react";
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

export default function FrontPage() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let target = new Date();
    target.setDate(target.getDate() + 5);

    gsap.from(".firstWord", {
      xPercent: 100,
      duration: 3.0,
      delay: 2.5,
      ease: Expo.easeInOut,
    });
    tl.from(".simp", 1, {
      x: "100",
      opacity: 0,
      stagger: 0.15,
      scale: ".8",
      delay: 3.0,
      ease: Expo.easeInOut,
    });

    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const d = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0);
      setDays(d);

      const h = Math.max(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        0
      );
      setHours(h);

      const m = Math.max(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        0
      );
      setMinutes(m);

      const s = Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        target.setDate(target.getDate() + 5);
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{ height: "70vh" }}
      className="relative flex flex-col items-center justify-end text-center text-white"
    >
      <div>
        <h1 className="text-center text-xl">5 YEAR ANNIVERSARY SALE</h1>
      </div>
      <div className="flex relative justify-center text-center ">
        <div className="flex pt-10    uppercase text-gray-900 sm:opacity-50 text-7xl sm:text-9xl">
          <div className="timer-segment flex-col flex text-center ">
            <span className="time  ">{days}</span>
            <span className="label text-xl sm:text-5xl">Days</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time  ">{hours}</span>
            <span className="label text-xl sm:text-5xl">Hours</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time ">{minutes}</span>
            <span className="label text-xl sm:text-5xl">Minutes</span>
          </div>
          <span className="divider ">:</span>
          <div className="timer-segment flex-col flex text-center">
            <span className="time  text-red-600">{seconds}</span>
            <span className="label text-xl sm:text-5xl">Seconds</span>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          fontSize: "8.3rem",
        }}
        className="text-opening"
      >
        <h1 className="firstWord">
          Elegant <span className="simp">in Their</span>
          <span className="simp"> S</span>
          <span className="simp">i</span>
          <span className="simp">m</span>
          <span className="simp">p</span>
          <span className="simp">l</span>
          <span className="simp">i</span>
          <span className="simp">c</span>
          <span className="simp">i</span>
          <span className="simp">t</span>
          <span className="simp">y</span>
        </h1>
      </div> */}
    </div>
  );
}
