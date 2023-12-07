import React from 'react';
import { logMessage } from './logMessage';

function PostItem() {
  return <div>Post</div>;
}

const PostItemWithLog = logMessage(PostItem);

export { PostItemWithLog as PostItem };
