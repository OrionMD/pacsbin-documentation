# Configuring Pacsbin integration

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
