import React from 'react';
import { useParams } from 'react-router-dom';
import { PostItem } from '@components/Post';

export const Post = () => {
  const { id } = useParams();
  return (
    <div>
      <PostItem />
    </div>
  );
};
