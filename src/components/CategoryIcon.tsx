import { Category } from "../types";

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  let icon = "✨";
  switch (category) {
    case "housing":
      icon = "🏘️";
      break;
    case "travel":
      icon = "✈️";
      break;
    case "food":
      icon = "🍲";
      break;
    case "utilities":
      icon = "🔌";
      break;
    case "insurance":
      icon = "🛡️";
      break;
    case "healthcare":
      icon = "🏥";
      break;
    case "financial":
      icon = "🏘️";
      break;
    case "lifestyle":
      icon = "🕶️";
      break;
    case "entertainment":
      icon = "📽️";
      break;
    default:
      icon = "✨";
  }
  return <div>{icon}</div>;
}
