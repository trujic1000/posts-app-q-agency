import { Link } from 'react-router-dom';

import { logMessage } from '@components/logMessage';
import { CommentsList } from '@components/comments-list';
import { Post } from 'types';
import styles from './style.module.css';

type Props = {
  post: Post;
  message?: string;
};

function PostItem({ post }: Props) {
  return (
    <div className={styles.post}>
      <div className={styles.postAuthor}>{post.user.name}</div>
      <Link to={`/post/${post.id}`} className={styles.postTitle}>
        {post.title}
      </Link>
      <div className={styles.postBody}>{post.body}</div>
      <CommentsList comments={post.comments} message='Hallo von' />
    </div>
  );
}

const PostItemWithLog = logMessage<Props>(PostItem);

export { PostItemWithLog as PostItem };
