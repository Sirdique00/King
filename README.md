# Sadeeq AI V2

Production-first AI bot platform.

## Architecture contract

- Real production backend and database; no local/mock-only implementation.
- Owner-only administration.
- Server-side AI provider calls; privileged provider secrets never belong in frontend code.
- Centralized runtime configuration; no scattered hard-coded credentials.
- Bot identity is separate from website authorization.
- Iframe embeds contain a public Bot ID only.
- First-time website access verifies a Secret ID and registers the requesting website origin.
- Registered websites use revocable, short-lived secure tickets/sessions.
- Authorization is enforced server-side and backed by database RLS.
- Rate limits and abuse controls are server-side.
- No duplicate patch files or parallel handlers for the same responsibility.
- Each level is implemented and verified before the next level is locked.

## Build levels

1. Architecture and contracts
2. Supabase foundation and security
3. Owner authentication
4. Dashboard shell
5. Bot management
6. AI provider/runtime
7. Website registration and iframe
8. Chat runtime
9. Owner tools and observability
10. Security hardening
11. End-to-end testing and production cleanup

## V2 rule

The repository is the source of truth. Do not introduce temporary/demo implementations merely to make a screen appear functional. If a feature requires backend support, implement the real backend contract before treating the feature as complete.
