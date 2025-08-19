const Footer = () => {
  return (
    <footer className="border-t border-brand-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} MSc E-commerce website. All rights
          reserved.
        </p>
        <p className="text-sm text-gray-500">
          Built with React, Axios, and Tailwind CSS.{" "}
          <a
            href="https://github.com/ELMACHHOUNE"
            target="_blank"
            rel="noreferrer"
            className="text-brand-600 hover:opacity-90"
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
