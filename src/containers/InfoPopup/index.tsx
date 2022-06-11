/**
 *
 * InfoPopup
 *
 */

import clsx from "clsx";
import CloseButton from "components/CloseButton";
import InfoButton from "components/InfoButton";
import React, { memo, useState } from "react";

interface Props {
  setIsInfoShow: React.Dispatch<React.SetStateAction<boolean>>;
  isInfoShow: boolean;
  className?: string;
}

function InfoPopup({ setIsInfoShow, isInfoShow = true, className }: Props) {
  const [isPop, setIsPop] = useState(false);

  const closeHandle = () => {
    setIsInfoShow(false);
  };
  const toggleHandle = () => {
    if (!isPop) {
      setIsPop(true);
    }
    setIsInfoShow(!isInfoShow);
  };

  const animationHandle = () => {
    if (!isInfoShow) {
      setIsPop(false);
    }
  };

  return (
    <>
      <div className="w-full fixed top-1/4">
        <section
          style={{ animationFillMode: "forwards" }}
          className={clsx([
            isInfoShow ? "animate-fadeIn" : "animate-fadeOut",
            isPop ? "block" : "hidden",
            "relative p-6 drop-shadow-2xl max-w-lg rounded w-full mx-auto bg-amber-200/90",
          ])}
          onAnimationEnd={animationHandle}
        >
          <CloseButton
            onClick={closeHandle}
            className="absolute top-2 right-2 text-orange-700"
          />
          <div>
            <h5 className="font-semibold">About this site</h5>
            <p className="mb-2">
              This website is a fan-made website and it is not officially owned
              by NIJISANJI, nor is it affiliated with ANYCOLOR Corporation or
              any of its subsidiaries.
            </p>
            <h5 className="font-semibold">Credits</h5>
            <a
              target="_blank"
              href="https://www.freepik.com/vectors/party-hall"
              rel="noreferrer"
              className="hover:underline"
            >
              Party hall vector created by vectorpouch - www.freepik.com
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCgIfLpQvelloDi8I0Ycbwpg"
              rel="noreferrer"
              className="hover:underline mb-2 inline-block"
            >
              壱百満天原サロメ Youtube Channel
            </a>
            <h5 className="font-semibold">Creator / Github Repo</h5>
            <a
              href="https://github.com/saboshi69/desuwa"
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              saboshi69
            </a>
          </div>
        </section>
      </div>
      <InfoButton onClick={toggleHandle} className="text-orange-700" />
    </>
  );
}

export default memo(InfoPopup);
