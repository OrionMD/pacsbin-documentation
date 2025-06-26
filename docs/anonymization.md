# Patient information and anonymization

## Background

Medical images, and specifically DICOM formatted images by their very nature
contain a large amount of sensitive, personal information. The images generally
hold information about a real patient's body, diseases they may be suffering
from, surgeries they have undergone, or other anatomic peculiarities. This
information on its own is not necessarily sensitive, as a given image by itself
could be from anyone and simply shows anatomy, just as an image from a textbook
might.

However, DICOM image files also usually contain identifying information about
the patient from whom the images were obtained. Things like their name, sex,
date of birth, sometimes even address and telephone number, information known as
Personally Identifying Information (PII). These are obviously
things that most people would not want to be publically available, particularly
when linked to something as personal as images of your body. Medical PII is
considered so sensitive that in the United States, laws (HIPAA) protect its use.
Information protected under HIPAA is termed Protected Health Information (PHI).

This information is encoded in "headers" or "tags" contained within the image
files themselves. This is very important information to keep intact when using
these images in the context of health care. You would not want, through some
error or accident, to mix up whose images are whose.

However, in the educational or research settings, keeping the real patient
information is not necessary, and so we remove it through a process of
`de-identification` or `anonymization`.

#### De-identification vs anonymization

Generally, `de-identification` can be thought of as the process of removing
PII while preserving a pathway to _re-identification_. For example, an imaging
study may have the patient's name removed and replaced with a unique identifier,
one that is stored in a reference table elsewhere alongside the patient's real
name. That way, a researcher with the appropriate access may be able to go back
and figure out who the study belongs to. The images themselves, however, do not
contain sensitive information.

On the other hand, `anonymization` refers to the _irreversible_ removal of PII.
In this case, any identifying information in the images might be replaced with a
truly random identifier, or simply permanently deleted. The imaging study is
therefore _permanently divorced_ from the original patient.

#### Problems with anonymization

The process of de-identification and anonymization is not as simple as it
sounds, as there may be other ways of re-identifying an image as belonging to a
specific patient. For example, say a patient has a chest xray performed while
wearing a metal necklace in the shape of their name. Or, perhaps a patient has a
very rare congenital anatomic variant, or has had a new or uncommon procedure
performed that allows one to infer their identity. These issues make true
anonymization a thorny process, and one that still requires human guidance and
judgement to ensure the safety of PII.

## Pacsbin's approach

The Pacsbin platform strives to maintain a system free of any PHI or PII while
also making the process of uploading images as simple and streamlined as
possible. While ideally the anonymization process would be fully automated, this
is not currently possible. However, we do automate the most common and
complicated forms of anonymization.

### Local anonymization

The Pacsbin uploader is a web application that loads DICOM images from the
user's computer and performs the anonymization steps **in the browser, on the
user's own computer**, without sending the images to a server for processing.
Only after anonymization is complete, and the images have been reviewed by the
user for appropriate anonymization, will the images be sent via an encrypted
HTTPS request to the Pacsbin servers.

### DICOM header anonymization

The main place PII lives in DICOM images are the DICOM "headers" or "tags", bits
of data that are encoded alongside the image data in the file. The Pacsbin
uploader uses a system based on the [RSNA's CTP
anonymizer](https://mircwiki.rsna.org/index.php?title=The_CTP_DICOM_Anonymizer)
to perform automatic removal of sensitive data from the headers.

The header anonymizer implements DICOM standard [PS3.15 E.2 Basic Application
Level Confidentiality
Profile](https://dicom.nema.org/medical/dicom/current/output/html/part15.html#sect_E.2)
with the following options:
- Clean Pixel Data (allow manual redaction of burned-in PHI)
- Retain Longitudinal Temporal Information with Modified Dates Option (Dates are
  "hashed" according to a deterministic algorithm that will retain *relative*
  time differences between two studies, while not allowing the original true
  date/time to be recovered)

All "private" or non-standard headers are removed.

The full script used for header anonymization can be [found here](anonymization-script.md).

### Image redaction

One of the biggest challenges in DICOM anonymization is "burned in" PII, meaning
information (usually text) that has been written into the image itself. This
commonly includes ultrasound images, scanned physical documents, and
post-processed images. Because anything can be included in the pixel data of the
images, automatically removing PHI from the images themselves is nearly
impossible, and human intervention is needed.

The Pacsbin uploader contains built-in tools to view the images that will be
uploaded, and allow the user to manually redact (erase) areas of the images that
contain PII.


