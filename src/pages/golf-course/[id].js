import { useRouter } from "next/router";
import Layout from "@components/layout/Layout";

const GolfCourseDetail = ({ golfCourse }) => {
  return (
    <Layout>
      <h1>{golfCourse.name}</h1>
      <p>
        {golfCourse.latitude} | {golfCourse.longitude}
      </p>
      {/* Render the golf course details here */}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const sampleGolfCourses = [
    { id: 1, name: "Golf Course 1", latitude: 40.7128, longitude: -74.006 },
    { id: 2, name: "Golf Course 2", latitude: 40.7308, longitude: -73.9975 },
    // Add more sample golf courses here
  ];
  const { id } = context.query;
  const golfCourse = sampleGolfCourses.find(
    (course) => course.id === parseInt(id)
  );

  if (!golfCourse) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      golfCourse,
    },
  };
}

export default GolfCourseDetail;
