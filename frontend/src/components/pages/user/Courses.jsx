import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchAllCourses } from "../../utils/api";
import CourseLoader from "../../common/CourseLoader";
import CourseItem from "./CourseItem";
import { ErrorBlock } from "../../Error/ErrorBlock";
import CourseCatalog from "./CourseCatalog";
import { useMemo, useState } from "react";

export default function Courses() {
  const [sortBy, setSortBy] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: ({ signal }) => fetchAllCourses({ signal }),
  });

  const handleSearchClick = () => setActiveSearchTerm(searchTerm);

  const filteredCourses = useMemo(() => {
    if (!data?.courses) return [];

    let result = [...data.courses];

    if (activeSearchTerm) {
      result = result.filter((course) =>
        course.title.toLowerCase().includes(activeSearchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "Price: Low to High":
          return a.price - b.price;
        case "Price: High to Low":
          return b.price - a.price;
        case "Newest":
          return data.courses;
      }
    });

    return result;
  }, [data, sortBy, activeSearchTerm]);

  let content;

  if (isLoading) {
    content = <CourseLoader />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title={error?.response?.data?.errors || "Something went wrong!"}
        description={error?.response?.data?.message}
      />
    );
  }

  if (data) {
    content = <CourseItem data={filteredCourses} />;
  }

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "common.white", py: 8 }}>
      <CourseCatalog
        courseTitle={"Explore Courses"}
        courseDescription={
          "Browse our collection of courses and find the perfect one for you."
        }
        showFilter
        priceFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick={handleSearchClick}
      />
      {content}
    </Container>
  );
}
