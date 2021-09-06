import postgraphile from 'postgraphile';

const { default: FederationPlugin } = require('@graphile/federation');
export const postgraph = postgraphile(
  'postgres://postgres:javascript@localhost:5432/petfood',
  'public',
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    enableCors: true,
    appendPlugins: [FederationPlugin],
  },
);
