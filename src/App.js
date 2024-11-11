import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Components/InAll/Error";
import { Theme } from "./contexts/themeContext";
import { AuthContextProvider } from "./contexts/Auth";
import { ChatConvIdProvider } from "./contexts/ConversationId";
import { ChatContextProvider } from "./contexts/CurrentClickChat";
import Login from "./Components/Mg/Login";
import ProDetails from "./Components/Projects/ProDetails";
import Dashboard from "./Components/Mg/Dashboard";
import RequireAuth from "./Components/Mg/RequireAuth";
import DailyTask from "./Components/Mg/allDailyReports/DailyTask";
import DailyTaskSend from "./Components/Mg/allDailyReports/DailyTaskSend";
import WeeklyTask from "./Components/Mg/allWeeklyReports/WeeklyTask";
import WeeklyTaskSend from "./Components/Mg/allWeeklyReports/WeeklyTaskSend";
import TasksToMake from "./Components/Mg/AllTasks/TasksToMake";
import TasksToSend from "./Components/Mg/AllTasks/TasksToSend";
import AllTasks from "./Components/Mg/AllTasks/AllTask";
import Chats from "./Components/Mg/Chats";
import Review from "./Components/Mg/Review";
import AllReview from "./Components/Mg/AllReview";
import ProtectedRoute from "./Components/Mg/ProtectedRoute";
import MohasebTaskToSend from "./Components/Mg/allDailyReports/MohasebTaskToSend";

export default function App() {
  const [themes, setThemes] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("mgsystem")) {
      document.body.classList.remove("dark");
    }
  }, [location]);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ChatContextProvider>
      <ChatConvIdProvider>
        <AuthContextProvider>
          <Theme.Provider value={{ themes, setThemes }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:proid" element={<ProDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Route for system */}
              <Route path="/mgsystem/login" element={<Login />} />

              <Route element={<RequireAuth />}>
                <Route path="/mgsystem/dashboard" element={<Dashboard />}>
                  {/* Get weekly and daily status */}
                  <Route
                    element={
                      <ProtectedRoute
                        user={user}
                        allowedRoles={["مدير", "محاسب", "مكتب فني", "الادارة"]}
                      />
                    }>
                    <Route path="dailyTaskSend" element={<DailyTaskSend />} />
                  </Route>
                  <Route
                    element={
                      <ProtectedRoute
                        user={user}
                        allowedRoles={["مدير", "الادارة"]}
                      />
                    }>
                    <Route path="weeklyTaskSend" element={<WeeklyTaskSend />} />
                  </Route>

                  {/* Send request and all requests */}

                  <Route
                    element={
                      <ProtectedRoute
                        user={user}
                        allowedRoles={["مدير", "الادارة"]}
                      />
                    }>
                    <Route path="sendTasks" element={<TasksToSend />} />
                    <Route path="allTasks" element={<AllTasks />} />
                  </Route>
                  <Route
                    element={
                      <ProtectedRoute user={user} allowedRoles={["محاسب"]} />
                    }>
                    <Route path="mohasebTask" element={<MohasebTaskToSend />} />
                  </Route>
                  <Route
                    element={
                      <ProtectedRoute
                        user={user}
                        allowedRoles={[
                          "مشرف",
                          "مهندس مدني",
                          "محاسب",
                          "مدير",
                          "مكتب فني",
                          "الادارة",
                        ]}
                      />
                    }>
                    <Route path="chats" element={<Chats />} />
                  </Route>

                  {/* Daily and weekly status and task execution */}
                  <Route
                    element={
                      <ProtectedRoute
                        user={user}
                        allowedRoles={[
                          "محاسب",
                          "مكتب فني",
                          "مهندس مدني",
                          "مشرف",
                        ]}
                      />
                    }>
                    <Route path="dailyTask" element={<DailyTask />} />
                    <Route path="weeklyTask" element={<WeeklyTask />} />
                    <Route path="tasks" element={<TasksToMake />} />
                  </Route>
                  <Route
                    element={
                      <ProtectedRoute
                        user={user}
                        allowedRoles={["مكتب فني", "مدير", "الادارة"]}
                      />
                    }>
                    <Route path="weeklyTask" element={<WeeklyTask />} />
                  </Route>

                  {/* Management review */}
                  <Route
                    element={
                      <ProtectedRoute user={user} allowedRoles={["الادارة"]} />
                    }>
                    <Route path="review" element={<Review />} />
                    <Route path="allReview" element={<AllReview />} />
                  </Route>
                </Route>
              </Route>

              <Route path="*" element={<Error />} />
            </Routes>
          </Theme.Provider>
        </AuthContextProvider>
      </ChatConvIdProvider>
    </ChatContextProvider>
  );
}
