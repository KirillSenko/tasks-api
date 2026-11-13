# tasks-api

![CI](https://github.com/KirillSenko/tasks-api/actions/workflows/ci.yml/badge.svg)

Training REST API for lab work 5 "CI/CD pipeline in GitHub Actions"
(course "Software development and life cycle support tools").

## Run locally

```bash
npm ci
npm run lint
npm test
npm start
```

Endpoints: `GET /health`, `GET /tasks`, `POST /tasks`.
