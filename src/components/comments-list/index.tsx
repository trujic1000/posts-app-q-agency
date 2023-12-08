import { logMessage } from '@components/logMessage';
import { Comment } from '@components/comment';
import { Comment as CommentType } from 'types';
import styles from './style.module.css';

type Props = {
  comments: CommentType[];
};

function CommentsList({ comments }: Props) {
  return (
    <>
      <div className={styles.commentsSection}>
        <h3 className={styles.commentsTitle}>Comments</h3>
        <div className={styles.commentsWrapper}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}

const CommentsListWithLog = logMessage(CommentsList);

export { CommentsListWithLog as CommentsList };
