import { format, isToday, isTomorrow, isYesterday, parseISO } from "date-fns";

function dateLabel(date) {
  const parsedData = parseISO(date);
  if (isToday(parsedData)) {
    return "Today";
  } else if (isTomorrow(parsedData)) {
    return "Tomorrow";
  } else if (isYesterday(parsedData)) {
    return "Yesterday";
  } else {
    return format(parsedData, "MMM d");
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
function EventCard({rain, date}) {
  return (
    <div className={`p-2 rounded-lg text-center text-xs ${
      rainMap(rain).type !== "extreme"? "bg-[#A6A6A6]" : "bg-[#FF0505]"
    }`}>
       <p>{dateLabel(date)}</p> 
      <p>{rainMap(rain).type}</p>
      <p>{rainMap(rain).action}</p>
    </div>
  );
}
export default EventCard;
