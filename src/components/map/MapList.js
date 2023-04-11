import React from "react";
import Link from "next/link";

const MapList = ({ golfCourses }) => {
  return (
    <div>
      <h1>
        골프코스 <small>Golf Courses</small>
      </h1>
      <ul>
        {golfCourses.map((golfCourse) => (
          <li key={golfCourse.id}>
            <Link href={`/golf-course/${golfCourse.id}`}>
              {golfCourse.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapList;
