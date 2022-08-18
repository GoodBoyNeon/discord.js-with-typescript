# Discord.js With Typescript

Want that strong-types and intellisense all over your Discord.js code? Then this is for you! I saw many people struggled with getting started developing discord bot using typescript, and I thought it will be good to share my apporach with you! You can use this template to get started with your own project.

---

## Getting Started - Installation

You can get started by cloning the repository using the following command:

```
git clone https://github.com/GoodBoyNeon/discord.js-with-typescript.git
```

Then, you can install the dependencies using the following command:

```
npm install
```

After all that done, you can use the following commands to run the bot:

```js
npm run start // Start the bot and compile the code to build folder
npm run build // Compile the code to a build folder
npm run dev // Run the bot without compiling
```

While developing or running the bot to production, consider using `npm run start` command to compile the code to build folder. This will speed up the development process.

> Note: the `src` folder is just there for development, the bot is running from the `build` folder. So if you were to add a hosting to the bot, use the `build` folder as the root folder.

---

## What are you starting with?

What do you get with the template? Let's find out! Thsi is what the file system will look like when you first clone it:

```
Root Folder/
├── src/
│   ├── configs/
│   │   └── Intents.ts
│   ├── events/
│   │   └── client/
│   │       └── ready.ts
│   ├── functions/
│   │   └── ValidateEnv.ts
│   └── index.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

From here, you can delete `.gitignore` and `README.md` and start coding! The porject is all yours! I'd love catching your creativty and progress as you go!

> Delete files only if you know what you're doing. Some files might require some changes if you delete/modify them!

---

## Some last words

**If you made this far in the tutorial, can I get a star on the repository? Also, make sure to check my other repositories, they might be helpful to you!**
