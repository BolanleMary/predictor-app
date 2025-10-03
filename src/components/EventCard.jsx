import React from "react";
import { format, isToday, isTomorrow, isYesterday, parseISO } from "date-fns";

function dateLabel(date) {
  const parseData = parseISO(date);
  if (isToday(parseData)) {
    return "Today";
  } else if (isTomorrow(parseData)) {
    return "Tomorrow";
  } else if (isYesterday(parseData)) {
    return "Yesterday";
  } else {
    return format(parseData, "MMM d");
  }
}
function rainMap(rain) {
  if (rain <= 10) {
    return {
      type: "light",
      action: "No Action",
    };
  } else if (rain <= 30) {
    return {
      type: "moderate",
      action: "No Cause for Alarm",
    };
  } else if (rain <= 60) {
    return {
      type: "heavy",
      action: "Cause for Alarm",
    };
  } else if (rain <= 100) {
    return {
      type: "very heavy",
      action: "Reduce Flood",
    };
  } else {
    return {
      type: "extreme",
      action: "Expect Flood",
    };
  }
}
function EventCard(rain, date) {
  return (
    <div className="p-2 rounded-lg bg-gray-300 text-center text-xs">
      <p>{dateLabel(date)}</p>
      <p>{rainMap(rain).type}</p>
      <p>{rainMap(rain).action}</p>
    </div>
  );
}
export default EventCard;
