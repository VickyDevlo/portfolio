export const getColorClasses = (color) => {
  switch (color) {
    case "ember":
      return {
        text: "text-ember",
        bg: "bg-ember",
        border: "border-ember/30",
      };

    case "blue":
      return {
        text: "text-blue",
        bg: "bg-blue",
        border: "border-blue/30",
      };

    default:
      return {
        text: "text-mist",
        bg: "bg-mist",
        border: "border-mist/30",
      };
  }
};
