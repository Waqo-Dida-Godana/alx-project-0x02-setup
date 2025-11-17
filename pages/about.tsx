import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          About Page
        </h1>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked!')}>
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked!')}>
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked!')}>
            Large Button
          </Button>
        </div>
      </main>
    </div>
  );
}
