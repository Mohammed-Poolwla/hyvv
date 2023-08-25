import { BsFillStarFill, BsStar } from "react-icons/bs";

interface IReviewState {
  mark: number;
  width?: string;
}

const Rating: React.FC<IReviewState> = ({ mark, width }) => {
  const stars: number =
    mark - Math.floor(mark) > 0.7 ? Math.ceil(mark) : Math.floor(mark) - 1;

  const star: Array<number> = [];

  for (let i = 0; i < 5; i++) {
    if (i <= stars) {
      star.push(1);
    } else {
      star.push(0);
    }
  }

  return (
    <div className="flex gap-x-1 text-[#FBB830]">
      {star.map((item, index) =>
        item === 1 ? (
          <BsFillStarFill key={index} size={width ?? "18px"} />
        ) : (
          <BsStar key={index} size={width ?? "18px"} color="#d2d2d2" />
        )
      )}
    </div>
  );
};

export default Rating;
