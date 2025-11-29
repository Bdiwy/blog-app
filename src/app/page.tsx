import Hero from "@/src/components/Hero";
import BlogCard from "@/src/components/BlogCard";
import { fakeData } from "@/src/lib/fakeApi";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {fakeData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />          
        ))}
      </main>
    </>
  );
}
