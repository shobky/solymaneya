import image30 from "@/public/catalog/ew/ew0.jpg";
import image1 from "@/public/catalog/ew/ew1.jpg";
import image2 from "@/public/catalog/ew/ew2.jpg";
import image3 from "@/public/catalog/ew/ew3.jpg";
import image4 from "@/public/catalog/ew/ew4.jpg";
import image5 from "@/public/catalog/ew/ew5.jpg";
import image6 from "@/public/catalog/ew/ew6.jpg";
import image7 from "@/public/catalog/ew/ew7.jpg";
import image8 from "@/public/catalog/ew/ew8.jpg";
import image9 from "@/public/catalog/ew/ew9.jpg";
import image10 from "@/public/catalog/ew/ew10.jpg";
import image11 from "@/public/catalog/ew/ew11.jpg";
import image12 from "@/public/catalog/ew/ew12.jpg";
import image13 from "@/public/catalog/ew/ew13.jpg";
import image14 from "@/public/catalog/ew/ew14.jpg";
import image15 from "@/public/catalog/ew/ew15.jpg";
import image16 from "@/public/catalog/ew/ew16.jpg";
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
  image12,
  image13,
  image14,
  image15,
  image16
];
export default function EwImgs() {
  return (
    <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0  ">
      {imageArray.map((src: StaticImageData, i: number) => (
        <Image
          className="w-1/2 lg:w-1/4 aspect-square  object-cover  ease-in-out duration-150 opacity-70 hover:opacity-100 "
          key={i}
          alt=""
          src={src}
          width="200"
          height="200"
        />
      ))}
    </div>
  );
}
  