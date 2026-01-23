import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function NewProjectForm() {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  }

  function handleAddProject(e) {}
  return (
    <form className="mt-5">
      <Input
        onChange={handleChange}
        label={"Title"}
        labelFor={"title"}
        id={"title"}
        name={"title"}
        type={"title"}
      />
      <Input
        onChange={handleChange}
        label={"Description"}
        labelFor={"description"}
        id={"description"}
        name={"description"}
        type={"description"}
      />
      <Button>Add Project</Button>
    </form>
  );
}
