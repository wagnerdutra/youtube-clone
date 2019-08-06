import React, { useState } from "react";

import youtube from "./api/youtube";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function handleSubmit(searchTerm) {
    const {
      data: { items }
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDQjB8gIMguO8ITDRmAlNvyuP8btyJoJ94",
        q: searchTerm
      }
    });

    setVideos(items);
    setSelectedVideo(items[0]);
  }

  function onVideoSelect(video) {
    setSelectedVideo(video);
  }

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
