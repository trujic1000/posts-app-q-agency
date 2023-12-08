import { logMessage } from '@components/logMessage';
import { Comment as CommentType } from 'types';
import styles from './style.module.css';

type Props = {
  comment: CommentType;
};

function Comment({ comment }: Props) {
  return (
    <div className={styles.comment}>
      <div className={styles.commentBody}>{comment.body}</div>
    </div>
  );
}

const CommentWithLog = logMessage(Comment);

export { CommentWithLog as Comment };
