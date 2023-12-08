import React from 'react';

import { logMessage } from '@components/logMessage';
import { PostItem } from '@components/post-item';
import { useApi, useInfiniteScroll } from 'hooks';
import { Post } from 'types';
import styles from './style.module.css';

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

  return (
    <>
      {allPosts.map((post) => (
        <div key={post.id} className={styles.postContainer}>
          <PostItem post={post} />
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}

const PostsListWithLog = logMessage(PostsList);

export { PostsListWithLog as PostsList };
