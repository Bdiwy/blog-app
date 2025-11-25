import { Blog } from "../types/blog";

interface BlogCardProps {
    blog: Blog
}
export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
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
    );
}