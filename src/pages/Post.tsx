import { useParams } from 'react-router-dom';

import { PostItem } from '@components/post-item';
import { useApi } from 'hooks';
import { Post as PostType } from 'types';

export const Post = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useApi<PostType>(`/posts/${id}?_expand=user&_embed=comments`);

  return (
    <div style={{ maxWidth: '60rem', margin: '2rem auto' }}>
      {isLoading && <p>Loading...</p>}
      {!data && !isLoading && <p>Post not found</p>}
      {data && <PostItem post={data} />}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
