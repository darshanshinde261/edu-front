import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from "./components/LoginComponent/LoginPage"
import StudentMenu from './components/LoginComponent/StudentMenu';
import AdminMenu from './components/LoginComponent/AdminMenu';
import RegisterUser from './components/LoginComponent/RegisterUser';
import CourseAddition from './components/CourseComponent/CourseAddition';
import CourseList from './components/CourseComponent/CourseList';
import CourseUpdate from './components/CourseComponent/CourseUpdate';
import StudentCourseList from './components/CourseComponent/StudentCourseList';
import StudentAddition from './components/StudentComponent/StudentAddition';
import StudentList from './components/StudentComponent/StudentList';
import StudentDetail from './components/StudentComponent/StudentDetail';
import StudentUpdate from './components/StudentComponent/StudentUpdate';
import StudentCurrent from './components/StudentComponent/StudentCurrent';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/Register" element={<RegisterUser></RegisterUser>}></Route>
          <Route path="/AdminMenu" element={<AdminMenu></AdminMenu>}></Route>
          <Route path="/StudentMenu" element={<StudentMenu></StudentMenu>}></Route>
          <Route path='/course-add' element={<CourseAddition></CourseAddition>}></Route>
          <Route path='/course-list' element={<CourseList></CourseList>}></Route>
          <Route path="/update-course/:courseId" element={<CourseUpdate></CourseUpdate>}></Route>
          <Route path='/student-course-list' element={<StudentCourseList/>}></Route>
          <Route path='/student-add' element={<StudentAddition></StudentAddition>}></Route>
          <Route path='/student-list' element={<StudentList></StudentList>}></Route>
          <Route path='/student-detail' element={<StudentDetail></StudentDetail>}></Route>
          <Route path='/student-update/:studentId' element={<StudentUpdate></StudentUpdate>}></Route>
          <Route path='/current-student' element={<StudentCurrent></StudentCurrent>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
