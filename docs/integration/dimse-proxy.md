# DIMSE to DICOMweb proxy server

If your image archive has limited or no support for DICOMweb, you can use our
simple proxy server to translate incoming DICOMweb requests to DIMSE, and DIMSE
responses back to DICOMweb. This is an incomplete implementation of the
standard, serving specifically the purposes of the Pacsbin uploader, so do not
rely on this server for general purpose DIMSE to DICOMweb proxying.

This server can be installed on a local linux virtual machine at your
institution and configured to act as a DIMSE peer to forward requests to your
image archive.

## Quick start

- Download the latest release here:
[https://github.com/OrionMD/pacsbin-community/releases](https://github.com/OrionMD/pacsbin-community/releases)

::: info Supported OSes
For now, the build targets Red Hat Enterprise Linux (RHEL), but other linux
flavors, and probably also Windows could be supported in the future.
:::

- Copy the archive to `/opt` and extract it.
- Edit the configuration file in `/opt/rhel/config/example-config.jsonc` (See
  below for major configuration options).
- Rename the config file to `config.jsonc`
- Make the file at `/opt/rhel/setup-rhel.sh` executable by running `chmod +x ./setup-rhel.sh`
- Run `sudo ./setup-rhel.sh`

::: info
The setup script will install any dependencies, copy the configuration and
binary to their installation directory, create a systemd entry for the
application, and configure the firewall based on the configured ports.
:::

- Run `sudo systemctl start dicomweb-proxy` to start the server.
- Run `sudo systemctl status dicomweb-proxy` to check that the server started successfully.

More in-depth instructions are available within the release package in the
`INSTALL.md` and `README.md` files.

## Configuration

Here are the important configuration parameters:
```jsonc
{
  // Options are "dimse" or "dicomweb". "dimse" mode is the full dimse to dicomweb proxy mode.
  // "dicomweb" mode is for when your image archive does support dicomweb, but does not support
  // CORS header configuration. In "dicomweb" mode, requests will be forwarded transparently,
  // and responses will have CORS headers attached.
  "proxyMode": "dimse",

  // If the proxyMode is "dicomweb", these are your archive's dicomweb endpoints to forward
  // requests to.
  "dicomwebProxySettings": {
    "qidoForwardingUrl": "https://qido.example.com/qido",
    "wadoForwardingUrl": "https://wado.example.com/wado"
  },

  // If the proxyMode is "dimse", then we are translating incoming dicomweb
  // requests to DIMSE, sending to a peer DIMSE server, translating the response
  // back to dicomweb, and attaching the configured CORS headers to the response.
  "dimseProxySettings": {
    // This is the AET and IP:port of this proxy server, as it will appear to your image
    // archive. These details should be added to your archive's DIMSE configuration as a
    // known peer.
    "proxyServer": {
      "aet": "PACSBIN_PROXY",
      "ip": "0.0.0.0",
      "port": 8888
    },
    // This is the AET and IP:port of your DIMSE archive.
    "peers": [
      {
        "aet": "PACS_SERVER",
        "ip": "127.0.0.1",
        "port": 11112
      }
    ]
  },
  // Port to run the web server on that listens for incoming dicomweb requests. This is
  // the non-SSL (http) port. If SSL is configured, http requests will be automatically
  // forwarded to https at the port configured below (usually 443).
  "webserverPort": 3006,

  // Configuration for SSL (https)
  "ssl": {
    "enabled": false,
    "port": 443,
    // You must provide a certificate to enable SSL. The paths must be absolute.
    "certPath": "/opt/certs/server.crt",
    "keyPath": "/opt/certs/server.key",
    "generateSelfSigned": false,
    // Whether to automatically redirect http requests to https
    "redirectHttp": true
  },

  // CORS configuration
  "cors": {
    "origin": ["pacsbin.com"],
    "methods": ["GET", "OPTIONS"],
    "allowedHeaders": ["Content-Type", "Authorization", "Accept"],
    "credentials": true
  }
}
```

Credit to the amazing [pure javascript implementation of
DIMSE](https://github.com/PantelisGeorgiadis/dcmjs-dimse) by Pantelis Georgiadis
on which this application is built.