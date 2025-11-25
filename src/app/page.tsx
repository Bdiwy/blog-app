import BlogCard from "../components/BlogCard";
import { Blog } from "../types/blog";

const fakeData: Blog[] = [
  {
    id: "1",
    title: "Welcome to My Blog!",
    description: "This is our first blog post using Next.js + TypeScript.",
    image: "https://picsum.photos/600/400?1",
    createdAt: "2025-01-01",
  },
];


export default function Home(){
    return (
        <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {fakeData.map((blog)=>(
                <BlogCard key={blog.id} blog={blog}/>
            ))}
        </main>
    );
}