import { useEffect, useRef, useState } from "react";

const useCountdown = (
  dateTo?: string,
  dateFrom?: string,
  progress?: boolean
) => {
  const [timerDays, setTimerDays] = useState<number | string>("00");
  const [timerHours, setTimerHours] = useState<number | string>("00");
  const [timerMinutes, setTimerMinutes] = useState<number | string>("00");
  const [timerSeconds, setTimerseconds] = useState<number | string>("00");
  const [isExpired, setIsExpired] = useState<boolean>(false);

  let interval = useRef<number | undefined | ReturnType<typeof setInterval>>(
    undefined
  );

  const startTimer = () => {
    if (dateTo && dateFrom) {
      const countDownDate = new Date(<string>dateTo).getTime();
      const now = new Date(<string>dateFrom).getTime();

      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setIsExpired(true);
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerseconds(seconds);
      }
    } else if (progress) {
      const currentDate = new Date().getTime();
      const startDate = new Date(<string>dateFrom).getTime();

      const distance = currentDate - startDate;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setIsExpired(true);
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerseconds(seconds);
      }
    } else {
      const countDownDate = new Date(<string>dateTo).getTime();
      interval.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
          setIsExpired(true);
          clearInterval(interval.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerseconds(seconds);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return { timerDays, timerHours, timerMinutes, timerSeconds, isExpired };
};
export default useCountdown;
