/**
 *
 * CloseButton
 *
 */

import React, { memo } from "react";
import { MdOutlineClose } from "react-icons/md";

interface Props {
  onClick?: () => void;
  className?: string;
}

function CloseButton({ onClick, className }: Props) {
  return (
    <button onClick={onClick} className={`text-xl ${className}`}>
      <MdOutlineClose />
    </button>
  );
}

export default memo(CloseButton);
