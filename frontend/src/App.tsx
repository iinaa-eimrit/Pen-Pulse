import { BrowserRouter, Route, Routes, useNavigate, Link } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Publish } from './pages/Publish';

function Header() {
  return (
    <header className="bg-white p-4 shadow-md text-center">
      <Link 
        to="/" 
        className="text-4xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 font-serif"
        style={{ fontFamily: "'Libre Baskerville', serif" }} // Inline style for font family
      >
        Pen & Pulse
      </Link>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cream to-tan text-gray-900">
      <h1 className="text-5xl font-bold mb-8 font-serif">Welcome to Our Platform</h1>
      <p className="text-lg max-w-2xl text-center mb-12 font-light leading-relaxed">
        Join Pen & Pulse to share your stories, ideas, and insights with a community that values impactful journalism
        and personal blogs. Get started today and be part of a network of changemakers and thought leaders.
      </p>
      <button
        onClick={handleGetStarted}
        className="px-8 py-4 bg-white text-brown-700 border border-gray-400 rounded-full shadow-sm hover:bg-brown-100 transition duration-300 transform hover:-translate-y-1"
      >
        Get Started
      </button>
      <div className="mt-16 max-w-4xl p-6 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-center font-serif">Why Pen & Pulse?</h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <strong className="font-serif">Easy-to-Use Blogging Tools:</strong> Craft engaging articles with a user-friendly editor that
            supports rich text and multimedia.
          </li>
          <li>
            <strong className="font-serif">Collaborative Journalism:</strong> Connect with like-minded writers and collaborate on
            investigative pieces, opinion articles, or creative storytelling.
          </li>
          <li>
            <strong className="font-serif">Audience Engagement:</strong> Interact with your readers through comments, likes, and shares to
            build a community around your work.
          </li>
          <li>
            <strong className="font-serif">Monetization Options:</strong> Monetize your content through subscriptions, tips, and advertising
            revenue.
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
