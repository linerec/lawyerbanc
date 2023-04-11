import React from "react";
import MapSelector from "@components/map/MapSelector";
import MapList from "@components/map/MapList";

const sampleGolfCourses = [
  { id: 1, name: "Golf Course 1", latitude: 40.7128, longitude: -74.006 },
  { id: 2, name: "Golf Course 2", latitude: 40.7308, longitude: -73.9975 },
  // Add more sample golf courses here
];

export default function MapService() {
  const [selectedArea, setSelectedArea] = React.useState(null);
  const [golfCourses, setGolfCourses] = React.useState(sampleGolfCourses);

  const updateGolfCourses = (areaId) => {
    const updatedGolfCourses = sampleGolfCourses.filter(
      (golfCourse) => golfCourse.id === areaId
    );
    setGolfCourses(updatedGolfCourses);
  };

  React.useEffect(() => {
    if (selectedArea) {
      updateGolfCourses(selectedArea);
    }
  }, [selectedArea]);

  return (
    <section className="home promo">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <MapSelector onAreaSelected={setSelectedArea} />
          </div>
          <div className="col-md-6">
            <MapList golfCourses={golfCourses} />
          </div>
        </div>
      </div>
    </section>
  );
}
