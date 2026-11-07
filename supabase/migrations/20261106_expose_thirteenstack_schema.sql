-- Expose the app schema to PostgREST so service-role API writes work.
-- Also confirm in Dashboard → Project Settings → Data API → Exposed schemas.
alter role authenticator set pgrst.db_schemas = 'public, graphql_public, thirteenstack';
notify pgrst, 'reload config';
notify pgrst, 'reload schema';
