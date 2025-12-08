# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in waybackurls, please report it privately.

### How to Report

1. Do NOT open a public issue
2. Email the maintainer directly (see package.json for contact)
3. Include detailed information:
   - Type of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

### What to Expect

- Acknowledgment within 48 hours
- Assessment of the vulnerability
- Regular updates on progress
- Credit in release notes (if desired)

### Disclosure Policy

- Security issues will be fixed promptly
- A new version will be released
- Public disclosure after patch is available
- Credit given to reporter (unless anonymity requested)

## Security Best Practices

When using waybackurls:

- Keep the package updated to the latest version
- Review output before using URLs in production
- Be cautious with file output paths (avoid path traversal)
- Validate domain inputs in your applications
- Use error handling when integrating the library

## Dependencies

This package uses:
- axios (HTTP client)

We monitor dependencies for known vulnerabilities and update promptly when security issues are discovered.
