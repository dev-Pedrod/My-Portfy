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
import * as rx from "react-icons/rx";
import * as sl from "react-icons/sl";
import * as si from "react-icons/si";
import * as tb from "react-icons/tb";
import * as ti from "react-icons/ti";
import * as tfi from "react-icons/tfi";
import * as vsc from "react-icons/vsc";
import * as wi from "react-icons/wi";

// types
import {IconType} from "react-icons";

export interface IconProps {
  size: string | number;
  color: string;
  title?: string;
  name?: string;
  packageName: string;
}

export function iconPicker(iconProps: IconProps):  [string, IconType][] {
  const props = {size: iconProps.size, color: iconProps.color}
  const pack = filterPackages(iconProps.packageName);
  let icon;
  if(iconProps.name){
    icon = pack.find(icon => icon[0] === iconProps.name);
    return icon(props);
  }
  return pack;
}

function filterPackages(packageName: string) {
  switch (packageName) {
    case "ai":
      return Object.entries(ai);
    case "bi":
      return Object.entries(bi)
    case "bs":
      return Object.entries(bs)
    case "ci":
      return Object.entries(ci)
    case "cg":
      return Object.entries(cg)
    case "di":
      return Object.entries(di)
    case "fi":
      return Object.entries(fi)
    case "fa":
      return Object.entries(fa)
    case "fc":
      return Object.entries(fc)
    case "go":
      return Object.entries(go)
    case "gi":
      return Object.entries(gi)
    case "gr":
      return Object.entries(gr)
    case "hi":
      return Object.entries(hi)
    case "hi2":
      return Object.entries(hi2)
    case "im":
      return Object.entries(im)
    case "io":
      return Object.entries(io)
    case "io5":
      return Object.entries(io5)
    case "mid":
      return Object.entries(mid)
    case "ri":
      return Object.entries(ri)
    case "rx":
      return Object.entries(rx)
    case "sl":
      return Object.entries(sl)
    case "si":
      return Object.entries(si)
    case "tb":
      return Object.entries(tb)
    case "ti":
      return Object.entries(ti)
    case "tfi":
      return Object.entries(tfi)
    case "vsc":
      return Object.entries(vsc)
    case "wi":
      return Object.entries(wi)
    default:
      return null;
  }
}
