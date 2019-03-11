import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedHome = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "discoverLA"
        }}
        options={{
          username: "discoverLA",
          height: "420",
          width: "400",
          theme:"dark"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  );
};


export default TwitterFeedHome