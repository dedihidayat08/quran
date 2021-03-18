import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { dateFormat } from "../helpers/utils";

export interface MonthNavigatorProps {
  date: Date;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const MonthNavigator: FC<MonthNavigatorProps> = ({
  date,
  onClickPrev,
  onClickNext,
}) => {
  return (
    <div className="flex rounded overflow-hidden select-none">
      <div
        role="button"
        className="w-2/12 cursor-pointer flex flex-wrap content-center justify-center px-2 py-1 text-white bg-primary"
        onClick={onClickPrev}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="w-8/12 text-center px-2 py-2 text-sm text-white bg-secondary">
        {dateFormat(date, "MMMM yyyy").toUpperCase()}
      </div>
      <div
        role="button"
        className="w-2/12 cursor-pointer flex flex-wrap content-center justify-center px-2 py-1 text-white bg-primary"
        onClick={onClickNext}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default MonthNavigator;
