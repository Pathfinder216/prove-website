import type { JSX } from "react"

import Gallery from "@/components/Gallery"

import AgarSamplerImg from "@/assets/Media/Build/Agar_Sampler.jpg"
import CutFrameImg from "@/assets/Media/Build/Cut_Frame.jpg"
import Mk2Img from "@/assets/Media/Build/Mk2.jpg"
import Mk3WaterImg from "@/assets/Media/Build/Mk3_Water.jpg"
import PoolTestImg from "@/assets/Media/Build/Pool_Test.jpg"
import ProgramDesignImg from "@/assets/Media/Build/Program_Design.jpg"
import SparksImg from "@/assets/Media/Build/Sparks.jpg"
import StephenSawImg from "@/assets/Media/Build/Stephen_Saw.jpg"
import TruckWiresImg from "@/assets/Media/Build/Truck_Wires.jpg"



const BuildPage = (): JSX.Element => {
  const images = [
    { src: AgarSamplerImg, alt: "Building agar sampler" },
    { src: CutFrameImg, alt: "Cutting the frame" },
    { src: Mk2Img, alt: "Poseidon Mk. 2" },
    { src: Mk3WaterImg, alt: "Mk. 3 in water" },
    { src: PoolTestImg, alt: "Pool test" },
    { src: ProgramDesignImg, alt: "Design for program" },
    { src: SparksImg, alt: "Dremel producing sparks" },
    { src: StephenSawImg, alt: "Stephen sawing" },
    { src: TruckWiresImg, alt: "Wires covering truck bed" },
  ];

  return <Gallery title="Building and Testing" images={images} />;
};

export default BuildPage;
