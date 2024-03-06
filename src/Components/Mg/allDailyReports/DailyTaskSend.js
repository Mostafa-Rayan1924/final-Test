import React from "react";
import TasksWhichSend from "../TasksWhichSend";

const DailyTaskSend = () => {
  return (
    <>
      <TasksWhichSend
        apiUrl={"getReportDaily"}
        filterTask={"getReportDailyByDay"}
        title={"الموقف التنفيذي المرسل"}
        apiFilterByName={"getReportdailyByUser"}
        showFilterByName={true}
      />
    </>
  );
};

export default DailyTaskSend;
