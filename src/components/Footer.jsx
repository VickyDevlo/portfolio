export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-8xl px-6">
      <div className="border-t border-mist/15 py-6" role="contentinfo">
        <div className="text-center sm:flex-row">
          <p className="text-center sm:text-left font-mono text-xs text-mistdim">
            © {currentYear} Pranav Magare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
