## Fullstack API Developer Test

### Guidelines

Prerequisite:
- Node
- npm or Yarn (with npx)

#### Installation & Running
1. Run `yarn install` and/or `npm install`
2. Copy file `.env.example` to `.env` for application variables
3. Fill out the env variables and DB connection config based on your environment
4. Also fill out the `./config/config.json` same as `./src/config.ts` in the `dbConfig` variable 
5. Run the DB migration using command `npx sequelize-cli db:migrate`
6. Then Run the app using command `yarn dev` or `npm run dev`. For the default, The service will be available on `localhost:8080` on your local
7. You can visit `localhost:8080/api-docs` to see all the API docs.
