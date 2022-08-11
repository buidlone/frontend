import { useEffect, useRef, useState } from "react";

const useCountdown = ( date?: string ) => {
    
    const [timerDays, setTimerDays] = useState<number | string>('00');
    const [timerHours, setTimerHours] = useState<number | string>('00');
    const [timerMinutes, setTimerMinutes] = useState<number | string>('00');
    const [timerSeconds, setTimerseconds] = useState<number | string>('00');
    const [isExpired, setIsExpired] = useState<boolean>(false);
  
    let interval = useRef<number | undefined>(undefined);
  
    const startTimer = () => {
      const countDownDate = new Date(date).getTime();
      // Update the count down every 1 second
      interval = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
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
    };
  
    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(interval.current);
      };
    });


    return {timerDays, timerHours, timerMinutes, timerSeconds, isExpired}

}
export default useCountdown;