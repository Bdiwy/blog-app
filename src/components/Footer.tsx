export default function Footer() {
    return (
        <footer className="w-full bg-stone-800 text-white py-50 mt-100 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} MyBlog. All rights reserved.
            </p>
        </footer>
    );
}
