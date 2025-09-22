import React, { type JSX } from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Reusable section component
interface PoseidonCardProps {
  title: string;
  mainImage: { src: string; link?: string; alt: string };
  paragraphs: (string | JSX.Element)[];
  gallery: string[];
}

const PoseidonCard: React.FC<PoseidonCardProps> = ({
  title,
  mainImage,
  paragraphs,
  gallery,
}) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="text-xl font-semibold">{title}</AccordionTrigger>
      <AccordionContent className="px-4 py-2 text-gray-700">
        <section className="space-y-6">
          <article className="space-y-6">
            <a href={mainImage.link ?? mainImage.src} className="block">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="rounded-lg shadow-md mx-auto"
              />
            </a>
            <div className="space-y-4 text-lg leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {gallery.map((img, idx) => (
              <a
                key={idx}
                href={img}
                className="block overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={img}
                  alt={`${title} figure ${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </a>
            ))}
          </div>
        </section>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PoseidonCard;
