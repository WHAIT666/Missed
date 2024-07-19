import React from 'react';
import MainLayout from '../layouts/MainLayout';
import CreatePost from '../components/CreatePost';

const CreatePostPage: React.FC = () => {
  return (
    <MainLayout>
      <CreatePost />
    </MainLayout>
  );
};

export default CreatePostPage;
