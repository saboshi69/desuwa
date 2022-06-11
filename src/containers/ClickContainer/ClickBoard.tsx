/**
 *
 * ClickBoard
 *
 */

import clsx from "clsx";
import SoundButton from "components/SoundButton";
import React, { memo, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import useMultiAudio from "utils/hooks/useMultiAudioCust";
import { usePersistedState } from "utils/hooks/usePersistedState";
import soundList from "./soundListConfig";

interface Props {
  className?: string;
}

function ClickBoard({ className }: Props) {
  const [count, setCount] = usePersistedState("clickCount", 0);
  const [totalCount, setTotalCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const listLength = soundList.length;
  const playSound = useMultiAudio(soundList);

  const onClick = () => {
    setCount((count: number) => count + 1);
    setPendingCount((count: number) => count + 1);
    setTotalCount((count: number) => count + 1);
    const pickedIndex = Math.floor(Math.random() * (listLength - 1));
    playSound(pickedIndex);
  };

  const { isSuccess } = useQuery(
    "click",
    async () => {
      const data = await fetch(`/api/click`);
      return data.json();
    },
    {
      staleTime: 30000,
      refetchInterval: 30000,
      onSuccess: (res) => {
        const resCount = parseInt(res.count);
        if (!!resCount && resCount > totalCount) {
          setTotalCount(resCount);
        }
      },
    }
  );

  const { mutate: clickMutate } = useMutation(
    (count: string) =>
      fetch(`/api/click`, {
        body: count,
        method: "POST",
      }),
    {
      retry: false,
    }
  );

  useEffect(() => {
    const updateTotalCount = setInterval(() => {
      if (pendingCount) {
        clickMutate(String(pendingCount));
        setPendingCount(0);
      }
    }, 30000);

    return () => clearInterval(updateTotalCount);
  }, [clickMutate, pendingCount]);

  return (
    <div
      className={clsx([
        "fixed w-full top-1/4 flex flex-col justify-center items-center",
        className,
      ])}
    >
      <h1 className="text-2xl py-2 px-8 rounded-md bg-pink-400/75 my-1 text-white font-semibold">
        {isSuccess ? totalCount : "Loading..."}
      </h1>
      <h3 className="text-lg text-white font-semibold my-1">{count}</h3>
      <SoundButton onClick={onClick} />
    </div>
  );
}

export default memo(ClickBoard);
