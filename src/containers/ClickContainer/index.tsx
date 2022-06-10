/**
 *
 * ClickContainer
 *
 */

import InfoPopup from "containers/InfoPopup";
import React, { memo, useState } from "react";
import dynamic from "next/dynamic";

function ClickContainer() {
  const [isInfoShow, setIsInfoShow] = useState(false);
  const ClickBoard = dynamic(
    () => {
      return import("./ClickBoard");
    },
    { ssr: false }
  );

  return (
    <div>
      <ClickBoard className={isInfoShow ? "hidden" : ""} />
      <InfoPopup isInfoShow={isInfoShow} setIsInfoShow={setIsInfoShow} />
    </div>
  );
}

export default memo(ClickContainer);
