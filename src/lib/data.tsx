import IconAdvanced from "../icons/IconAdvanced";
import IconArcade from "../icons/IconArcade";
import IconPro from "../icons/IconPro";
import { PlanCardPros } from "@/components/PlanCard";
import { Addon } from "@/types/Addon";

export const plans: Array<PlanCardPros> = [
  {
    icon: <IconArcade />,
    title: "arcane",
    price: 9,
  },
  {
    icon: <IconAdvanced />,
    title: "advanced",
    price: 12,
  },
  {
    icon: <IconPro />,
    title: "pro",
    price: 15,
  },
];

export const addons: Array<Addon> = [
  {
    title: "Online service",
    description: "Access to multiplayer",
    price: 1,
  },
  {
    title: "Large storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
