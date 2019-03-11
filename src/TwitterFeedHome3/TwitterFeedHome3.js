import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedHome3 = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "LAPublicLibrary"
        }}
        options={{
          username: "LAPublicLibrary",
          height: "420",
          width: "400",
          theme:"dark"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  );
};


export default TwitterFeedHome3