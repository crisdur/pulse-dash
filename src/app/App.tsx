import { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import { Post } from "../types/post";
import { HomePage } from "../pages/HomePage";

export const App = () => {
  const { posts, loading, error } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const handleSearch = (term: string) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.body.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  // Initialize filteredPosts with all posts
  useEffect(() => {
    if (posts.length > 0 && filteredPosts.length === 0) {
      setFilteredPosts(posts);
    }
  }, [posts, filteredPosts.length]);

  return (
    <HomePage
      posts={filteredPosts}
      loading={loading}
      error={error}
      onSearch={handleSearch}
    />
  );
};
