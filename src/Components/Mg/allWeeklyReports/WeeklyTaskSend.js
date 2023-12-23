import React from "react";
import TasksWhichSend from "../TasksWhichSend";

const WeeklyTaskSend = () => {
  return (
    <>
      <TasksWhichSend
        apiUrl={"getReportWeekly"}
        title={"الموقف الاسبوعي المرسل"}
        filterTask={"weeklyDay"}
      />
    </>
  );
};

export default WeeklyTaskSend;
