import { Typography } from "@mui/material";
import React from "react";
import CountUp, { useCountUp } from "react-countup";

export default function Counter({
  title,
  count,
}: {
  count: number;
  title: string;
}) {
  const countUpRef = React.useRef(null);

  return (
    <div className="w-full h-[20vh] rounded-md bg-slate-700 flex justify-center items-center flex-col">
      <h3 className="text-white md:text-4xl text-2xl overflow-hidden">
        <CountUp
          start={0}
          end={count}
          delay={1}
          duration={10}
          onReset={() => console.log("Resetted!")}
          onUpdate={() => console.log("Updated!")}
          onPauseResume={() => console.log("Paused or resumed!")}
          onStart={({ pauseResume }) => console.log(pauseResume)}
          onEnd={({ pauseResume }) => console.log(pauseResume)}
        />
      </h3>
      <h3 className="text-gray-400 md:text-xl text-2xl overflow-hidden">
        {title}
      </h3>
    </div>
  );
}
