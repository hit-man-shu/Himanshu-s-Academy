import React from "react";
import Input from "../../common/Input";

const CourseForm = ({ inputData = "", onSubmit, ref }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputData = Object.fromEntries(formData.entries());
    onSubmit(inputData);
  };

  return (
    <form onSubmit={handleSubmit} ref={ref}>
      <Input
        label={"Course Title"}
        id={"title"}
        type="text"
        defaultValue={inputData?.title}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Input
        label={"Course Description"}
        id={"description"}
        type="textarea"
        defaultValue={inputData?.description}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Input
        label={"Course Image"}
        id={"image"}
        type="text"
        defaultValue={inputData?.image}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Input
        label={"Course Price"}
        id={"price"}
        type="number"
        defaultValue={inputData?.price}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Input
        label={"Course Duration"}
        id={"duration"}
        type="text"
        defaultValue={inputData?.duration}
        fullWidth
        margin="normal"
        variant="outlined"
      />
    </form>
  );
};

export default CourseForm;
