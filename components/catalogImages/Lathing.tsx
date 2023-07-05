import image1 from "@/public/catalog/lathing/lathing1.jpg";
import image2 from "@/public/catalog/lathing/lathing2.jpg";
import image3 from "@/public/catalog/lathing/lathing3.jpg";
import image4 from "@/public/catalog/lathing/lathing4.jpg";
import image5 from "@/public/catalog/lathing/lathing5.jpg";
import image6 from "@/public/catalog/lathing/lathing6.jpg";
import image7 from "@/public/catalog/lathing/lathing7.jpg";
import image8 from "@/public/catalog/lathing/lathing8.jpg";
import image9 from "@/public/catalog/lathing/lathing9.jpg";
import image10 from "@/public/catalog/lathing/lathing10.jpg";
import image11 from "@/public/catalog/lathing/lathing11.jpg";
import image13 from "@/public/catalog/lathing/lathing13.jpg";
import image14 from "@/public/catalog/lathing/lathing14.jpg";
import image15 from "@/public/catalog/lathing/lathing15.jpg";
import image16 from "@/public/catalog/lathing/lathing16.jpg";
import image17 from "@/public/catalog/lathing/lathing17.jpg";
import image18 from "@/public/catalog/lathing/lathing18.jpg";
import image19 from "@/public/catalog/lathing/lathing19.jpg";
import image20 from "@/public/catalog/lathing/lathing20.jpg";
import image21 from "@/public/catalog/lathing/lathing21.jpg";
import image22 from "@/public/catalog/lathing/lathing22.jpg";
import image23 from "@/public/catalog/lathing/lathing23.jpg";
import image24 from "@/public/catalog/lathing/lathing24.jpg";
import image25 from "@/public/catalog/lathing/lathing25.jpg";
import image26 from "@/public/catalog/lathing/lathing26.jpg";
import image27 from "@/public/catalog/lathing/lathing27.jpg";
import image28 from "@/public/catalog/lathing/lathing28.jpg";
import image29 from "@/public/catalog/lathing/lathing29.jpg";
import image30 from "@/public/catalog/lathing/lathing30.jpg";
import image31 from "@/public/catalog/lathing/lathing31.jpg";
import image32 from "@/public/catalog/lathing/lathing32.jpg";
import image33 from "@/public/catalog/lathing/lathing33.jpg";
import image34 from "@/public/catalog/lathing/lathing34.jpg";
import image35 from "@/public/catalog/lathing/lathing35.jpg";
import image36 from "@/public/catalog/lathing/lathing36.jpg";
import image37 from "@/public/catalog/lathing/lathing37.jpg";
import image38 from "@/public/catalog/lathing/lathing38.jpg";

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
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
];
export default function Lathing() {
  return (
    <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0  ">
      {imageArray.map((src: StaticImageData, i: number) => (
        <Image
          className="w-1/2 lg:w-1/4 aspect-square  object-cover  ease-in-out duration-150 opacity-70 hover:opacity-100 "
          key={i}
          alt=""
          src={src}
          width="150"
          height="150"
        />
      ))}
    </div>
  );
}
