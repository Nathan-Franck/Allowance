
const ingredients = {
    "salt": "🧂",
    "pepper": "🧂",
    "eggs": "🥚",
    "whole wheat bread slices": "🍞",
    "bacon": "🥓",
    "butter": "🧈",
    "water": "💧",
} as const;

const tags = [
    "breakfast",
    "lunch",
    "supper",
    "meme",
] as const;

const supplies = [
    "frying pan",
    "small pot",
    "large pot",
    "slow cooker",
] as const;

const quantifiableSteps = {
    "boil water": {
        amount: "1 cup",
        time: "1 hour",
    },
    "fry egg": {
        amount: 1,
        time: "10 minutes",
    }
} as const;

type Ingredients = keyof typeof ingredients;

type Time =
    | `1 hour`
    | `${number} hours`
    | `1 minute`
    | `${number} minutes`
    | `1 second`
    | `${number} seconds`;

type Quantity =
    | `1 teaspoon`
    | `${number} teaspoons`
    | `1 tablespoon`
    | `${number} tablespoons`
    | `1 cup`
    | `${number} cups`
    | `${number} g`
    | `${number} ml`
    | number;

type Recipe = {
    tags: typeof tags[number][],
    supplies: typeof supplies[number][],
    ingredients: { [key in Ingredients]?: Quantity },
    directions: string[],
    serves: 1 | 2 | 3 | 4,
    time: Time,
}

const recipes: {
    [key: string]: Recipe
} = {
    "Salt and Pepper Treat": {
        tags: ["meme"],
        supplies: [],
        ingredients: {
            salt: "1 teaspoon",
            pepper: "1 teaspoon",
        },
        directions: [
            "Grind pepper onto plate",
            "Grind salt onto place",
        ],
        serves: 1,
        time: "5 seconds",
    },
    "Bacon and Eggs for Breakfast!": {
        tags: ["breakfast"],
        supplies: ["frying pan"],
        ingredients: {
            "eggs": 2,
            "bacon": 1,
            "whole wheat bread slices": 1,
            "butter": "1 teaspoon",
        },
        directions: [
            "Put whole wheat bread in toaster",
            "On frying pan, heat bacon until pan is covered in bacon grease",
            "Crack eggs and add to pan beside bacon, let cook until desired yolk hardness",
            "Add butter, bacon and eggs on toast",
        ],
        serves: 1,
        time: "20 minutes",
    }
}

const todo = [
    "Thai beef bowl",
    "Chicken with Mushroom Pan Sauce",
    "Italian Sausage & Mozzarella Calzone",
    "Curried Turkey",
    "Baked Feta with Harissa Spiced Tomato Sauce",
    "Creamy Mushroom Pasta",
    "Thai Golden Lentil Curry",
    "Moroccan Salmon Couscous Bowl",
    "Spicy Caribbean Beef Tacos",
    "Curried Chicken Naan Wraps",
    "Bavarian Style Pork Chops",
    "Honey-Sriracha Cauliflower Poke Bowl",
    "Italian Lasagna Soup",
    "Cheesy Turkey Melts",
    "Irish Pork & Potato Stew",
];