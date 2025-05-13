import { Header } from "@/components/header/Header";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <Header />
      <h1 className="text-5xl font-bold text-gray-800 animate-pulse">
        Coming Soon
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        We&lsquo;re working hard to bring you this page. Stay tuned!
      </p>
      <Link
        href="/"
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
