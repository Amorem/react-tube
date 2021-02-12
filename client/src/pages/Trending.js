import React from "react";
import { useQuery } from "react-query";
import Wrapper from "../styles/Trending";
import { client } from "../utils/api-client";
import Skeleton from "../skeletons/TrendingSkeleton";
import ErrorMessage from "../components/ErrorMessage";
import TrendingCard from "../components/TrendingCard";

function Trending() {
  const {
    data: videos,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("TrendingVideos", () =>
    client.get("/videos/trending").then((res) => res.data.videos)
  );

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <Wrapper>
      <h2>Trending</h2>

      <div className="trending">
        {isSuccess
          ? videos.map((video) => <TrendingCard video={video} key={video.id} />)
          : null}
      </div>
    </Wrapper>
  );
}

export default Trending;
