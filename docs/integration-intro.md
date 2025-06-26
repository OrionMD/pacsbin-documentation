# Integrating the Pacsbin uploader with your institution's PACS

While drag-and-drop upload of DICOM files works well for users who have access
to the DICOM files of their studies, not everyone has this access. In
particular, many hospitals lock down access to the raw DICOM files in the PACS
system due to security concerns.

Thanks to the addition of new web-based image transfer protocols to the DICOM
standard (DICOMweb), we have the ability to directly integrate the Pacsbin web uploader
with institutional PACS systems.

## DICOMweb

DICOMweb defines methods to query (QIDO-RS), retrieve (WADO-RS), and store
(STOW-RS) DICOM files via HTTP(S) requests. This allows a web application, in
this case the Pacsbin uploader, to directly send queries to a PACS image
archive, retrieve images directly in the browser, and process them on-premise on
the user's workstation. This means that all processing and anonymization of
images can be done on-premise, on the institution's own network, without having to
send images to an unknown cloud server for processing.

This also means that no separate on-premise server needs to be provisioned,
configured, and maintained. The uploader application is served directly to the
user's web browser, and the browser then issues requests directly to the PACS
archive via DICOMweb HTTP requests.

## Getting started

As this integration requires valid QIDO and WADO HTTP endpoints, these
integrations are set up with the assistance of your hospital or institution's
Radiology IT administrators. If you are interested in setting up an integration,
please contact your IT administrators to start the process, and reach out to us
at contact@pacsbin.com