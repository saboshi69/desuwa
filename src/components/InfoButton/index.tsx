/**
 *
 * InfoButton
 *
 */

import React, { memo } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface Props {
  onClick?: () => void;
  className?: string;
}

function InfoButton({ onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`text-2xl fixed bottom-5 right-5 ${className}`}
    >
      <IoMdInformationCircleOutline />
    </button>
  );
}

export default memo(InfoButton);
