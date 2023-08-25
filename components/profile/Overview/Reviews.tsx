import Brief from "./Brief";
import Contact from "./Contact";
import Employment from "./Employment";
import ReviewList from "./Review";

export interface IReview {}

const Review: React.FC<IReview> = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-6">
      <div className="col-span-3 flex flex-col gap-y-6 xl:col-span-2">
        <div>
          <Brief />
        </div>
        <div>
          <ReviewList />
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-y-6 xl:col-span-1">
        <div>
          <Contact />
        </div>
        <div>
          <Employment />
        </div>
      </div>
    </div>
  );
};

export default Review;
