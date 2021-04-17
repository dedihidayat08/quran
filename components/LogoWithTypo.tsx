import React, { FC, HTMLProps } from "react";

const LogoWithTypo: FC<HTMLProps<HTMLImageElement>> = ({ className }) => {
  return (
    <img
      className={className || "inline-block"}
      src="/pandu-logo.svg"
      alt="Bipandu Apps"
    />
  );
};

export default LogoWithTypo;
