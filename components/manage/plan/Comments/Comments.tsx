import React, { Dispatch, SetStateAction, useState } from "react";

import { Avatar, Input, Text } from "@chakra-ui/react";

import MessageIcon from "../../../icons/MessageIcon";

export interface CommentItem {
  avatar: string;
  name: string;
  date: string;
  comment: string;
}

export interface IComments {
  comments: Array<CommentItem>;
  setComments: Dispatch<SetStateAction<CommentItem[]>>;
}

const Comments: React.FC<IComments> = ({ comments, setComments }) => {
  const [newcomment, setNewcomment] = useState("");

  const addComment = (e) => {
    if (e.key === "Enter") {
      comments.push({
        avatar: "/avatar1.png",
        name: "David Lee",
        date: "May 7, 2023 at 1:30 PM",
        comment: newcomment,
      });

      setComments([...comments]);
    }
  };

  return (
    <div>
      <div className="flex">
        <MessageIcon className="mt-auto mb-auto mr-1" />
        <Text fontSize="16px" className="font-semibold text-hyvv-title-1">
          Comments ({comments.length})
        </Text>
      </div>
      <div className="mt-4 mb-4 flex">
        <Avatar
          name="David Lee"
          src="/avatar1.png"
          size="sm"
          className="mt-auto mb-auto mr-2"
        />
        <Input
          variant="filled"
          placeholder="Add new Comment"
          value={newcomment}
          onKeyDown={addComment}
          onChange={(e) => setNewcomment(e.target.value)}
        />
      </div>
      {comments.map((comment, index) => {
        return (
          <div className="mb-4 flex" key={index}>
            <Avatar
              src={comment.avatar}
              name={comment.name}
              size="sm"
              className="mt-auto mb-auto"
            />
            <div className="ml-2">
              <div className="flex">
                <Text
                  fontSize="14px"
                  className="mr-4 font-semibold text-hyvv-title-2"
                >
                  {comment.name}
                </Text>
                <Text fontSize="14px" className="text-hyvv-description">
                  {comment.date}
                </Text>
              </div>
              <Text fontSize="14px" className="font-Manrope text-hyvv-title-2">
                {comment.comment}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
