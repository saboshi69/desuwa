import React, { useMemo } from "react";

const useMultiAudio = (urls: string[]) => {
  const listLength = urls.length;
  const players = useMemo(
    () =>
      urls.map((url: string) => {
        return {
          // playing: false,
          audio: typeof Audio !== "undefined" ? new Audio(url) : null,
        };
      }),
    [urls]
  );

  const playSound = (targetIndex: number) => {
    const pickedIndex = Math.floor(Math.random() * (listLength - 1));
    players[pickedIndex].audio!.currentTime = 0;
    players[pickedIndex].audio?.play();
  };

  return playSound;
};

export default useMultiAudio;
