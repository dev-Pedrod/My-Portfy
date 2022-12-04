// icons
import * as ai from "react-icons/ai";
import * as bi from "react-icons/bi";
import * as bs from "react-icons/bs";
import * as cg from "react-icons/cg";
import * as ci from "react-icons/ci";
import * as di from "react-icons/di";
import * as fi from "react-icons/fi";
import * as fa from "react-icons/fa";
import * as fc from "react-icons/fc";
import * as go from "react-icons/go";
import * as gi from "react-icons/gi";
import * as gr from "react-icons/gr";
import * as hi from "react-icons/hi";
import * as hi2 from "react-icons/hi2";
import * as im from "react-icons/im";
import * as io from "react-icons/io";
import * as io5 from "react-icons/io5";
import * as mid from "react-icons/md";
import * as ri from "react-icons/ri";
import * as sl from "react-icons/sl";
import * as si from "react-icons/si";
import * as tb from "react-icons/tb";
import * as ti from "react-icons/ti";
import * as tfi from "react-icons/tfi";
import * as vsc from "react-icons/vsc";
import * as wi from "react-icons/wi";

export interface IconProps {
  size: string | number;
  color: string;
  title?: string;
  name?: string;
  packageName: string;
}

export function iconPicker(iconProps: IconProps) {
  const props = {size: iconProps.size, color: iconProps.color}
  const pack = filterPackages(iconProps.packageName);
  let icon;
  if(iconProps.name){
    icon = pack.find(icon => icon.name === iconProps.name);
    return icon(props);
  }
  return pack;
}

export function filterPackages(packageName: string) {
  switch (packageName) {
    case "ai":
      return Object.values(ai);
    case "bi":
      return Object.values(bi)
    case "bs":
      return Object.values(bs)
    case "ci":
      return Object.values(ci)
    case "cg":
      return Object.values(cg)
    case "di":
      return Object.values(di)
    case "fi":
      return Object.values(fi)
    case "fa":
      return Object.values(fa)
    case "fc":
      return Object.values(fc)
    case "go":
      return Object.values(go)
    case "gi":
      return Object.values(gi)
    case "gr":
      return Object.values(gr)
    case "hi":
      return Object.values(hi)
    case "hi2":
      return Object.values(hi2)
    case "im":
      return Object.values(im)
    case "io":
      return Object.values(io)
    case "io5":
      return Object.values(io5)
    case "mid":
      return Object.values(mid)
    case "ri":
      return Object.values(ri)
    case "sl":
      return Object.values(sl)
    case "si":
      return Object.values(si)
    case "tb":
      return Object.values(tb)
    case "ti":
      return Object.values(ti)
    case "tfi":
      return Object.values(tfi)
    case "vsc":
      return Object.values(vsc)
    case "wi":
      return Object.values(wi)
    default:
      return null;
  }
}
