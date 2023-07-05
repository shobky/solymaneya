import image1 from "@/public/catalog/boilers/boilers1.jpg";
import image2 from "@/public/catalog/boilers/boilers2.jpg";
import image3 from "@/public/catalog/boilers/boilers3.jpg";
import image4 from "@/public/catalog/boilers/boilers4.jpg";
import image5 from "@/public/catalog/boilers/boilers5.jpg";
import image6 from "@/public/catalog/boilers/boilers6.jpg";
import image7 from "@/public/catalog/boilers/boilers7.jpg";
import image8 from "@/public/catalog/boilers/boilers8.jpg";
import image9 from "@/public/catalog/boilers/boilers9.jpg";
import image10 from "@/public/catalog/boilers/boilers10.jpg";
import image11 from "@/public/catalog/boilers/boilers11.jpg";
import image12 from "@/public/catalog/boilers/boilers12.jpg";
import Image, { StaticImageData } from "next/image";

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12
];
export default function Boilers() {
  return (
    <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0  ">
      {imageArray.map((src: StaticImageData, i: number) => (
        <Image
          className="w-1/2 lg:w-1/4 aspect-square  object-cover  ease-in-out duration-150 opacity-70 hover:opacity-100 "
          key={i}
          alt=""
          src={src}
          width="100"
          height="100"
        />
      ))}
    </div>
  );
}
