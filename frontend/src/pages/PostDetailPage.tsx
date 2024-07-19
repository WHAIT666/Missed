import React from 'react';
import MainLayout from '../layouts/MainLayout';
import PostDetail from '../components/PostDetail';

const PostDetailPage: React.FC = () => {
  return (
    <MainLayout>
      <PostDetail />
    </MainLayout>
  );
};

export default PostDetailPage;
