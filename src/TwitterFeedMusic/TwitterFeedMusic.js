import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeedMusic = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "GrandPerfs"
        }}
        options={{
          username: "GrandPerfs",
          height: "420",
          width: "400",
          theme:"dark"
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
    </div>
  );
};


export default TwitterFeedMusic
