import image30 from "@/public/catalog/ew0.jpg";
import image1 from "@/public/catalog/ew1.jpg";
import image2 from "@/public/catalog/ew2.jpg";
import image3 from "@/public/catalog/ew3.jpg";
import image4 from "@/public/catalog/ew4.jpg";
import image5 from "@/public/catalog/ew5.jpg";
import image6 from "@/public/catalog/ew6.jpg";
import image7 from "@/public/catalog/ew7.jpg";
import image8 from "@/public/catalog/ew8.jpg";
import image9 from "@/public/catalog/ew9.jpg";
import image10 from "@/public/catalog/ew10.jpg";
import image11 from "@/public/catalog/ew11.jpg";
import image12 from "@/public/catalog/ew12.jpg";
import image13 from "@/public/catalog/ew13.jpg";
import image14 from "@/public/catalog/ew14.jpg";
import image15 from "@/public/catalog/ew15.jpg";
import image16 from "@/public/catalog/ew16.jpg";
import image17 from "@/public/catalog/ew17.jpg";
import image18 from "@/public/catalog/ew18.jpg";
import image19 from "@/public/catalog/ew19.jpg";
import image20 from "@/public/catalog/ew20.jpg";
import image21 from "@/public/catalog/ew21.jpg";
import image22 from "@/public/catalog/ew22.jpg";
import image23 from "@/public/catalog/ew23.jpg";
import image24 from "@/public/catalog/ew24.jpg";
import image25 from "@/public/catalog/ew25.jpg";
import image26 from "@/public/catalog/ew26.jpg";
import image27 from "@/public/catalog/ew27.jpg";
import image28 from "@/public/catalog/ew28.jpg";
import image29 from "@/public/catalog/ew29.jpg";
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
];
export default function EwImgs() {
  return (
    <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0 ">
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
