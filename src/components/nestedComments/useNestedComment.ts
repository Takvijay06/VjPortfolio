import { useCallback, useState } from "react";
import commentJson from "../../assets/json/comments.json";
import { IComment } from "./interface";

const useNestedComments = () => {
  const [comments, setComments] = useState<IComment[]>(commentJson);

  const insertComment = useCallback(
    (id: number, comments: any, content: string) => {
      const newComment = {
        id: new Date().getTime(),
        content: content,
        replies: [],
      };

      const updatedComments = comments.map((comment: any) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: [...comment.replies, newComment],
          };
        } else if (comment.replies) {
          return {
            ...comment,
            replies: insertComment(id, comment.replies, content),
          };
        } else {
          return comment;
        }
      });
      return updatedComments;
    },
    []
  );

  const deleteComment = useCallback((id: number, comments: any) => {
    return comments
      .filter((comment: IComment) => comment.id !== id)
      .map((comment: IComment) => ({
        ...comment,
        replies: deleteComment(id, comment.replies),
      }));
  }, []);

  return {
    comments,
    setComments,
    insertComment,
    deleteComment
  };
};

export default useNestedComments;
