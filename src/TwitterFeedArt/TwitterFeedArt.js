import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedArt = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "Arts4LA"
        }}
        options={{
          username: "Arts4LA",
          height: "420",
          width: "400",
          theme:"dark"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  );
};


export default TwitterFeedArt