/**
 *
 * ClickBoard
 *
 */

import clsx from "clsx";
import SoundButton from "components/SoundButton";
import React, { memo, useState } from "react";
import useMultiAudio from "utils/hooks/useMultiAudioCust";
import { usePersistedState } from "utils/hooks/usePersistedState";
import soundList from "./soundListConfig";

interface Props {
  className?: string;
}

function ClickBoard({ className }: Props) {
  const [count, setCount] = usePersistedState("clickCount", 0);
  const listLength = soundList.length;
  const playSound = useMultiAudio(soundList);

  const onClick = () => {
    setCount((count: number) => count + 1);
    const pickedIndex = Math.floor(Math.random() * (listLength - 1));
    playSound(pickedIndex);
  };

  return (
    <div
      className={clsx([
        "fixed w-full top-1/4 flex flex-col justify-center items-center",
        className,
      ])}
    >
      <h1 className="text-2xl py-2 px-8 rounded-md bg-pink-400/75 my-1 text-white font-semibold">
        123123123
      </h1>
      <h3 className="text-lg text-white font-semibold my-1">{count}</h3>
      <SoundButton onClick={onClick} />
    </div>
  );
}

export default memo(ClickBoard);
