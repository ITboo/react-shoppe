import { useEffect, useState } from "react";
import "./style/Shop.css";
import CardList from "../components/CardList";
const Shop = () => {
  const [expiryTime, setExpiryTime] = useState("31 dec 2024 00:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  }, []);

  return (
    <section>
      <div className="christmas">
        <h1>Great Christmas Sale!</h1>
        <p>Choose the best gifts for your beloved</p>
        <div className="countdown">
          <div className="countdown__item"><span>DAYS</span><span>{countdownTime.countdownDays}</span></div>
          <div className="countdown__item"><span>HOURS</span><span>{countdownTime.countdownHours}</span></div>
          <div className="countdown__item">
            <span>MINUTES</span><span>{countdownTime.countdownMinutes}</span>
          </div>
          <div className="countdown__item">
            <span>SECONDS</span><span>{countdownTime.countdownSeconds}</span>
          </div>
        </div>
      </div>
      <CardList/>
    </section>
  );
};

export default Shop;
