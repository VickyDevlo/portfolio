export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 flex items-center justify-between border-t
     border-mist/15"
    >
      <span className="font-mono text-xs text-mistdim">© {currentYear}</span>
      <span className="font-mono text-xs text-ember">
        Developed by Pranav
      </span>
    </footer>
  );
};
