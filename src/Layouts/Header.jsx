import { MdAccountCircle } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import Badge from "@mui/material/Badge";

export default function Header() {
  return (
    <div className="h-[70px] bg-black grid grid-cols-3 items-center px-5">
      <h1 className="font-semibold text-4xl line-through">
        T<span className="text-red-700">L</span>T
      </h1>
      <ul className="justify-self-center inline-flex">
        <li>Home</li>
        <li className="mx-3 sm:mx-8">Men</li>
        <li>Women</li>
      </ul>
      <div className="justify-self-end inline-flex">
        <MdAccountCircle color="white" size={20} className="mr-3" />
        <Badge badgeContent={4} color="primary">
          <IoIosCart color="white" size={20} />
        </Badge>
      </div>
    </div>
  );
}