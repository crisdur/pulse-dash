import { Post } from "../types/post";
import { PostList } from "../components/PostLists";
import { SearchBar } from "../components/SearchBar";
import { Loader } from "../components/Loader";

interface HomePageProps {
  posts: Post[];
  loading: boolean;
  error: string | null;
  onSearch: (term: string) => void;
}

export const HomePage = ({ posts, loading, error, onSearch }: HomePageProps) => {
  if (loading) return <Loader />;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 border-4 border-black rounded-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
          PulseDash
        </h1>
        <SearchBar onSearch={onSearch} />
        <PostList posts={posts} />
      </div>
    </div>
  );
}; 