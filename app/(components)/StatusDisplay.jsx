import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-500";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-500";
        return color;
      case "started":
        color = "bg-yellow-500";
        return color;
      case "not started":
        color = "bg-red-500";
        return color;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-grey-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
