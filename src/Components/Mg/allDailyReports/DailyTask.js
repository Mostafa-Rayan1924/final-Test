import React from "react";
import TaskSend from "../TaskSend";

const DailyTask = () => {
  return (
    <div>
      <TaskSend apiUrl={"createReportDaily"} title={"الموقف التنفيذي اليومي"} />
    </div>
  );
};

export default DailyTask;
