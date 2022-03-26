import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Task from "./praktika1/Task";
import LikePost from "./praktika2/LikePost";
import LessTextList from "./praktika3/LessTextList";
import LearningList from "./praktika4/LearningList";
import TodoList from "./praktika5/TodoList";
import InfoData from "./praktika6/InfoData";
import Data from "./praktika7/Data";
import Profile from "./praktika7/Profile";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="text-center fs-1 p-4">Praktiniai darbai</h3>
        </div>
      </div>
      <Router>
        <nav className="row">
          <div className="col text-center ">
            <Link to="/1">
              <button type="button" className="btn btn-outline-dark m-3">
                1 praktika (Task is done)
              </button>
            </Link>
            <Link to="/2">
              <button type="button" className="btn btn-outline-dark m-3">
                2 praktika (Like, Dislike)
              </button>
            </Link>
            <Link to="/3">
              <button type="button" className="btn btn-outline-dark m-3">
                3 praktika (Read more)
              </button>
            </Link>
            <Link to="/4">
              <button type="button" className="btn btn-outline-dark m-3">
                4 praktika (Mokausi/Išmokau)
              </button>
            </Link>
            <Link to="/5">
              <button type="button" className="btn btn-outline-dark m-3">
                5 praktika (To-Do list)
              </button>
            </Link>
            <Link to="/6">
              <button type="button" className="btn btn-outline-dark m-3">
                6 praktika (Fetch Data)
              </button>
            </Link>
            <Link to="/7">
              <button type="button" className="btn btn-outline-dark m-3">
                7 praktika (Fetch Data/Profiles)
              </button>
            </Link>
          </div>
        </nav>
        <div className="row d-flex  justify-content-center  mt-5">
          <Routes>
            <Route path="/1" element={<Task />} />
            <Route path="/2" element={<LikePost />} />
            <Route path="/3" element={<LessTextList />} />
            <Route path="/4" element={<LearningList />} />
            <Route path="/5" element={<TodoList />} />
            <Route path="/6" element={<InfoData />} />
            <Route path="/7" element={<Data />} />
            <Route path="/profile/:username" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
