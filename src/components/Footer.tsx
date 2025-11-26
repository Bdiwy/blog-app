export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-6 mt-10 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} MyBlog. All rights reserved.
            </p>
        </footer>
    );
}
