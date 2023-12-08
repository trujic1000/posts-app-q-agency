import { logMessage } from '@components/logMessage';
import { CommentsList } from '@components/comments-list';
import { Post } from 'types';
import styles from './style.module.css';

type Props = {
  post: Post;
};

function PostItem({ post }: Props) {
  return (
    <>
      <div className={styles.postAuthor}>{post.user.name}</div>
      <div className={styles.postTitle}>{post.title}</div>
      <div className={styles.postBody}>{post.body}</div>
      <CommentsList comments={post.comments} />
    </>
  );
}

const PostItemWithLog = logMessage(PostItem);

export { PostItemWithLog as PostItem };
