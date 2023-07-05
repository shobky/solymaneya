import image1 from "@/public/catalog/manfuc/manfuc1.jpg";
import image2 from "@/public/catalog/manfuc/manfuc2.jpg";
import image3 from "@/public/catalog/manfuc/manfuc3.jpg";
import image4 from "@/public/catalog/manfuc/manfuc4.jpg";
import image5 from "@/public/catalog/manfuc/manfuc5.jpg";
import image6 from "@/public/catalog/manfuc/manfuc6.jpg";
import image7 from "@/public/catalog/manfuc/manfuc7.jpg";
import image8 from "@/public/catalog/manfuc/manfuc8.jpg";
import image9 from "@/public/catalog/manfuc/manfuc9.jpg";

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
];
export default function Export() {
  return (
    <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0  ">
      {imageArray.map((src: StaticImageData, i: number) => (
        <Image
          className="w-1/2 lg:w-1/4 aspect-square  object-cover  ease-in-out duration-150 "
          key={i}
          alt=""
          src={src}
          width="400"
          height="400"
        />
      ))}
    </div>
  );
}
