import { fakeData } from "@/src/lib/fakeApi";

interface BlogPageProps {
  params: { id: string };
}

export default function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params; // get id from params
  console.log("Server id:", params.id);

  const blog = fakeData.find(params => params.id === id);

  if (!blog) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Blog Not Found 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <span className="text-gray-500 text-sm block mb-4">
        Published: {new Date(blog.createdAt).toLocaleDateString()}
      </span>

      <p className="text-lg leading-8 text-gray-700">{blog.description}</p>

      <p className="mt-6 text-gray-600 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        feugiat sapien risus, sed lacinia odio gravida at. Donec vitae
        suscipit massa.
      </p>
    </div>
  );
}
