import image1 from "@/public/catalog/mecsup/mecsup1.jpg";
import image2 from "@/public/catalog/mecsup/mecsup2.jpg";
import image3 from "@/public/catalog/mecsup/mecsup3.jpg";
import image4 from "@/public/catalog/mecsup/mecsup4.jpg";
import image5 from "@/public/catalog/mecsup/mecsup5.jpg";
import image6 from "@/public/catalog/mecsup/mecsup6.jpg";
import image7 from "@/public/catalog/mecsup/mecsup7.jpg";
import image8 from "@/public/catalog/mecsup/mecsup8.jpg";
import image9 from "@/public/catalog/mecsup/mecsup9.jpg";
import image10 from "@/public/catalog/mecsup/mecsup10.jpg";
import image11 from "@/public/catalog/mecsup/mecsup11.jpg";
import image12 from "@/public/catalog/mecsup/mecsup12.jpg";
import image13 from "@/public/catalog/mecsup/mecsup13.jpg";
import image14 from "@/public/catalog/mecsup/mecsup14.jpg";
import image15 from "@/public/catalog/mecsup/mecsup15.jpg"
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
  image15
];
export default function Mecsup() {
  return (
    <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0  ">
      {imageArray.map((src: StaticImageData, i: number) => (
        <Image
          className="w-1/2 lg:w-1/4 aspect-square  object-cover  ease-in-out duration-150 opacity-70 hover:opacity-100 "
          key={i}
          alt=""
          src={src}
          width="300"
          height="300"
        />
      ))}
    </div>
  );
}
