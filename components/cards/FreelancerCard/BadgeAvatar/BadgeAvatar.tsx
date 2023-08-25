import React from "react";

import Image from "next/image";

export interface IBadgeAvatar {
  avatar: string;
  size?: number;
  isOnline: boolean;
  className?: string;
}

const BadgeAvatar: React.FC<IBadgeAvatar> = ({
  avatar,
  size,
  isOnline,
  className,
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        className="rounded-full"
        height={size ?? 42}
        width={size ?? 42}
        src={avatar}
        alt=""
      />
      <span
        className={`absolute left-${size !== undefined ? 10 : 7} top-0 h-[${
          size !== undefined ? 13 : 10
        }px] w-[${
          size !== undefined ? 13 : 10
        }px] rounded-full border border-white ${
          isOnline ? "bg-manage-green-dark" : "bg-gray-300"
        }`}
      ></span>
    </div>
  );
};

export default BadgeAvatar;
