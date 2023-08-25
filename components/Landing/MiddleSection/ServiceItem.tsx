import { Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface IServiceItem {
  name: string;
  summary: string;
  title: string;
  description: string;
}

interface IServiceItemBar {
  data: IServiceItem;
  index: number;
}

const ServiceItem: React.FC<IServiceItemBar> = ({ data, index }) => {
  const { name, summary, title, description } = data;

  return (
    <div className="grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
      <div
        className={`flex flex-1 flex-col justify-center gap-y-2 px-10 py-5 text-left md:grid-flow-col  ${
          index % 2 === 0 ? "md:order-[-1]" : "md:order-1"
        } `}
      >
        <Text className="font-medium text-[#006CEB]">
          {name.toUpperCase()} - {summary.toUpperCase()}
        </Text>
        <Text className="text-2xl font-bold">{title}</Text>
        <Text>{description}</Text>
        <Link href={"#"} passHref className="mt-5">
          <Text className="font-semibold underline decoration-[#36A635] decoration-2 underline-offset-4">
            Learn more
          </Text>
        </Link>
      </div>
      <div
        className={`flex-1 px-10 py-5 md:grid-flow-col ${
          index % 2 === 0 ? "md:order-[1]" : "md:order[-1]"
        } `}
      >
        <Image
          className="w-full flex-1 rounded-xl border border-solid border-black transition-all hover:-translate-y-1 hover:scale-105"
          src={`/landing/${name}.png`}
          alt="landing"
        />
      </div>
    </div>
  );
};

export default ServiceItem;
