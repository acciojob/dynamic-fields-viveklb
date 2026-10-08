
import React, { useRef, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ id: 0, name: "", age: "" }]);
  const nextId = useRef(1);

  const addField = () => {
    const id = nextId.current++;
    setFields((currentFields) => [...currentFields, { id, name: "", age: "" }]);
  };

  const updateField = (id, property, value) => {
    setFields((currentFields) => currentFields.map((field) =>
      field.id === id ? { ...field, [property]: value } : field
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields.map(({ name, age }) => ({ name, age })));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={`name-${field.id}`}>Name</label>
            <input
              id={`name-${field.id}`}
              name="name"
              value={field.name}
              onChange={(event) => updateField(field.id, "name", event.target.value)}
            />
            <label htmlFor={`age-${field.id}`}>Age</label>
            <input
              id={`age-${field.id}`}
              name="age"
              type="number"
              value={field.age}
              onChange={(event) => updateField(field.id, "age", event.target.value)}
            />
            <button type="button" onClick={() => setFields((currentFields) =>
              currentFields.filter((currentField) => currentField.id !== field.id)
            )}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>Add field</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
