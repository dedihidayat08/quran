import React, { FC } from "react";

const LogoAlIhsan: FC<{ fill?: string; size?: number }> = ({
  fill = "#0a2342",
  size = 68.248,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 98.88 98.999996"
    >
      <path
        d="M 13.578125 7.710938 L 85.492188 7.710938 L 85.492188 91.609375 L 13.578125 91.609375 Z M 13.578125 7.710938 "
        fill={fill}
      />
    </svg>
  );
};

export default LogoAlIhsan;
