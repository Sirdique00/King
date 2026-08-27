# Level 1 — Supabase Foundation

## Production contract

This document is the implementation contract for the Sadeeq AI V2 backend foundation.

### Core entities

- `owner_profiles`: the single platform owner identity and platform-level settings.
- `bots`: bot identity, status, configuration metadata and ownership.
- `bot_secrets`: hashed website/embed verification credentials; plaintext secrets are never stored.
- `bot_websites`: registered website origins for a bot, with status and revocation state.
- `bot_sessions`: short-lived, revocable website chat sessions/tickets.
- `ai_providers`: provider configuration metadata; privileged API credentials remain server-side.
- `bot_usage`: usage/accounting records for rate limiting and observability.
- `security_audit_logs`: security-sensitive events.

### Security invariants

1. The browser never receives privileged provider credentials or database service credentials.
2. A public iframe identifies a bot only by public Bot ID.
3. Secret ID verification happens server-side.
4. Secret IDs are never persisted in plaintext.
5. A website must be explicitly registered for a bot before normal chat access.
6. Website registration is tied to a normalized origin, not an arbitrary user-provided label.
7. Chat sessions are short-lived, scoped to bot + registered website, and revocable.
8. RLS is enabled on owner/customer data; privileged operations use controlled server-side functions.
9. Rate limits are enforced server-side.
10. Security-sensitive state changes produce audit records.
11. No client-side check is treated as authorization.
12. Revoked/suspended bots and revoked website sessions cannot continue chatting.

### Iframe flow

`public Bot ID -> first-visit verification -> Secret ID -> server verification -> origin registration -> short-lived session -> chat`

Returning visitors use a valid, unexpired session. Expired/revoked sessions are re-established server-side without exposing the Secret ID to the iframe source.

### Migration rule

Do not create production tables or destructive migrations until the final schema and RLS policies have been reviewed together. This contract is intentionally committed first so database implementation can be tested against a stable specification.
