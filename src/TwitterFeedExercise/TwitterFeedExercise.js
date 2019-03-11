import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedExercise = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "LACityParks"
        }}
        options={{
          username: "LACityParks",
          height: "420",
          width: "400",
          theme:"dark"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  );
};


export default TwitterFeedExercise