import image1 from "@/public/catalog/product/product1.jpg";
import image2 from "@/public/catalog/product/product2.jpg";
import image3 from "@/public/catalog/product/product3.jpg";
import image4 from "@/public/catalog/product/product4.jpg";
import image5 from "@/public/catalog/product/product5.jpg";
import image6 from "@/public/catalog/product/product6.jpg";
import image7 from "@/public/catalog/product/product7.jpg";
import image8 from "@/public/catalog/product/product8.jpg";
import image9 from "@/public/catalog/product/product9.jpg";
import image10 from "@/public/catalog/product/product10.jpg";
import image11 from "@/public/catalog/product/product11.jpg";
import image12 from "@/public/catalog/product/product12.jpg";
import image13 from "@/public/catalog/product/product13.jpg";
import image14 from "@/public/catalog/product/product14.jpg";
import image15 from "@/public/catalog/product/product15.jpg";
import image16 from "@/public/catalog/product/product16.jpg";
import image17 from "@/public/catalog/product/product17.jpg";
import image18 from "@/public/catalog/product/product18.jpg";
import image19 from "@/public/catalog/product/product19.jpg";
import image20 from "@/public/catalog/product/product20.jpg";
import image21 from "@/public/catalog/product/product21.jpg";
import image22 from "@/public/catalog/product/product22.jpg";
import image23 from "@/public/catalog/product/product23.jpg";
import image24 from "@/public/catalog/product/product24.jpg";
import image25 from "@/public/catalog/product/product25.jpg";
import image26 from "@/public/catalog/product/product26.jpg";
import image27 from "@/public/catalog/product/product27.jpg";
import image28 from "@/public/catalog/product/product28.jpg";
import image29 from "@/public/catalog/product/product29.jpg";
import image30 from "@/public/catalog/product/product30.jpg";
import image31 from "@/public/catalog/product/product31.jpg";
import image32 from "@/public/catalog/product/product32.jpg";
import image33 from "@/public/catalog/product/product33.jpg";
import image34 from "@/public/catalog/product/product34.jpg";
import image35 from "@/public/catalog/product/product35.jpg";
import image36 from "@/public/catalog/product/product36.jpg";
import image37 from "@/public/catalog/product/product37.jpg";
import image38 from "@/public/catalog/product/product38.jpg";
import image39 from "@/public/catalog/product/product39.jpg";
import image40 from "@/public/catalog/product/product40.jpg";
import image41 from "@/public/catalog/product/product41.jpg";
import image45 from "@/public/catalog/product/product45.jpg";
import image46 from "@/public/catalog/product/product46.jpg";
import image47 from "@/public/catalog/product/product47.jpg";
import image48 from "@/public/catalog/product/product48.jpg";
import image49 from "@/public/catalog/product/product49.jpg";
import image50 from "@/public/catalog/product/product50.jpg";
import image51 from "@/public/catalog/product/product51.jpg";
import image52 from "@/public/catalog/product/product52.jpg";
import image53 from "@/public/catalog/product/product53.jpg";
import image54 from "@/public/catalog/product/product54.jpg";
import image55 from "@/public/catalog/product/product55.jpg";
import image56 from "@/public/catalog/product/product56.jpg";
import image57 from "@/public/catalog/product/product57.jpg";

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
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
];
export default function OurProduct() {
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
