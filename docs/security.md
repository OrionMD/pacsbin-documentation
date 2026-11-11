# Security

Pacsbin does not maintain in-house infrastructure, and instead depends on major
cloud computing providers. This minimizes our operational overhead, and also
greatly improves the security of the platform, as these companies dedicate huge
resources to maintaining the security of their infrastructure. See the resources
listed below for specifics and certifications.

- Cloudflare hosts the Pacsbin application and API (Cloudflare Workers) and
  provides object storage (R2). Cloudflare is SOC2 compliant and has security
  documentation here: https://www.cloudflare.com/trust-hub/compliance-resources/

- Amazon Web Services (AWS) is used for object storage and email delivery
  (SES). SOC reports can be found here:
  https://aws.amazon.com/compliance/soc-faqs/

- Turso is used for database hosting. Security details can be found here:
  https://turso.tech/security

- Google is used as an optional sign-in provider (OAuth). Users who sign in
  with Google inherit the protections of their Google account, including
  multi-factor authentication. Security details can be found here:
  https://safety.google/

- Stripe is used for all billing transactions and no billing information is
  stored on Pacsbin servers. Their security details can be found here:
  https://stripe.com/docs/security

- Sentry is used for application error monitoring. Security details can be
  found here: https://sentry.io/security/
