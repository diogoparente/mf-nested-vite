# React - Vite Federation with federated dynamic pages

This example demos consumption of federated modules from a vite bundle. `host` (react based) depends on a component exposed by `remote` app (react based).

## Running

Install `pnpm` as per instructions provided [here](https://pnpm.io/installation)

Run `pnpm install`, then `pnpm start`. This will build and serve both `host` and `remote` on ports 5000, 5001 respectively.

- HOST: [localhost:5000](http://localhost:5000/)
  - REMOTE in HOST:
    - BASE_ROUTE[http://localhost:5000/apps/remote](http://localhost:5000/apps/remote)
    - BASE_ROUTE with dynamic params [http://localhost:5000/apps/remote/1](http://localhost:5000/apps/remote/1)
- REMOTE: [localhost:5001](http://localhost:5001/)

`CTRL + C` can only stop the host server. You can run `pnpm stop` to stop all services.
