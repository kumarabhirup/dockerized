# 🏄 dockerized

[![emoji-log](https://cdn.jsdelivr.net/gh/ahmadawais/stuff@ca978741836412b5e33ce8561f5f95c933177067/emoji-log/flat.svg)](https://github.com/KumarAbhirup/Emoji-Log/)
[![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)

## 📦 Setup

### 🖥️ Development environment

- Run

```bash
git clone https://github.com/KumarAbhirup/dockerized dockerized # to clone project
cd dockerized # enter in the project
docker-compose up
```

- Rename all the `.env.example` to `.env`.

- Create a `.env` file in the root of the directory.

- Visit `http://localhost:3000/`

### ⚒️ Linting

#### In VSCode

- Install ESLint and Prettier VSCode extensions.
- **Done! Now you have live linting and autofixing setup!**

#### In Any other IDE

- Run `yarn lint` in indivisual `packages` to check for linting errors.
- Run `yarn lint:fix` to fix the linting errors.

## 🦄 Info

- We are following the micro-services architechture. That means, to install npm modules, you'll have to run `yarn add` in the respective packages.
- To customize the linter, use `.eslintrc` and `.prettierrc` file. [Learn more](https://eslint.org)

## 📝 License

**MIT &copy; Kumar Abhirup**

Created by [Kumar Abhirup](https://kumar.now.sh) 👉 [![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/).

Peace ✌️
