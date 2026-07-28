const VARIANTS = {
  ember: { border: "border-emberdim", bg: "bg-ember/10", text: "text-paper" },
  blue: { border: "border-bluedim", bg: "bg-blue/10", text: "text-paper" },
  mist: { border: "border-mistdim", bg: "bg-mist/10", text: "text-paper" },
};

export const Chip = ({ children, color = "mist" }) => {
  const v = VARIANTS[color] || VARIANTS.mist;
  return (
    <span
      className={`chip text-sm px-3 py-1.5 rounded-full border ${v.border} ${v.bg} ${v.text} inline-block`}
    >
      {children}
    </span>
  );
}