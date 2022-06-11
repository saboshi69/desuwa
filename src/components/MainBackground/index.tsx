/**
 *
 * MainBackground
 *
 */

import React, { memo } from "react";
import Image from "next/image";

function MainBackground() {
  return (
    <div className="-z-50 fixed h-full w-full">
      <Image
        src="https://saboshi69.github.io/asset/desuwa/image/bg.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default memo(MainBackground);
