import { useState } from "react";

const Message = ({ own, item }) => {
  const maxLength = 200;
  const [expanded, setExpanded] = useState(false);
  function getMessageTimestamp(messageTimestamp) {
    var currentTime = new Date();
    var messageTime = new Date(messageTimestamp);

    // Calculate the difference in milliseconds between the current time and message time
    var difference = currentTime - messageTime;

    // Define time intervals in milliseconds
    var minute = 60 * 1000;
    var hour = 60 * minute;
    var day = 24 * hour;
    var week = 7 * day;

    // Determine the appropriate format based on the difference
    if (difference < minute) {
      return "Just now";
    } else if (difference < hour) {
      var minutes = Math.floor(difference / minute);
      return minutes + "m ago";
    } else if (difference < day) {
      var hours = Math.floor(difference / hour);
      return hours + "h ago";
    } else if (difference < week) {
      var days = Math.floor(difference / day);
      return days + "d ago";
    } else {
      // If it's been more than a week, return the full date
      return messageTime.toLocaleDateString();
    }
  }
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  var messageTimestamp = item?.createdAt;
  var formattedTimestamp = getMessageTimestamp(messageTimestamp);
  return (
    <div className={`Message    ${own ? "own" : "items-end"}  flex flex-col  `}>
      <div className="messageTop">
        <div className="p-2.5 bg-yellow-400  text-white  rounded-lg max-w-[300px] sm:max-w-[400px] break-words   mt-1 MsgText">
          {item?.text?.length > maxLength && !expanded ? (
            <>
              <p>{item?.text?.slice(0, maxLength)}...</p>
              <button
                className="text-sky-500 font-bold "
                onClick={toggleExpanded}>
                ...Read More
              </button>
            </>
          ) : (
            <>
              <p>{item?.text}</p>
              {item?.text?.length > maxLength && (
                <button
                  className="text-sky-500 font-bold"
                  onClick={toggleExpanded}>
                  ...Read Less
                </button>
              )}
            </>
          )}
        </div>
        <small className="text-[12px] text-gray-400 mt-2.5">
          {formattedTimestamp}
        </small>
      </div>
    </div>
  );
};

export default Message;
