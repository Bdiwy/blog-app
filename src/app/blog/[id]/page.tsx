import { Blog } from "@/src/types/blog";

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  const { id } = params;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Details</h1>

      <p className="text-gray-600 mb-2">
        Viewing Blog with ID: <span className="font-semibold">{id}</span>
      </p>

      {/* هنا هنضيف باقي التفاصيل بعد ما نربطها بالـ API */}
    </main>
  );
}
