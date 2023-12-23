import React from "react";
import TasksWhichSend from "../TasksWhichSend";

const DailyTaskSend = () => {
  return (
    <>
      <TasksWhichSend
        apiUrl={"getReportDaily"}
        filterTask={"dailyDay"}
        title={"الموقف التنفيذي المرسل"}
      />
    </>
  );
};

export default DailyTaskSend;
