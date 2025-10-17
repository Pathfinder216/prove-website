import type { JSX } from "react"
import { Link } from "react-router-dom"

import TeamDQImg from "@/assets/Team_DQ.jpg"
import Poseidon1Img from "@/assets/Poseidon_1.jpg"
import TeamMeetingFunnyImg from "@/assets/Team_Meeting_Funny.jpg"
import VidsYoutube2Img from "@/assets/Vids_Youtube_2.jpg"

type MediaCardProps = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  reverse?: boolean; // flip image/text order
}

const MediaCard = ({ href, imgSrc, imgAlt, title, reverse }: MediaCardProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-center gap-4 md:flex-row ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      <Link to={href} className="w-full md:w-1/2">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </Link>
      <div className="text-center md:text-left md:w-1/2">
        <Link
          to={href}
          className="text-xl font-semibold text-blue-600 hover:underline"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

const MediaPage = (): JSX.Element => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <MediaCard
        href="/media/comps"
        imgSrc={TeamDQImg}
        imgAlt="pROVe enjoying Dairy Queen"
        title="Internationals Pictures"
      />

      <MediaCard
        href="/media/build"
        imgSrc={Poseidon1Img}
        imgAlt="Picture of Poseidon Mk. 3"
        title="Build/Test Pictures"
        reverse
      />

      <MediaCard
        href="/media/other"
        imgSrc={TeamMeetingFunnyImg}
        imgAlt="Funny team picture"
        title="Other Pictures"
      />

      <MediaCard
        href="/media/videos"
        imgSrc={VidsYoutube2Img}
        imgAlt="Mk. 3 in water"
        title="Videos"
        reverse
      />
    </section>
  );
};

export default MediaPage;
