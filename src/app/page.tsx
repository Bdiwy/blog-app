import Hero from "@/src/components/Hero";
import BlogCard from "@/src/components/BlogCard";
import { Blog } from "@/src/types/blog";

const fakeData: Blog[] = [
  {
    id: "1",
    title: "Welcome to My Blog!",
    description: "This is our first blog post using Next.js + TypeScript.",
    image: "https://picsum.photos/600/400?1",
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    title: "Welcome to Second Blog!",
    description: "This is our second blog post.",
    image: "https://picsum.photos/400/410?1",
    createdAt: "2025-01-02",
  }
];

export default function Home() {
  return (
    <>
      <Hero />

      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {fakeData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>
    </>
  );
}
