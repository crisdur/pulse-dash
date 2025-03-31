import { Post } from "../types/post";
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  postId: number;
}

const getColorByIndex = (id: number) => {
  const colors = [
    'bg-blue-50',
    'bg-green-50',
    'bg-yellow-50',
    'bg-pink-50',
    'bg-purple-50',
    'bg-indigo-50',
    'bg-orange-50',
    'bg-teal-50'
  ];
  return colors[id % colors.length];
};

const Card = ({ children, className = '', postId }: CardProps) => {
  const color = getColorByIndex(postId);
  return (
    <div className={`${color} rounded-lg border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col ${className}`}>
      {children}
    </div>
  );
};

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No se encontraron publicaciones.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} postId={post.id}>
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 line-clamp-5 mb-4 flex-grow">{post.body}</p>
            <div className="flex items-center text-sm text-gray-500 mt-auto">
              <span>Usuario {post.userId}</span>
              <span className="mx-2">•</span>
              <span>Publicación #{post.id}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
