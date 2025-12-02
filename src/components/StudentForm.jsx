import React, { useState, useEffect } from "react";

function StudentForm({ initialData, onCancel, onSubmit }) {
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setSection(initialData.section || "");
      setMarks(initialData.marks || "");
      setGrade(initialData.grade || "");
    } else {
      setName("");
      setSection("");
      setMarks("");
      setGrade("");
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();
    const student = {
      name,
      section,
      marks: Number(marks),
      grade,
    };
    onSubmit(student);
  }

  return (
    <div>
      <h2>{initialData ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Section:{" "}
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Marks:{" "}
            <input
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Grade:{" "}
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" style={{ marginTop: "8px" }}>
          {initialData ? "Save Changes" : "Add Student"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: "8px", marginTop: "8px" }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
