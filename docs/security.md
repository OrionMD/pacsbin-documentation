# Security

Pacsbin does not maintain in-house infrastructure, and instead depends on major
cloud computing providers. This minimizes our operational overhead, and also
greatly improves the security of the platform, as these companies dedicate huge
resources to maintaining the security of their infrastructure. See the resources
listed below for specifics and certifications.

- The Pacsbin platform uses Digital Ocean as a cloud VM provider. Digital
  Ocean data security report can be found here:
  https://www.digitalocean.com/trust, and certifications here:
  https://www.digitalocean.com/trust/certification-reports, including SOC2
  compliance at all US data centers.

- The Pacsbin platform uses Cloudflare as a cloud application server and storage
  provider. Cloudflare is SOC2 compliant and has security documentation here:
  https://www.cloudflare.com/trust-hub/compliance-resources/

- Amazon Web Services (AWS) is used for object storage and some data processing
  pipelines. SOC reports can be found here:
  https://aws.amazon.com/compliance/soc-faqs/

- MongoDB Atlas is used for database hosting. SOC compliance can be found here:
  https://www.mongodb.com/cloud/trust/compliance/soc
  
- Stripe is used for all billing transactions and no billing information is
  stored on Pacsbin servers. Their security details can be found here:
  https://stripe.com/docs/security
