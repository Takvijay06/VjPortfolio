import AddComment from "./addComment";
import Comment from "./comment";
import { addCommentLabel } from "./constant";
import useNestedComments from "./useNestedComment";

const NestedCommentSection = () => {
  const { comments, setComments } = useNestedComments();
  return (
    <div className="projects">
      <h1>Nested comments</h1>
      <AddComment
        id={0}
        label={addCommentLabel}
        comments={comments}
        setComments={setComments}
      />
      {comments.map((comment) => {
        const { id, content, votes, replies } = comment;
        return (
          <Comment
            id={id}
            content={content}
            votes={votes}
            replies={replies}
            comments={comments}
            setComments={setComments}
          />
        );
      })}
    </div>
  );
};

export default NestedCommentSection;
