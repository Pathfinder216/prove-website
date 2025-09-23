import Gallery from "@/components/Gallery";

import AgentImg from "@/assets/Media/Other/Agent.jpg"
import CreepyImg from "@/assets/Media/Other/Creepy.jpg"
import DogeImg from "@/assets/Media/Other/Doge.jpg"
import GarageImg from "@/assets/Media/Other/Garage.jpg"
import HannahROVCameraImg from "@/assets/Media/Other/Hannah_ROV_Camera.jpg"
import NoahHatImg from "@/assets/Media/Other/Noah_Hat.jpg"
import PhotobombImg from "@/assets/Media/Other/Photobomb.jpg"
import SponsorsImg from "@/assets/Media/Other/Sponsors.jpg"
import ThinkImg from "@/assets/Media/Other/Think.jpg"



export default function Other() {
  const images = [
    { src: DogeImg, alt: "Doge GUI" },
    { src: GarageImg, alt: "Hanging out in garage" },
    { src: AgentImg, alt: "Pretending to be an agent" },
    { src: PhotobombImg, alt: "Photobombing" },
    { src: ThinkImg, alt: "David thinking" },
    { src: SponsorsImg, alt: "Sponsors" },
    { src: CreepyImg, alt: "Ben's creepy face" },
    { src: HannahROVCameraImg, alt: "Hannah viewed by ROV camera" },
    { src: NoahHatImg, alt: "Noah wearing a custom hat" },
  ];

  return <Gallery title="Other Pictures" images={images} />;
}
