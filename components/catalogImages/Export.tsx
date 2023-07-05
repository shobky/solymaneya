import image1 from "@/public/catalog/export/export1.jpg";
import image2 from "@/public/catalog/export/export2.jpg";
import image3 from "@/public/catalog/export/export3.jpg";
import image4 from "@/public/catalog/export/export4.jpg";
import image5 from "@/public/catalog/export/export5.jpg";
import image6 from "@/public/catalog/export/export6.jpg";
import Image, { StaticImageData } from "next/image";

const imageArray = [image1, image2, image3, image4, image5, image6];
export default function Export() {
  return (
    <div className="w-full lg:w-[60%] flex flex-wrap bg-black mt-12 lg:mt-0  ">
      {imageArray.map((src: StaticImageData, i: number) => (
        <Image
          className="w-1/2 lg:w-1/4 aspect-square  object-cover  ease-in-out duration-150 opacity-70 hover:opacity-100 "
          key={i}
          alt=""
          src={src}
          width="800"
          height="800"
        />
      ))}
    </div>
  );
}
