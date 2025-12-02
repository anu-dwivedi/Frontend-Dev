import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./services/Studentservice";

function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("list"); // 'list' | 'add' | 'edit' | 'details'
  const [selectedStudent, setSelectedStudent] = useState(null);

  async function handleLoadStudents() {
    try {
      const data = await getStudents();
      setStudents(data);
      alert("Students loaded.");
    } catch (err) {
      alert(err.message);
    }
  }

  function handleAddClick() {
    setSelectedStudent(null);
    setMode("add");
  }

  function handleEditClick(student) {
    setSelectedStudent(student);
    setMode("edit");
  }

  async function handleDeleteClick(id) {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }
    try {
      await deleteStudent(id);
      alert("Student deleted. Click 'Load Students' to refresh.");
    } catch (err) {
      alert(err.message);
    }
  }

  function handleViewClick(student) {
    setSelectedStudent(student);
    setMode("details");
  }

  function goBackToList() {
    setMode("list");
  }

  async function handleAddSubmit(student) {
    try {
      await createStudent(student);
      alert("Student created successfully. Click 'Load Students' to refresh.");
      setMode("list");
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleEditSubmit(student) {
    if (!selectedStudent) return;
    try {
      await updateStudent(selectedStudent.id, student);
      alert("Student updated successfully. Click 'Load Students' to refresh.");
      setMode("list");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div style={{ padding: "16px" }}>
      <h1>Student Result App</h1>

            {mode === "list" && (
              <StudentList
                students={students}
                onLoadStudents={handleLoadStudents}
                onAddClick={handleAddClick}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
                onViewClick={handleViewClick}
              />
            )}
      
            {mode === "add" && (
              <StudentForm onSubmit={handleAddSubmit} onCancel={goBackToList} />
            )}
      
            {mode === "edit" && (
              <StudentForm
                student={selectedStudent}
                onSubmit={handleEditSubmit}
                onCancel={goBackToList}
              />
            )}
      
            {mode === "details" && (
              <StudentDetails student={selectedStudent} onBack={goBackToList} />
            )}
          </div>
        );
      }
      
      export default App;
