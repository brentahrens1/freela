import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedHome2 = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "TheLAScene"
        }}
        options={{
          username: "TheLAScene",
          height: "420",
          width: "400",
          theme:"dark"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  );
};


export default TwitterFeedHome2