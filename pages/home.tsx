import React, { useState } from 'react';
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import { Post } from "../interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Welcome Card", content: "This is the welcome card on the home page." },
    { id: 2, title: "Info Card", content: "This card provides some information." },
    { id: 3, title: "Another Card", content: "Here's another card with different content." }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: Omit<Post, 'id'>) => {
    const post: Post = {
      id: posts.length + 1,
      ...newPost
    };
    setPosts([...posts, post]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Home Page
        </h1>
        <div className="text-center mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add New Post
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />
      </main>
    </div>
  );
}
