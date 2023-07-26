import React, { FC } from "react";

const TimeFall: FC<{
  isRight?: boolean;
  className?: string;
  isLast?: boolean;
}> = ({ isRight = false, className = "", isLast = false }) => {
  const pathData = isRight
    ? "M518 12.5C518 353.5 14 150 14 641.5"
    : "M12 12.5C12 353.5 516 150 516 641.5";

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 530 654"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Extend the path here by changing the ending point */}
      <path d={pathData} stroke="#A2A2A2" strokeWidth="6" />
      {isRight ? (
        <>
          <circle
            cx="12.5"
            cy="12.5"
            r="12.5"
            transform="matrix(-1 0 0 1 530 0)"
            fill="#BC5002"
          />
          {/* Render the circle at the end if isLast is true */}
          {isLast && <circle cx="14" cy="641.5" r="12.5" fill="#BC5002" />}
        </>
      ) : (
        <>
          <circle cx="12.5" cy="12.5" r="12.5" fill="#BC5002" />
          {/* Render the circle at the end if isLast is true */}
          {isLast && <circle cx="516" cy="641.5" r="12.5" fill="#BC5002" />}
        </>
      )}
    </svg>
  );
};

export default TimeFall;
