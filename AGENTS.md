# IsoniaOS Theme Default Agent Rules

These rules apply to Codex and other AI agents working in `theme-default`.

When this repository is used inside the IsoniaOS workspace, read the workspace-level `../AGENTS.md` first, then return to this file for repository-specific instructions.

## Repository Purpose

`theme-default` is the public default theme package for IsoniaOS.

It may provide:

- design tokens;
- brand primitives;
- assets;
- component variants;
- layout defaults;
- theme documentation.

## Boundaries

Do not add:

- governance or protocol logic;
- Control Plane behavior;
- SDK client behavior;
- wallet logic;
- provider integrations;
- demo-stack launcher behavior;
- integration-lab fixtures;
- SaaS-only features;
- business rules or authority decisions.

Theme code must not become a source of governance authority.

## Versioning and Claims

- Keep package versions as SemVer without a leading `v`.
- Do not create Git tags automatically.
- Update `CHANGELOG.md` under `Unreleased` for user-visible theme changes.
- Do not introduce production, audit, public beta, SaaS, legal, provider-completeness, or ISO launch-readiness claims.

## Verification

For theme behavior changes, run the strongest relevant subset:

- `corepack pnpm lint`
- `corepack pnpm test`
- `corepack pnpm build`
- `git diff --check`

For AGENTS-only changes, `git diff --check` is sufficient.
