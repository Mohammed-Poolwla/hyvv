import { Skeleton } from "@chakra-ui/react";

const SkeletonBar: React.FC<{}> = () => {
  return (
    <div className="flex-1 px-6">
      {Array(4)
        .fill(0)
        .map((_, index: number) => (
          <div key={index}>
            <Skeleton height={"30px"} className="my-3 rounded-lg" key={index} />
            {Array(2)
              .fill(0)
              .map((_, index1: number) => (
                <Skeleton
                  height={"30px"}
                  className="my-3 ml-6 rounded-lg"
                  key={`t-${index1}`}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default SkeletonBar;
