# Sadeeq AI V2 — Progress Ledger

This file is the persistent continuation point for the project.

## Current status

- Level 0 — Architecture & Contracts: **LOCKED / COMPLETE**
- Level 1 — Supabase Foundation & Security: **IN PROGRESS**
- Next implementation gate: **verified Supabase project connection, then real schema + RLS + RPC migration**.

## Safety rule

Before every level is marked complete:

1. Implement the change.
2. Re-read the changed files.
3. Check dependencies and references from previous levels.
4. Check that the change does not regress existing behavior.
5. Check security and failure paths.
6. Verify the implementation can support the next level.
7. Commit only after those checks pass.
8. Update this ledger.

## Level 1 foundation contract

Required backend entities:

- owner_profiles
- bots
- bot_secrets
- bot_websites
- bot_sessions
- ai_providers
- bot_usage
- security_audit_logs

Required invariants:

- No privileged secrets in frontend code.
- Secret IDs are hashed at rest.
- Iframe carries public Bot ID only.
- Secret verification is server-side.
- Website authorization is tied to a normalized origin and bot.
- Sessions are short-lived and revocable.
- RLS protects application data.
- Public operations use narrow server-side functions.
- Rate limiting and security logging are server-side.
- Suspended/revoked bots and websites cannot continue sessions.

## Important

The SQL file currently committed is a reviewed migration contract, not an executed migration. Do not mark Level 1 complete until the exact Supabase project is verified and the real migration has been applied and tested.
