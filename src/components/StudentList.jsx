import React from "react";

function StudentList({
  students,
  onLoadStudents,
  onAddClick,
  onEditClick,
  onDeleteClick,
  onViewClick,
}) {
  return (
    <div>
      <h2>Student List</h2>

      <button onClick={onLoadStudents}>Load Students</button>
      <button onClick={onAddClick} style={{ marginLeft: "8px" }}>
        Add Student
      </button>

      {students.length === 0 ? (
        <p>No students loaded. Click "Load Students".</p>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: "12px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <button onClick={() => onEditClick(s)}>Edit</button>
                  <button
                    onClick={() => onDeleteClick(s.id)}
                    style={{ marginLeft: "4px" }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onViewClick(s)}
                    style={{ marginLeft: "4px" }}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
