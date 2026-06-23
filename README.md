# Serverless Todo App — Frontend

Next.js 14 + TypeScript frontend for the serverless todo application, hosted on **AWS Amplify**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **aws-amplify v6** (Cognito authentication)
- **Axios** (API calls to API Gateway)
- **Zustand** (auth state)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/login/       # Login page
│   ├── (auth)/register/    # Register page
│   └── dashboard/          # Main task dashboard (protected)
├── features/
│   ├── auth/               # Login, Register, hooks, Cognito service
│   └── tasks/              # Task list, card, modal, hooks, API service
├── components/layout/      # Navbar
├── lib/                    # api.ts (axios), amplify-config.ts, utils, constants
├── store/                  # Zustand auth store
└── types/                  # Shared TypeScript types
test/                       # Jest unit tests
```

## Local Development

```bash
cp .env.local.example .env.local
# Fill in values from SAM stack outputs

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_AWS_REGION` | AWS region (e.g. `us-east-1`) |
| `NEXT_PUBLIC_USER_POOL_ID` | Cognito User Pool ID |
| `NEXT_PUBLIC_USER_POOL_CLIENT_ID` | Cognito App Client ID |
| `NEXT_PUBLIC_API_URL` | API Gateway base URL |

Set these in **Amplify Console → App settings → Environment variables** for hosted builds.

## Amplify Hosting

1. Connect this repository to AWS Amplify
2. Amplify auto-detects Next.js and uses `amplify.yml`
3. Set environment variables in the Amplify Console
4. Every push to `main` triggers an automatic redeploy

## Tests

```bash
npm test
```
