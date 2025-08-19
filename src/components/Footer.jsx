const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} MSc E-commerce website. All rights
          reserved.
        </p>
        <p className="text-sm text-gray-400">
          Built with React, Axios, and Tailwind CSS.{" "}
          <a
            href="https://github.com/ELMACHHOUNE"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-700"
            title="ELMACHHOUNE on GitHub"
          >
            GitHub: @ELMACHHOUNE
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
