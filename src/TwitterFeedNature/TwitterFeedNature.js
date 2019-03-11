import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedNature = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "LAHiking"
        }}
        options={{
          username: "LAHiking",
          height: "420",
          width: "400",
          theme:"dark"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  );
};


export default TwitterFeedNature