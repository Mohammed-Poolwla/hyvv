import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export interface IServiceCard {
  imgList: string[];
  className?: string;
}

const CarouselView: React.FC<IServiceCard> = ({ imgList, className }) => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {imgList.map((item, i) => (
        <div key={i}>
          <img className={className ?? ""} alt="service image" src={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselView;
