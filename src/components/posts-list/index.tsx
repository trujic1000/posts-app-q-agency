import React from 'react';

import { logMessage } from '@components/logMessage';
import { useApi, useInfiniteScroll } from 'hooks';
import { Post } from 'types';
import styles from './posts-list.module.css';

function PostsList() {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, error } = useApi<Post[]>(
    `/posts?_expand=user&_embed=comments&_page=${page}`
  );
  const [allPosts, setAllPosts] = React.useState<Post[]>([]);

  useInfiniteScroll(() => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  });

  React.useEffect(() => {
    if (data && !isLoading) {
      setAllPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data, isLoading]);

  console.log('data', data);
  console.log('isLoading', isLoading);
  console.log('error', error);
  return (
    <>
      {allPosts.map((post) => (
        <div key={post.id} className={styles.postContainer}>
          <div className={styles.postAuthor}>{post.user.name}</div>
          <div className={styles.postTitle}>{post.title}</div>
          <div className={styles.postBody}>{post.body}</div>
          <div className={styles.commentsSection}>
            <h3 className={styles.commentsTitle}>Comments</h3>
            <div className={styles.commentsWrapper}>
              {post.comments.map((comment) => (
                <div key={`${post.id}_${comment.id}`} className={styles.comment}>
                  <div className={styles.commentBody}>{comment.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}

const PostsListWithLog = logMessage(PostsList);

export { PostsListWithLog as PostsList };
