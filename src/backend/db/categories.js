import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All Genders",
    description:
      "Best And Comfortable Sneakers Available For All Genders",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "Best And Comfortable Sneakers Available For Women",
  },
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "Best And Comfortable Sneakers Available For Men",
  },
];
