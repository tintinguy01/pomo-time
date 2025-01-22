"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
  const [isRunning, setIsRunning] = useState(false);
  const [timeMode, setTimeMode] = useState("Focus");

  const changeMode = (name: string) => {
    setIsRunning(false);
    if (name === "focus") {
      setTimeMode("Focus");
      setTimeLeft(1800); // 30mins
    } else if (name === "short-break") {
      setTimeMode("Short break");
      setTimeLeft(300); // 5mins
    } else if (name === "long-break") {
      setTimeMode("Long break");
      setTimeLeft(900); // 15mins
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-6 border-2 rounded-lg w-[50%] bg-neutral-100 dark:bg-neutral-900">
      <div className="flex items-center justify-between space-x-4">
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg min-w-[120px]"
          onClick={() => changeMode("focus")}
        >
          Focus
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg min-w-[120px]"
          onClick={() => changeMode("short-break")}
        >
          Short break
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg min-w-[120px]"
          onClick={() => changeMode("long-break")}
        >
          Long break
        </Button>
      </div>
      <h2 className="text-3xl font-bold text-neutral-700 dark:text-neutral-300">{timeMode}</h2>
      <h1 className="text-9xl font-bold text-neutral-700 dark:text-neutral-300">{formatTime(timeLeft)}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="border-2 border-blue-500 text-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
        >
          {isRunning ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={() =>
              setTimeLeft(
              timeMode === "Focus"
                ? 1800
                : timeMode === "Short break"
                ? 300
                : 900
            )
          }
          className="border-2 border-green-500 text-green-500 rounded-full p-2 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
        >
          <RotateCw size={24} />
        </button>
      </div>
    </div>
  );
};

export default Timer;
