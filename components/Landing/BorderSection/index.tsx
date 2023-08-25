import {
  Box,
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineLineChart,
  AiOutlineUserAdd,
} from "react-icons/ai";

import { formatNumber } from "../../../utils/functions/convert";

const BorderSection: React.FC<{}> = () => {
  const [launchBudget, setLaunchBudget] = useState<number>(0);
  const [avergePrice, setAvergePrice] = useState<number>(1);
  const [sales, setSales] = useState<number>(1);

  const handleLaunch = (value: number) => {
    setLaunchBudget(value);
  };

  const handlePrice = (value: number) => {
    setAvergePrice(value);
  };

  const handleSales = (value: number) => {
    setSales(value);
  };

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center bg-[#FFFA4C] py-10">
      <div className="flex flex-col items-center gap-y-7 ">
        <Text className="text-3xl font-bold">{"Go on and free yourself"}</Text>
        <div className="flex w-full flex-col gap-y-2 px-5 text-lg">
          <Box>
            <Text className="font-bold">{"Estimated lanuch budget"}</Text>
            <div className="px-1">
              <Slider
                aria-label="slider-ex-1"
                defaultValue={launchBudget}
                min={0}
                max={100000}
                onChange={handleLaunch}
              >
                <SliderTrack bg="#FFFFFF">
                  <SliderFilledTrack bg="#36A635" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
              </Slider>
              <Text className="-mt-1 text-lg font-semibold text-[#36A635]">
                ${formatNumber(launchBudget)}
              </Text>
            </div>
          </Box>

          <Box>
            <Text className="font-bold">{`What's the average price of what you want to sell?`}</Text>
            <div className="px-1">
              <Slider
                aria-label="slider-ex-1"
                defaultValue={avergePrice}
                min={1}
                max={1000}
                onChange={handlePrice}
              >
                <SliderTrack bg="#FFFFFF">
                  <SliderFilledTrack bg="#36A635" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
              </Slider>
              <Text className="-mt-1 text-lg font-semibold text-[#36A635]">
                ${formatNumber(avergePrice)}
              </Text>
            </div>
          </Box>

          <Box>
            <Text className="font-bold">
              {"How many sales do you think you will make a month?"}
            </Text>
            <div className="px-1">
              <Slider
                aria-label="slider-ex-1"
                defaultValue={sales}
                min={1}
                max={100}
                onChange={handleSales}
              >
                <SliderTrack bg="#FFFFFF">
                  <SliderFilledTrack bg="#36A635" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
              </Slider>

              <Text className="-mt-1 text-lg font-semibold text-[#36A635]">
                {formatNumber(sales)}
              </Text>
            </div>
          </Box>
        </div>

        <div className="grid grid-cols-1 rounded-lg border-r bg-white shadow-md sm:grid-cols-3">
          <div className="flex w-full rounded-t-lg bg-[#36A635] p-4 text-white sm:rounded-l-lg sm:rounded-tr-none">
            <div className="m-auto flex w-[140px] flex-col gap-y-2 text-center">
              <Text className="text-3xl font-bold">
                +${formatNumber(avergePrice * sales)}
              </Text>
              <Text className="text-lg">{"Monthly Income in 6 Months"}</Text>
            </div>
          </div>
          <div className="flex w-full justify-center p-4">
            <div className="m-auto flex flex-col gap-y-2 text-center">
              <Text className="text-xl font-bold">
                {"HYVV freedom journey"}
              </Text>
            </div>
          </div>
          <div className="flex w-full p-4">
            <div className="text-md m-auto flex flex-col gap-y-2 font-semibold">
              <Box
                display="flex"
                className="items-center gap-x-2 rounded-full bg-slate-100 px-3 py-2"
              >
                <AiOutlineClockCircle color="black" size={"20px"} />
                <Text>Save months in idea stage</Text>
              </Box>
              <Box
                display="flex"
                className="items-center gap-x-2 rounded-full bg-slate-100 px-3 py-2"
              >
                <AiOutlineLineChart size={"20px"} />
                <Text>Get to revenue quicker</Text>
              </Box>
              <Box
                display="flex"
                className="items-center gap-x-2 rounded-full bg-slate-100 px-3 py-2"
              >
                <AiOutlineUserAdd size={"20px"} />
                <Text>Build a micro-team of experts</Text>
              </Box>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Button
            colorScheme="whatsapp"
            style={{ width: 150, borderRadius: 100 }}
          >
            Try free
          </Button>
          <Button
            colorScheme="black"
            variant="outline"
            style={{ width: 150, borderRadius: 100 }}
            className="transition-all hover:bg-slate-100"
          >
            See demo
          </Button>
        </div>

        <Text className="text-md font-semibold">{"14 - days free trial"}</Text>
      </div>
    </div>
  );
};

export default BorderSection;
