import React from "react";
import TaskSend from "../TaskSend";

const WeeklyTask = () => {
  return (
    <div>
      <TaskSend
        title={"الموقف التنفيذي الاسبوعي"}
        apiUrl={"createReportDaily"}
      />
    </div>
  );
};

export default WeeklyTask;
