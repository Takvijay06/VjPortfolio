import { useCallback, useMemo, useState } from "react";
import AddComment from "./addComment";
import useNestedComments from "./useNestedComment";
import { IComment, ICommentProps } from "./interface";
import { hideReplies, replyButtonLabel, replyLater, replyNow, showReplies } from "./constant";

const Comment = (props: ICommentProps) => {
  const { id, content, replies, comments, setComments, votes } = props;
  const [isReplying, setReplying] = useState<boolean>(false);
  const [showReply, setShowReply] = useState<boolean>(false);
  const { deleteComment } = useNestedComments();

  const replyTilte = useMemo((): string => {
    return isReplying ? replyLater : replyNow;
  }, [isReplying]);

  const afterReplying = useCallback(() => {
    setReplying(false);
    setShowReply(true);
  }, []);

  const onClickReply = useCallback(() => {
    setReplying(!isReplying);
  }, [isReplying]);

  const onClickShowHideButton = useCallback(() => {
    setShowReply(!showReply);
  }, [showReply]);

  const onClickDelete = useCallback(() => {
    const updatedComments = deleteComment(id, comments);
    setComments(updatedComments);
  }, [comments, deleteComment, id, setComments]);

  return (
    <>
      <div className="comment-box">
        <div className="comment-content">{content}</div>
        <div className="comment-content">Likes: {votes}</div>
        <div className="flex fun-buttons">
          <button onClick={onClickReply}>
            <span>{replyTilte}</span>
          </button>
          <button onClick={onClickDelete}>
            <span>Delete</span>
          </button>
          {replies.length && (
            <button onClick={onClickShowHideButton}>
              <span>{!showReply ? showReplies : hideReplies}</span>
            </button>
          )}
        </div>
      </div>

      {isReplying && (
        <AddComment
          id={id}
          label={replyButtonLabel}
          comments={comments}
          setComments={setComments}
          afterReply={afterReplying}
        />
      )}

      {showReply &&
        replies?.map((nestComment: IComment) => {
          const { id, content, votes, replies } = nestComment;
          return (
            <div className="nested-comments">
              <Comment
                id={id}
                content={content}
                votes={votes}
                replies={replies}
                comments={comments}
                setComments={setComments}
              />
            </div>
          );
        })}
    </>
  );
};

export default Comment;
