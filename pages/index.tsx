import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Welcome to ALX Project 2
        </h1>
        <p className="text-lg text-center text-gray-600 mt-4">
          This is a Next.js project with TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
