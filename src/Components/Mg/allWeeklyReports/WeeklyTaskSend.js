import React from "react";
import TasksWhichSend from "../TasksWhichSend";

const WeeklyTaskSend = () => {
  return (
    <>
      <TasksWhichSend
        apiUrl={"getReportDaily"}
        cat={"Weekly"}
        title={"الموقف الاسبوعي المرسل"}
        filterTask={"getReportDailyByDay"}
        showFilterByName={false}
        // apiFilterByName={""}
      />
    </>
  );
};

export default WeeklyTaskSend;
