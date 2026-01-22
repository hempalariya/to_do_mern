import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function NewProjectForm() {
  function handleChange() {}
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
