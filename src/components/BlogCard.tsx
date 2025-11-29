import Link from "next/link";
import { Blog } from "@/src/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  console.log(blog.id);
  return (
    
    <Link href={`/blog/${blog.id}`}>

      <div className="p-6 border rounded-xl bg-stone-900 shadow-lg hover:shadow-md transition cursor-pointer">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{blog.description}</p>

        <span className="text-xs text-gray-400">
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
}
