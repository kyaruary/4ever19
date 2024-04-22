import { config } from "@/config";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  src?: string | null;
  main?: boolean;
};

export function Cover(props: Props) {
  return (
    <div className={clsx("absolute left-0 right-0 top-0 -z-[1]", props.main ? "h-[60vh]" : "h-[18rem]")}>
      <Image width={920} height={192} src={props.src || config.cover} alt="cover" className="h-full w-full object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-n-1 backdrop-blur-[7.5px] bg-opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-n-1/[0.78] to-n-1"></div>
    </div>
  );
}
