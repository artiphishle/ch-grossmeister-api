# ch-grossmeister-api

Chess API built for grossmeister.ch

- Mongodb Atlas
- Mongoose
- Next.js

## Quickstart

**1. Environment variables\***

First: provide a `.env` file in the root directory, and add the environment:

```bash
MONGODB_URI={secret}
```

**2. Run the API**

```bash
# clean, build & run docker image
npm run do:clean
npm run do:build
npm run do:run

# visit: localhost:3001/api/opening
```

---

## API Endpoints

### ♟️ /api/game

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| POST   | /api/game          | Create a new game               |
| GET    | /api/game/[gameId] | Find game by \_id               |
| PATCH  | /api/game/[gameId] | Payload: `data: Partial<IGame>` |
| DELETE | /api/game/[gameId] | Delete game by \_id             |

### ♟️ /api/opening

As the opening book is added by administrators, users get only 'read' permissions to examine the immutable openings.

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| GET    | /api/opening/[fen] | Find opening by FEN string |

### ♟️ /api/user

As user authentication is handled using Clerk there is only a `GET` endpoint to retreive the logged user data.

| Method | Endpoint  | Description            |
| ------ | --------- | ---------------------- |
| GET    | /api/user | Returns logged in user |

## API Authentication

⚠️ Authentication is **bypassed**, everyone is the same mock user now.
