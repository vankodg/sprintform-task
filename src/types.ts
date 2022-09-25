export type Category =
  | "housing"
  | "travel"
  | "food"
  | "utilities"
  | "insurance"
  | "healthcare"
  | "financial"
  | "lifestyle"
  | "entertainment"
  | "miscellaneous";

export type Currency = "HUF" | string;

export type Transaction = Readonly<{
  id: number;
  summary: string;
  category: Category;
  sum: number;
  currency: Currency;
  paid: Date;
}>;
