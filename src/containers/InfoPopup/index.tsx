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
            <h5 className="font-semibold">Credits</h5>
            <a
              target="_blank"
              href="https://www.freepik.com/vectors/party-hall"
              rel="noreferrer"
              className="hover:underline"
            >
              Party hall vector created by vectorpouch - www.freepik.com
            </a>
          </div>
        </section>
      </div>
      <InfoButton onClick={toggleHandle} className="text-orange-700" />
    </>
  );
}

export default memo(InfoPopup);
