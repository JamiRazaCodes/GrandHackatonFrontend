import React from 'react';

function Homepage() {
  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome to our Website</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-4 pt-6">
        <section className="bg-white rounded shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">What we do</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </section>
        <section className="bg-white rounded shadow-md p-4 mt-4">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </section>
      </main>
      <footer className="bg-white py-4 mt-4">
        <p className="text-gray-600 text-center">
          &copy; 2023 Our Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Homepage;