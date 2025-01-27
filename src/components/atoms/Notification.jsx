"use client";
import { useEffect, useState } from 'react';

const notifications = [
  "Ahmad اشترت منذ 6 دقائق",
  "Ali اشترت منذ 10 دقائق",
  "Sara اشترت منذ 15 دقائق",
  "Mohammed اشترت منذ 20 دقائق",
];

export default function NotificationBanner() {
  const [currentNotification, setCurrentNotification] = useState(notifications[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out the current notification
      setIsVisible(false);

      // Wait for the fade-out animation to complete before updating the notification
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % notifications.length;
        setCurrentNotification(notifications[nextIndex]);
        setCurrentIndex(nextIndex);

        // Fade in the next notification
        setIsVisible(true);
      }, 3000); // Wait for 500ms (duration of the fade-out animation)
    }, 2000); // Total cycle time: 2.5 seconds (2s wait + 0.5s fade-out)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={`fixed left-1/2  z-[500] h-0 -translate-x-1/2 ${isVisible ? 'top-[50px]' : 'top-[-50px]'} duration-500 `}>
      <div className={`transition-opacity duration-500 ease-in-out `}>
        <div className="flex min-w-fit gap-2 whitespace-nowrap rounded-full bg-black/50 px-2 py-2 text-sm text-white backdrop-blur-md">
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
          </svg>
          <span>{currentNotification}</span>
        </div>
      </div>
    </div>
  );
}