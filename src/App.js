import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Components/InAll/Error";
import { Theme } from "./contexts/themeContext";
import { useEffect, useState } from "react";
import Login from "./Components/Mg/Login";
import ProDetails from "./Components/Projects/ProDetails";
import Dashboard from "./Components/Mg/Dashboard";
import { AuthContextProvider } from "./contexts/Auth";
import RequireAuth from "./Components/Mg/RequireAuth";
import DailyTask from "./Components/Mg/allDailyReports/DailyTask";
import DailyTaskSend from "./Components/Mg/allDailyReports/DailyTaskSend";
import WeeklyTask from "./Components/Mg/allWeeklyReports/WeeklyTask";
import WeeklyTaskSend from "./Components/Mg/allWeeklyReports/WeeklyTaskSend";
import TasksToMake from "./Components/Mg/AllTasks/TasksToMake";
import TasksToSend from "./Components/Mg/AllTasks/TasksToSend";
import AllTasks from "./Components/Mg/AllTasks/AllTask";
import Chats from "./Components/Mg/Chats";
import { ChatContextProvider } from "./contexts/CurrentClickChat";
import { ChatConvIdProvider } from "./contexts/ConversationId";
import { useLocation } from "react-router-dom";

export default function App() {
  let [themes, setThemes] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("mgsystem")) {
      document.body.classList.remove("dark");
    }
  }, [location]);

  return (
    <>
      <ChatConvIdProvider>
        <ChatContextProvider>
          <AuthContextProvider>
            <Theme.Provider value={{ themes, setThemes }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:proid" element={<ProDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* route for system */}
                <Route path="/mgsystem">
                  <Route path="login" element={<Login />} />
                  <Route element={<RequireAuth />}>
                    <Route path="dashboard" element={<Dashboard />}>
                      <Route path="dailyTask" element={<DailyTask />} />
                      <Route path="dailyTaskSend" element={<DailyTaskSend />} />
                      <Route path="weeklyTask" element={<WeeklyTask />} />
                      <Route
                        path="weeklyTaskSend"
                        element={<WeeklyTaskSend />}
                      />
                      <Route path="tasks" element={<TasksToMake />} />
                      <Route path="sendTasks" element={<TasksToSend />} />
                      <Route path="allTasks" element={<AllTasks />} />
                      <Route path="chats" element={<Chats />} />
                    </Route>
                  </Route>
                </Route>
                <Route path="/*" element={<Error />} />
              </Routes>
            </Theme.Provider>
          </AuthContextProvider>
        </ChatContextProvider>
      </ChatConvIdProvider>
    </>
  );
}
