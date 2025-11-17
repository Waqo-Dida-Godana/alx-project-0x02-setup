import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">ALX Project 2</h1>
      <nav className="mt-2">
        <Link href="/home" className="mr-4 text-white hover:underline">
          Home
        </Link>
        <Link href="/about" className="mr-4 text-white hover:underline">
          About
        </Link>
        <Link href="/posts" className="mr-4 text-white hover:underline">
          Posts
        </Link>
        <Link href="/users" className="text-white hover:underline">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
