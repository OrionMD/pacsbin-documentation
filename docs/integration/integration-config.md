# Configuring Pacsbin integration

If your image archive fully supports DICOMweb, integrating with Pacsbin is very
straightforward. The following data is needed:

- A list of email addresses for approved user accounts to use the integration.
  These should be associated with the users' Pacsbin account.
- A name for the DICOMweb server.
- URL endpoints for QIDO and WADO requests, such as:

::: info Endpoint example
QIDO: http://example.edu/pacs/dicomweb/qido  
WADO: http://example.edu/pacs/dicomweb/wado
:::

Note that these two urls may be the same, depending on your archive's
configuration.

That's it!

## Common issues

### CORS

The uploader application is by necessity making cross-domain requests, from the
application domain (`pacsbin.com`) to the institution's domain (e.g.
`university.edu/qido`). Modern browsers impose security restrictions (the
[same-origin
policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy))
on these types of requests, and as such most likely the uploader application's
dicomweb requests will fail unless CORS ([Cross Origin Resource
Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) has been
configured. In order to comply with the same-origin policy, appropriate CORS
headers must be sent by the dicomweb server with the HTTP response.

The dicomweb server must allow cross-origin requests by setting the
[`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
header, either to wildcard `*` to allow requests from any domain, or to allow
the `pacsbin.com` domain specifically:

```
Access-Control-Allow-Origin: *

// or

Access-Control-Allow-Origin: https://pacsbin.com
```

If your image archive does not support this configuration, you will need to
either:

- Set up a simple reverse proxy (using something like Apache, Nginx, or Caddy)
  that can add these headers to all DICOMweb responses.
- Use our [proxy server](/integration/dimse-proxy) configured with `"proxyMode": "dicomweb"`