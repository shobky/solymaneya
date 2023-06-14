import Link from "next/link";
import electric from "@/public/products/electric.jpg";
import mechanical from "@/public/products/supplyMech.jpg";
import steemer from "@/public/products/steemer.jpg";
import staticPowder from "@/public/products/staticPowder.jpg";
import Image from "next/image";
export default function Catalog() {
  return (
    <div className=" mb-[35vh] min-h-[38rem]  mx-8 flex flex-col items-center gap-6 ">
      <p className="text-white p-4 rounded-full text-lg bg-[--primary] cursor-not-allowed w-32 box-border text-center">
        Services
      </p>
      <div className="flex  justify-center gap-3  flex-wrap">
        <div className=" w-[19rem]  shadow-lg ">
          <Image
            width="600"
            height="900"
            src={mechanical}
            alt=""
            className=" rounded-t-2xl object-cover w-full h-48 "
          />
          <div className=" border border-zinc-200   border-t-0 rounded-b-2xl p-3 h-72 grid">
            <p className="font-semibold text-2xl mb-4">Supply Works</p>
            <p>
              We offer a wide range of products and services in the field of
              supply, including:
            </p>
            <ul>
              <li className="text-[--primary]">High-quality ball bearings,</li>
              <li className="text-[--primary]">Water and oil pumps,</li>
              <li className="text-[--primary]">
                Variable speed drives and PLC units,
              </li>
            </ul>
            <Link href="/">And more...</Link>
          </div>
        </div>
        <div className=" w-[19rem] shadow-lg ">
          <Image
            width="250"
            height="250"
            src={staticPowder}
            alt=""
            className=" rounded-t-2xl object-cover w-full h-48 "
          />
          <div className=" border border-zinc-200   border-t-0 rounded-b-2xl p-3 h-72 grid">
            <p className="font-semibold text-2xl mb-4">Export</p>
            <p>
              We specialize in exporting various high-quality products,
              including:
            </p>
            <ul>
              <li className="text-[--primary]">
                Electrostatic powder coating for paints,
              </li>
              <li className="text-[--primary]">
                Aluminum sections coated with electrostatic paints
              </li>
            </ul>
            <Link href="/">And more...</Link>
          </div>
        </div>
        <div className=" w-[19rem] shadow-lg ">
          <Image
            width="250"
            height="250"
            src={steemer}
            alt=""
            className=" rounded-t-2xl object-cover w-full h-48 "
          />
          <div className=" border border-zinc-200   border-t-0 rounded-b-2xl p-3 h-72 grid">
            <p className="font-semibold text-2xl mb-4">Mechanical Work</p>
            <p>Our mechanical services include:</p>
            <ul>
              <li className="text-[--primary]">
                Manufacturing of fire suppression systems,
              </li>
              <li className="text-[--primary]">
                Manufacturing of transmission belts,
              </li>
              <li className="text-[--primary]">
                Manufacturing of manual and electric presses
              </li>
            </ul>
            <Link href="/">And more...</Link>
          </div>
        </div>
        <div className=" w-[19rem] shadow-lg ">
          <Image
            width="250"
            height="250"
            src={electric}
            alt=""
            className=" rounded-t-2xl object-cover w-full h-48 "
          />
          <div className=" border border-zinc-200   border-t-0 rounded-b-2xl p-3 h-72 grid">
            <p className="font-semibold text-2xl mb-4">Electrical Work</p>
            <p>We provide a wide range of electrical products, including:</p>
            <ul>
              <li className="text-[--primary]">
                Power factor correction panels,
              </li>
              <li className="text-[--primary]">
                Automatic Transfer Switch (ATS) panels,
              </li>
              <li className="text-[--primary]">Copper and aluminum cables,</li>
            </ul>
            <Link href="/">And more...</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
