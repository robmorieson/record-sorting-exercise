# Record Sorting Exercise

To run locally, `yarn`, then `yarn dev`.

### Built using

- Next.js bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- TypeScript
- Emotion with `styled` syntax
- Jest and React Testing Library

To circumvent CORS limitation data is fetched from the API during the build stage via Next's `getStaticProps` function. This has the added benefit of making the site full SSG.

For testing, run `yarn test`
