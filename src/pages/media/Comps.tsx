import type { JSX } from "react"

import Gallery from "@/components/Gallery"

import BannerImg from "@/assets/Media/Comps/2014_Banner.jpg"
import CircleImg from "@/assets/Media/Comps/2014_Circle.jpg"
import HangImg from "@/assets/Media/Comps/2014_Hang.jpg"
import MeetingImg from "@/assets/Media/Comps/2014_Meeting.jpg"
import PosterImg from "@/assets/Media/Comps/2014_Poster.jpg"
import RunImg from "@/assets/Media/Comps/2014_Run.jpg"
import StationsImg from "@/assets/Media/Comps/2014_Stations.jpg"
import TableImg from "@/assets/Media/Comps/2014_Table.jpg"
import ViewImg from "@/assets/Media/Comps/2014_View.jpg"

const CompsPage = (): JSX.Element => {
  const images = [
    { src: BannerImg, alt: "2014 MATE Banner" },
    { src: CircleImg, alt: "Waiting to begin mission run" },
    { src: PosterImg, alt: "pROVe poster" },
    { src: RunImg, alt: "Preparing for mission run" },
    { src: ViewImg, alt: "View from island" },
    { src: HangImg, alt: "Hanging out" },
    { src: MeetingImg, alt: "Team meeting" },
    { src: TableImg, alt: "Sitting on table" },
    { src: StationsImg, alt: "Mission stations" },
  ];

  return <Gallery title="2014 Internationals" images={images} />;
};

export default CompsPage;
