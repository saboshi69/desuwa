/**
 *
 * SoundButton
 *
 */

import clsx from "clsx";
import React, { memo, useState } from "react";

interface Props {
  onClick?: () => void;
  className?: string;
}

function SoundButton({ onClick, className }: Props) {
  const [flip, setFlip] = useState(false);
  const clickToggle = () => {
    setFlip(!flip);
  };
  return (
    <button
      onMouseDown={clickToggle}
      onMouseUp={clickToggle}
      onClick={onClick}
      className={clsx([
        `text-3xl border-4 border-pink-700 bg-fuchsia-200 rounded-xl px-16 py-3 ${className}`,
        flip && "bg-pink-300",
      ])}
    >
      ですわ！
    </button>
  );
}

export default memo(SoundButton);
