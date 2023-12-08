import React from 'react';

import { logMessage } from '@components/logMessage';
import { PostItem } from '@components/post-item';
import { useApi, useInfiniteScroll, useDebounce } from 'hooks';
import { Post } from 'types';
import styles from './style.module.css';

function PostsList() {
  const [page, setPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState('');
  const userName = useDebounce(searchQuery);
  // Seems like deep filtering is not working (https://github.com/typicode/json-server/issues/584)
  // If it was working, I would append this to the end of the url &user.name_like=${userName}
  // Workaround would be to disable pagination and filter on the FE, but it's not optimal
  const { data, isLoading, error } = useApi<Post[]>(
    `/posts?_expand=user&_embed=comments&_page=${page}`
  );
  const [allPosts, setAllPosts] = React.useState<Post[]>([]);

  useInfiniteScroll(() => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  });

  // Reset page when userName changes
  // React.useEffect(() => {
  //   setPage(1);
  // }, [userName]);

  React.useEffect(() => {
    if (data && !isLoading) {
      setAllPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data, isLoading]);

  return (
    <div className={styles.postContainer}>
      {isLoading && <p>Loading...</p>}
      {allPosts.length === 0 && !isLoading && <p>No posts found</p>}
      {allPosts.length > 0 && (
        <>
          <input
            type='text'
            className={styles.inputField}
            placeholder='Search by user name...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {allPosts.map((post) => (
            <PostItem key={post.id} post={post} message='Hola de' />
          ))}
        </>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

const PostsListWithLog = logMessage(PostsList);

export { PostsListWithLog as PostsList };
