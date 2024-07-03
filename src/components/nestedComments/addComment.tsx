import { SetStateAction, useCallback, useState } from "react";
import useNestedComments from "./useNestedComment";
import { IAddCommentProps, IComment } from "./interface";
import { emptyString, textAreaPlaceholder } from "./constant";

const AddComment = (props: IAddCommentProps) => {
  const { id, comments, setComments, label, afterReply } = props;
  const [content, setContent] = useState<string>(emptyString);
  const { insertComment } = useNestedComments();

  const onChangeContent = useCallback(
    (e: { target: { value: SetStateAction<string> } }) => {
      setContent(e.target.value);
    },
    []
  );

  const onClickAddComment = useCallback(() => {
    const newComment: IComment = {
      id: new Date().getTime(),
      content: content,
      votes: 0,
      replies: [],
    };

    if (content) {
      if (!id) {
        setComments([newComment, ...comments]);
      } else {
        const updatedComments = insertComment(id, comments, content);
        setComments(() => updatedComments);
      }
      setContent(emptyString);
      afterReply && afterReply();
    }
  }, [afterReply, comments, content, id, insertComment, setComments]);

  return (
    <>
      <div className="comment">
        <div className="flex">
          <textarea
            rows={5}
            cols={150}
            onChange={onChangeContent}
            placeholder={textAreaPlaceholder}
            value={content}
          ></textarea>
          <button className="post-comment" onClick={onClickAddComment}>
            {label}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddComment;
