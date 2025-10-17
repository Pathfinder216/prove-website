import type { JSX } from "react"

import EmbeddedVideo from "@/components/EmbeddedVideo"

import Mate2014Img from "@/assets/Mate2014.jpg"

const VideosPage = (): JSX.Element => {
  const videos = [
    {
      title: "Night Testing with Mk. 3",
      src: "https://www.youtube.com/embed/Iccdk5k3jcQ?rel=0&autoplay=1",
      thumbnail: "https://img.youtube.com/vi/Iccdk5k3jcQ/hqdefault.jpg",
    },
    {
      title: "2014 MATE International Competition",
      src: "https://player.vimeo.com/video/114297278?autoplay=1",
      thumbnail: Mate2014Img, // fallback since Vimeo doesn’t give easy thumbnails
    },
    {
      title: "2015 MATE International Competition",
      src: "https://www.youtube.com/embed/PGbw_j3689k?rel=0&autoplay=1",
      thumbnail: "https://img.youtube.com/vi/PGbw_j3689k/hqdefault.jpg",
    },
  ];

  return (
    <section className="px-4 py-8">
      {videos.map((video, i) => (
        <EmbeddedVideo
          key={i}
          title={video.title}
          src={video.src}
          thumbnail={video.thumbnail}
        />
      ))}
    </section>
  );
};

export default VideosPage;
