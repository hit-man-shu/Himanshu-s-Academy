import { useQuery } from "@tanstack/react-query";
import { fetchMyCourse } from "../../utils/api";
import CourseLoader from "../../common/CourseLoader";
import { ErrorBlock } from "../../Error/ErrorBlock";
import CourseCatalog from "./CourseCatalog";
import MyCourseItem from "./MyCourseItem";
import { Container } from "@mui/material";
import { useMemo, useState } from "react";

const MyCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");

  const {
    data = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["myCourses"],
    queryFn: ({ signal }) => fetchMyCourse({ signal }),
  });

  const handleSearchClick = () => {
    setActiveSearchTerm(searchTerm);
  };

  const filteredCourses = useMemo(() => {
    if (data && !data.courses) return [];

    let result = [...data.courses];

    if (activeSearchTerm) {
      result = result.filter((course) =>
        course?.courseId?.title
          .toLowerCase()
          .includes(activeSearchTerm.toLowerCase())
      );
    }

    return result;
  }, [data, activeSearchTerm]);

  if (isLoading) {
    return <CourseLoader />;
  }

  if (isError) {
    return (
      <ErrorBlock
        title={error?.response?.data?.errors || "Something went wrong!"}
        description={error?.response?.data?.message}
      />
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <CourseCatalog
        courseTitle={"My Courses"}
        courseDescription={"Access all the courses you've purchased."}
        showFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick={handleSearchClick}
      />
      {data && <MyCourseItem data={filteredCourses} />}
    </Container>
  );
};

export default MyCourses;
