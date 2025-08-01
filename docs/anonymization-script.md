# Full Pacsbin uploader DICOM header anonymization script

For reference, see the full anonymization script below. The "operations" (e.g.
`keep`, `hashdate`, etc) follow the usage defined in the [RSNA CTP anonymizer documentation](https://mircwiki.rsna.org/index.php?title=The_CTP_DICOM_Anonymizer).

```
{
    "variables": [
        {
            "name": "DATEINC",
            "value": "-137"
        },
        {
            "name": "PROFILENAME",
            "value": "DICOM-PS3.15E-Basic"
        },
        {
            "name": "PROJECTNAME",
            "value": "Project"
        },
        {
            "name": "SHORTNAME",
            "value": "Project"
        },
        {
            "name": "UIDROOT",
            "value": "1613192914"
        }
    ],
    "rules": [
        {
            "enabled": true,
            "tag": "00080005",
            "name": "SpecificCharacterSet",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080008",
            "name": "ImageType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00080012",
            "name": "InstanceCreationDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00080013",
            "name": "InstanceCreationTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00080014",
            "name": "InstanceCreatorUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00080016",
            "name": "SOPClassUID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00080018",
            "name": "SOPInstanceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00080020",
            "name": "StudyDate",
            "operation": {
                "operationName": "hashdate",
                "operationParameters": [
                    "this",
                    "PatientID"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00080021",
            "name": "SeriesDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080022",
            "name": "AcquisitionDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080023",
            "name": "ContentDate",
            "operation": {
                "operationName": "hashdate",
                "operationParameters": [
                    "this",
                    "PatientID"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00080024",
            "name": "OverlayDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080025",
            "name": "CurveDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0008002a",
            "name": "AcquisitionDatetime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080030",
            "name": "StudyTime",
            "operation": {
                "operationName": "empty"
            }
        },
        {
            "enabled": true,
            "tag": "00080031",
            "name": "SeriesTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080032",
            "name": "AcquisitionTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080033",
            "name": "ContentTime",
            "operation": {
                "operationName": "empty"
            }
        },
        {
            "enabled": true,
            "tag": "00080034",
            "name": "OverlayTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080035",
            "name": "CurveTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080050",
            "name": "AccessionNumber",
            "operation": {
                "operationName": "hash",
                "operationParameters": [
                    "this",
                    "16"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00080052",
            "name": "QueryRetrieveLevel",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080054",
            "name": "RetrieveAET",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080056",
            "name": "InstanceAvailability",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00080058",
            "name": "FailedSOPInstanceUIDList",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00080060",
            "name": "Modality",
            "operation": {
                "operationName": "require"
            }
        },
        {
            "enabled": false,
            "tag": "00080061",
            "name": "ModalitiesInStudy",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080064",
            "name": "ConversionType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080068",
            "name": "PresentationIntentType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00080070",
            "name": "Manufacturer",
            "operation": {
                "operationName": "empty"
            }
        },
        {
            "enabled": true,
            "tag": "00080080",
            "name": "InstitutionName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080081",
            "name": "InstitutionAddress",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080082",
            "name": "InstitutionCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080090",
            "name": "ReferringPhysicianName",
            "operation": {
                "operationName": "empty"
            }
        },
        {
            "enabled": true,
            "tag": "00080092",
            "name": "ReferringPhysicianAddress",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080094",
            "name": "ReferringPhysicianPhoneNumbers",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00080096",
            "name": "ReferringPhysiciansIDSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00080100",
            "name": "CodeValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080102",
            "name": "CodingSchemeDesignator",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080103",
            "name": "CodingSchemeVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080104",
            "name": "CodeMeaning",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080105",
            "name": "MappingResource",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080106",
            "name": "ContextGroupVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00080107",
            "name": "ContextGroupLocalVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0008010b",
            "name": "CodeSetExtensionFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0008010c",
            "name": "PrivateCodingSchemeCreatorUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "0008010d",
            "name": "CodeSetExtensionCreatorUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "0008010f",
            "name": "ContextIdentifier",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00080201",
            "name": "TimezoneOffsetFromUTC",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081010",
            "name": "StationName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081030",
            "name": "StudyDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00081032",
            "name": "ProcedureCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0008103e",
            "name": "SeriesDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00081040",
            "name": "InstitutionalDepartmentName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081048",
            "name": "PhysicianOfRecord",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081049",
            "name": "PhysicianOfRecordIdSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081050",
            "name": "PerformingPhysicianName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081052",
            "name": "PerformingPhysicianIdSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081060",
            "name": "NameOfPhysicianReadingStudy",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081062",
            "name": "PhysicianReadingStudyIdSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081070",
            "name": "OperatorName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081072",
            "name": "OperatorsIdentificationSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081080",
            "name": "AdmittingDiagnosisDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081084",
            "name": "AdmittingDiagnosisCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081090",
            "name": "ManufacturerModelName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00081100",
            "name": "RefResultsSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00081110",
            "name": "RefStudySeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00081111",
            "name": "RefPPSSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00081115",
            "name": "RefSeriesSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00081120",
            "name": "RefPatientSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00081125",
            "name": "RefVisitSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00081130",
            "name": "RefOverlaySeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00081140",
            "name": "RefImageSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00081145",
            "name": "RefCurveSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0008114a",
            "name": "RefInstanceSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00081150",
            "name": "RefSOPClassUID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00081155",
            "name": "RefSOPInstanceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "0008115a",
            "name": "SOPClassesSupported",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00081160",
            "name": "RefFrameNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00081195",
            "name": "TransactionUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00081197",
            "name": "FailureReason",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00081198",
            "name": "FailedSOPSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00081199",
            "name": "RefSOPSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00082111",
            "name": "DerivationDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00082112",
            "name": "SourceImageSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00082120",
            "name": "StageName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082122",
            "name": "StageNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082124",
            "name": "NumberOfStages",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082128",
            "name": "ViewNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082129",
            "name": "NumberOfEventTimers",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0008212a",
            "name": "NumberOfViewsInStage",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082130",
            "name": "EventElapsedTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082132",
            "name": "EventTimerName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082142",
            "name": "StartTrim",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082143",
            "name": "StopTrim",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082144",
            "name": "RecommendedDisplayFrameRate",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082218",
            "name": "AnatomicRegionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082220",
            "name": "AnatomicRegionModifierSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082228",
            "name": "PrimaryAnatomicStructureSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082229",
            "name": "AnatomicStructureSpaceRegionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082230",
            "name": "PrimaryAnatomicStructureModifierSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082240",
            "name": "TransducerPositionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082242",
            "name": "TransducerPositionModifierSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082244",
            "name": "TransducerOrientationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00082246",
            "name": "TransducerOrientationModifierSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00083010",
            "name": "IrradiationEventUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00084000",
            "name": "IdentifyingComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00089007",
            "name": "FrameType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089092",
            "name": "ReferringImageEvidenceSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089121",
            "name": "RefRawDataSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00089123",
            "name": "CreatorVersionUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00089124",
            "name": "DerivationImageSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089154",
            "name": "SourceImageEvidenceSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089205",
            "name": "PixelPresentation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089206",
            "name": "VolumetricProperties",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089207",
            "name": "VolumeBasedCalculationTechnique",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089208",
            "name": "ComplexImageComponent",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089209",
            "name": "AcquisitionContrast",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089215",
            "name": "DerivationCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00089237",
            "name": "RefGrayscalePresentationStateSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00100010",
            "name": "PatientName",
            "operation": {
                "operationName": "hash",
                "operationParameters": [
                    "PatientID",
                    "10"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00100020",
            "name": "PatientID",
            "operation": {
                "operationName": "hash",
                "operationParameters": [
                    "this",
                    "10"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00100021",
            "name": "IssuerOfPatientID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00100030",
            "name": "PatientBirthDate",
            "operation": {
                "operationName": "hashdate",
                "operationParameters": [
                    "this",
                    "PatientID"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00100032",
            "name": "PatientBirthTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00100040",
            "name": "PatientSex",
            "operation": {
                "operationName": "empty"
            }
        },
        {
            "enabled": true,
            "tag": "00100050",
            "name": "PatientInsurancePlanCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00100101",
            "name": "PatientPrimaryLanguageCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00100102",
            "name": "PatientPrimaryLanguageModifierCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101000",
            "name": "OtherPatientIDs",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101001",
            "name": "OtherPatientNames",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101002",
            "name": "OtherPatientIDsSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101005",
            "name": "PatientBirthName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101010",
            "name": "PatientAge",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101020",
            "name": "PatientSize",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101030",
            "name": "PatientWeight",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101040",
            "name": "PatientAddress",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101050",
            "name": "InsurancePlanIdentification",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101060",
            "name": "PatientMotherBirthName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101080",
            "name": "MilitaryRank",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101081",
            "name": "BranchOfService",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00101090",
            "name": "MedicalRecordLocator",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102000",
            "name": "MedicalAlerts",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102110",
            "name": "ContrastAllergies",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102150",
            "name": "CountryOfResidence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102152",
            "name": "RegionOfResidence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102154",
            "name": "PatientPhoneNumbers",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102160",
            "name": "EthnicGroup",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102180",
            "name": "Occupation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "001021a0",
            "name": "SmokingStatus",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "001021b0",
            "name": "AdditionalPatientHistory",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "001021c0",
            "name": "PregnancyStatus",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "001021d0",
            "name": "LastMenstrualDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "001021f0",
            "name": "PatientReligiousPreference",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102203",
            "name": "PatientSexNeutered",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102297",
            "name": "ResponsiblePerson",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00102299",
            "name": "ResponsibleOrganization",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00104000",
            "name": "PatientComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00120010",
            "name": "ClinicalTrialSponsorName",
            "operation": {
                "operationName": "param",
                "operationParameters": [
                    "@TRIALSPONSOR"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00120020",
            "name": "ClinicalTrialProtocolID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00120021",
            "name": "ClinicalTrialProtocolName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00120030",
            "name": "ClinicalTrialSiteID",
            "operation": {
                "operationName": "param",
                "operationParameters": [
                    "@SITEID"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00120031",
            "name": "ClinicalTrialSiteName",
            "operation": {
                "operationName": "param",
                "operationParameters": [
                    "@SITENAME"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00120042",
            "name": "ClinicalTrialSubjectReadingID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00120050",
            "name": "ClinicalTrialTimePointID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00120051",
            "name": "ClinicalTrialTimePointDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00120060",
            "name": "CoordinatingCenterName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00120062",
            "name": "PatientIdentityRemoved",
            "operation": {
                "operationName": "always",
                "operationParameters": [
                    "YES"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00120063",
            "name": "DeIdentificationMethod",
            "operation": {
                "operationName": "append",
                "operationParameters": [
                    "Pacsbin: ",
                    {
                        "operationName": "param",
                        "operationParameters": [
                            "@PROFILENAME"
                        ]
                    },
                    ": ",
                    {
                        "operationName": "date"
                    },
                    ":",
                    {
                        "operationName": "time"
                    }
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00120064",
            "name": "DeIdentificationMethodCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00130010",
            "name": "BlockOwner",
            "operation": {
                "operationName": "always",
                "operationParameters": [
                    "Pacsbin"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00131010",
            "name": "ProjectName",
            "operation": {
                "operationName": "param",
                "operationParameters": [
                    "@PROJECTNAME"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00131011",
            "name": "TrialName",
            "operation": {
                "operationName": "param",
                "operationParameters": [
                    "@TRIALNAME"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00131012",
            "name": "SiteName",
            "operation": {
                "operationName": "param",
                "operationParameters": [
                    "@SITENAME"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00131013",
            "name": "SiteID",
            "operation": {
                "operationName": "param",
                "operationParameters": [
                    "@SITEID"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00180010",
            "name": "ContrastBolusAgent",
            "operation": {
                "operationName": "empty"
            }
        },
        {
            "enabled": false,
            "tag": "00180012",
            "name": "ContrastBolusAgentSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180014",
            "name": "ContrastBolusAdministrationRouteSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00180015",
            "name": "BodyPartExamined",
            "operation": {
                "operationName": "require"
            }
        },
        {
            "enabled": false,
            "tag": "00180020",
            "name": "ScanningSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180021",
            "name": "SeqVariant",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180022",
            "name": "ScanOptions",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180023",
            "name": "MRAcquisitionType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180024",
            "name": "SequenceName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180025",
            "name": "AngioFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180026",
            "name": "InterventionDrugInformationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180027",
            "name": "InterventionDrugStopTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180028",
            "name": "InterventionDrugDose",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180029",
            "name": "InterventionDrugCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018002a",
            "name": "AdditionalDrugSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180031",
            "name": "Radiopharmaceutical",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180034",
            "name": "InterventionDrugName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180035",
            "name": "InterventionDrugStartTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180036",
            "name": "InterventionalTherapySeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180037",
            "name": "TherapyType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180038",
            "name": "InterventionalStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180039",
            "name": "TherapyDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180040",
            "name": "CineRate",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180050",
            "name": "SliceThickness",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180060",
            "name": "KVP",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180070",
            "name": "CountsAccumulated",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180071",
            "name": "AcquisitionTerminationCondition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180072",
            "name": "EffectiveSeriesDuration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180073",
            "name": "AcquisitionStartCondition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180074",
            "name": "AcquisitionStartConditionData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180075",
            "name": "AcquisitionTerminationConditionData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180080",
            "name": "RepetitionTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180081",
            "name": "EchoTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180082",
            "name": "InversionTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180083",
            "name": "NumberOfAverages",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180084",
            "name": "ImagingFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180085",
            "name": "ImagedNucleus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180086",
            "name": "EchoNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180087",
            "name": "MagneticFieldStrength",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180088",
            "name": "SpacingBetweenSlices",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180089",
            "name": "NumberOfPhaseEncodingSteps",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180090",
            "name": "DataCollectionDiameter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180091",
            "name": "EchoTrainLength",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180093",
            "name": "PercentSampling",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180094",
            "name": "PercentPhaseFieldOfView",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00180095",
            "name": "PixelBandwidth",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00181000",
            "name": "DeviceSerialNumber",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00181002",
            "name": "DeviceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00181004",
            "name": "PlateID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00181005",
            "name": "GeneratorID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00181007",
            "name": "CassetteID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00181008",
            "name": "GantryID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00181010",
            "name": "SecondaryCaptureDeviceID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181011",
            "name": "HardcopyCreationDeviceID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00181012",
            "name": "DateOfSecondaryCapture",
            "operation": {
                "operationName": "hashdate",
                "operationParameters": [
                    "this",
                    "PatientID"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00181014",
            "name": "TimeOfSecondaryCapture",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181016",
            "name": "SecondaryCaptureDeviceManufacturer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181017",
            "name": "HardcopyDeviceManufacturer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181018",
            "name": "SecondaryCaptureDeviceManufacturerModelName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181019",
            "name": "SecondaryCaptureDeviceSoftwareVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018101a",
            "name": "HardcopyDeviceSoftwareVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018101b",
            "name": "HardcopyDeviceManfuacturerModelName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00181020",
            "name": "SoftwareVersion",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00181022",
            "name": "VideoImageFormatAcquired",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181023",
            "name": "DigitalImageFormatAcquired",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00181030",
            "name": "ProtocolName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00181040",
            "name": "ContrastBolusRoute",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181041",
            "name": "ContrastBolusVolume",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181042",
            "name": "ContrastBolusStartTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181043",
            "name": "ContrastBolusStopTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181044",
            "name": "ContrastBolusTotalDose",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181045",
            "name": "SyringeCounts",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181046",
            "name": "ContrastFlowRate",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181047",
            "name": "ContrastFlowDuration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181048",
            "name": "ContrastBolusIngredient",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181049",
            "name": "ContrastBolusIngredientConcentration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181050",
            "name": "SpatialResolution",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181060",
            "name": "TriggerTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181061",
            "name": "TriggerSourceOrType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181062",
            "name": "NominalInterval",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181063",
            "name": "FrameTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181064",
            "name": "FramingType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181065",
            "name": "FrameTimeVector",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181066",
            "name": "FrameDelay",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181067",
            "name": "ImageTriggerDelay",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181068",
            "name": "MultiplexGroupTimeOffset",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181069",
            "name": "TriggerTimeOffset",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018106a",
            "name": "SynchronizationTrigger",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018106c",
            "name": "SynchronizationChannel",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018106e",
            "name": "TriggerSamplePosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181070",
            "name": "RadiopharmaceuticalRoute",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181071",
            "name": "RadiopharmaceuticalVolume",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181072",
            "name": "RadiopharmaceuticalStartTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181073",
            "name": "RadiopharmaceuticalStopTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181074",
            "name": "RadionuclideTotalDose",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181075",
            "name": "RadionuclideHalfLife",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181076",
            "name": "RadionuclidePositronFraction",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181077",
            "name": "RadiopharmaceuticalSpecificActivity",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00181078",
            "name": "Radiopharmaceutical Start DateTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00181079",
            "name": "Radiopharmaceutical Stop DateTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00181080",
            "name": "BeatRejectionFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181081",
            "name": "LowRRValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181082",
            "name": "HighRRValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181083",
            "name": "IntervalsAcquired",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181084",
            "name": "IntervalsRejected",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181085",
            "name": "PVCRejection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181086",
            "name": "SkipBeats",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181088",
            "name": "HeartRate",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181090",
            "name": "CardiacNumberOfImages",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181094",
            "name": "TriggerWindow",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181100",
            "name": "ReconstructionDiameter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181110",
            "name": "DistanceSourceToDetector",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181111",
            "name": "DistanceSourceToPatient",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181114",
            "name": "EstimatedRadiographicMagnificationFactor",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181120",
            "name": "GantryDetectorTilt",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181121",
            "name": "GantryDetectorSlew",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181130",
            "name": "TableHeight",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181131",
            "name": "TableTraverse",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181134",
            "name": "TableMotion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181135",
            "name": "TableVerticalIncrement",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181136",
            "name": "TableLateralIncrement",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181137",
            "name": "TableLongitudinalIncrement",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181138",
            "name": "TableAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018113a",
            "name": "TableType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181140",
            "name": "RotationDirection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181141",
            "name": "AngularPosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181142",
            "name": "RadialPosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181143",
            "name": "ScanArc",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181144",
            "name": "AngularStep",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181145",
            "name": "CenterOfRotationOffset",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181147",
            "name": "FieldOfViewShape",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181149",
            "name": "FieldOfViewDimension",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181150",
            "name": "ExposureTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181151",
            "name": "XRayTubeCurrent",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181152",
            "name": "Exposure",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181153",
            "name": "ExposureInuAs",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181154",
            "name": "AveragePulseWidth",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181155",
            "name": "RadiationSetting",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181156",
            "name": "RectificationType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018115a",
            "name": "RadiationMode",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018115e",
            "name": "ImageAreaDoseProduct",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181160",
            "name": "FilterType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181161",
            "name": "TypeOfFilters",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181162",
            "name": "IntensifierSize",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181164",
            "name": "ImagerPixelSpacing",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181166",
            "name": "Grid",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181170",
            "name": "GeneratorPower",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181180",
            "name": "CollimatorGridName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181181",
            "name": "CollimatorType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181182",
            "name": "FocalDistance",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181183",
            "name": "XFocusCenter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181184",
            "name": "YFocusCenter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181190",
            "name": "FocalSpot",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181191",
            "name": "AnodeTargetMaterial",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "001811a0",
            "name": "BodyPartThickness",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "001811a2",
            "name": "CompressionForce",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00181200",
            "name": "DateOfLastCalibration",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00181201",
            "name": "TimeOfLastCalibration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181210",
            "name": "ConvolutionKernel",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181242",
            "name": "ActualFrameDuration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181243",
            "name": "CountRate",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181244",
            "name": "PreferredPlaybackSequencing",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181250",
            "name": "ReceiveCoilName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181251",
            "name": "TransmitCoilName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181260",
            "name": "PlateType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181261",
            "name": "PhosphorType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181300",
            "name": "ScanVelocity",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181301",
            "name": "WholeBodyTechnique",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181302",
            "name": "ScanLength",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181310",
            "name": "AcquisitionMatrix",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181312",
            "name": "PhaseEncodingDirection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181314",
            "name": "FlipAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181315",
            "name": "VariableFlipAngleFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181316",
            "name": "SAR",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181318",
            "name": "dBDt",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00181400",
            "name": "AcquisitionDeviceProcessingDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00181401",
            "name": "AcquisitionDeviceProcessingCode",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181402",
            "name": "CassetteOrientation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181403",
            "name": "CassetteSize",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181404",
            "name": "ExposuresOnPlate",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181405",
            "name": "RelativeXRayExposure",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181450",
            "name": "ColumnAngulation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181460",
            "name": "TomoLayerHeight",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181470",
            "name": "TomoAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181480",
            "name": "TomoTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181490",
            "name": "TomoType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181491",
            "name": "TomoClass",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181495",
            "name": "NumberofTomosynthesisSourceImages",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181500",
            "name": "PositionerMotion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181508",
            "name": "PositionerType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181510",
            "name": "PositionerPrimaryAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181511",
            "name": "PositionerSecondaryAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181520",
            "name": "PositionerPrimaryAngleIncrement",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181521",
            "name": "PositionerSecondaryAngleIncrement",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181530",
            "name": "DetectorPrimaryAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181531",
            "name": "DetectorSecondaryAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181600",
            "name": "ShutterShape",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181602",
            "name": "ShutterLeftVerticalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181604",
            "name": "ShutterRightVerticalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181606",
            "name": "ShutterUpperHorizontalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181608",
            "name": "ShutterLowerHorizontalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181610",
            "name": "CenterOfCircularShutter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181612",
            "name": "RadiusOfCircularShutter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181620",
            "name": "VerticesOfPolygonalShutter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181622",
            "name": "ShutterPresentationValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181623",
            "name": "ShutterOverlayGroup",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181700",
            "name": "CollimatorShape",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181702",
            "name": "CollimatorLeftVerticalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181704",
            "name": "CollimatorRightVerticalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181706",
            "name": "CollimatorUpperHorizontalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181708",
            "name": "CollimatorLowerHorizontalEdge",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181710",
            "name": "CenterOfCircularCollimator",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181712",
            "name": "RadiusOfCircularCollimator",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181720",
            "name": "VerticesOfPolygonalCollimator",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181800",
            "name": "AcquisitionTimeSynchronized",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181801",
            "name": "TimeSource",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00181802",
            "name": "TimeDistributionProtocol",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00184000",
            "name": "AcquisitionComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00185000",
            "name": "OutputPower",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185010",
            "name": "TransducerData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185012",
            "name": "FocusDepth",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185020",
            "name": "ProcessingFunction",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185021",
            "name": "PostprocessingFunction",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185022",
            "name": "MechanicalIndex",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185024",
            "name": "ThermalIndex",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185026",
            "name": "CranialThermalIndex",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185027",
            "name": "SoftTissueThermalIndex",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185028",
            "name": "SoftTissueFocusThermalIndex",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185029",
            "name": "SoftTissueSurfaceThermalIndex",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185050",
            "name": "DepthOfScanField",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185100",
            "name": "PatientPosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185101",
            "name": "ViewPosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185104",
            "name": "ProjectionEponymousNameCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185210",
            "name": "ImageTransformationMatrix",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00185212",
            "name": "ImageTranslationVector",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186000",
            "name": "Sensitivity",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186011",
            "name": "SeqOfUltrasoundRegions",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186012",
            "name": "RegionSpatialFormat",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186014",
            "name": "RegionDataType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186016",
            "name": "RegionFlags",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186018",
            "name": "RegionLocationMinX0",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018601a",
            "name": "RegionLocationMinY0",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018601c",
            "name": "RegionLocationMaxX1",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018601e",
            "name": "RegionLocationMaxY1",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186020",
            "name": "ReferencePixelX0",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186022",
            "name": "ReferencePixelY0",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186024",
            "name": "PhysicalUnitsXDirection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186026",
            "name": "PhysicalUnitsYDirection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186028",
            "name": "ReferencePixelPhysicalValueX",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018602a",
            "name": "ReferencePixelPhysicalValueY",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018602c",
            "name": "PhysicalDeltaX",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018602e",
            "name": "PhysicalDeltaY",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186030",
            "name": "TransducerFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186031",
            "name": "TransducerType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186032",
            "name": "PulseRepetitionFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186034",
            "name": "DopplerCorrectionAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186036",
            "name": "SteeringAngle",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186038",
            "name": "DopplerSampleVolumeXPosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018603a",
            "name": "DopplerSampleVolumeYPosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018603c",
            "name": "TMLinePositionX0",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018603e",
            "name": "TMLinePositionY0",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186040",
            "name": "TMLinePositionX1",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186042",
            "name": "TMLinePositionY1",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186044",
            "name": "PixelComponentOrganization",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186046",
            "name": "PixelComponentMask",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186048",
            "name": "PixelComponentRangeStart",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018604a",
            "name": "PixelComponentRangeStop",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018604c",
            "name": "PixelComponentPhysicalUnits",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018604e",
            "name": "PixelComponentDataType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186050",
            "name": "NumberOfTableBreakPoints",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186052",
            "name": "TableOfXBreakPoints",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186054",
            "name": "TableOfYBreakPoints",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186056",
            "name": "NumberOfTableEntries",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00186058",
            "name": "TableOfPixelValues",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018605a",
            "name": "TableOfParameterValues",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187000",
            "name": "DetectorConditionsNominalFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187001",
            "name": "DetectorTemperature",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187004",
            "name": "DetectorType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187005",
            "name": "DetectorConfiguration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187006",
            "name": "DetectorDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187008",
            "name": "DetectorMode",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0018700a",
            "name": "DetectorID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0018700c",
            "name": "DateOfLastDetectorCalibration",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0018700e",
            "name": "TimeOfLastDetectorCalibration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187010",
            "name": "ExposuresOnDetectorSinceLastCalibration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187011",
            "name": "ExposuresOnDetectorSinceManufactured",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187012",
            "name": "DetectorTimeSinceLastExposure",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187014",
            "name": "DetectorActiveTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187016",
            "name": "DetectorActivationOffsetFromExposure",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018701a",
            "name": "DetectorBinning",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187020",
            "name": "DetectorElementPhysicalSize",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187022",
            "name": "DetectorElementSpacing",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187024",
            "name": "DetectorActiveShape",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187026",
            "name": "DetectorActiveDimension",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187028",
            "name": "DetectorActiveOrigin",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187030",
            "name": "FieldOfViewOrigin",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187032",
            "name": "FieldOfViewRotation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187034",
            "name": "FieldOfViewHorizontalFlip",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187040",
            "name": "GridAbsorbingMaterial",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187041",
            "name": "GridSpacingMaterial",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187042",
            "name": "GridThickness",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187044",
            "name": "GridPitch",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187046",
            "name": "GridAspectRatio",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187048",
            "name": "GridPeriod",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0018704c",
            "name": "GridFocalDistance",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187050",
            "name": "FilterMaterial",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187052",
            "name": "FilterThicknessMinimum",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187054",
            "name": "FilterThicknessMaximum",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187060",
            "name": "ExposureControlMode",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187062",
            "name": "ExposureControlModeDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187064",
            "name": "ExposureStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00187065",
            "name": "PhototimerSetting",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00188150",
            "name": "ExposureTimeInuS",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00188151",
            "name": "XRayTubeCurrentInuA",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189004",
            "name": "ContentQualification",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189005",
            "name": "PulseSequenceName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189006",
            "name": "MRImagingModifierSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189008",
            "name": "EchoPulseSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189009",
            "name": "InversionRecovery",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189010",
            "name": "FlowCompensation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189011",
            "name": "MultipleSpinEcho",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189012",
            "name": "MultiPlanarExcitation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189014",
            "name": "PhaseContrast",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189015",
            "name": "TimeOfFlightContrast",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189016",
            "name": "Spoiling",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189017",
            "name": "SteadyStatePulseSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189018",
            "name": "EchoPlanarPulseSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189019",
            "name": "TagAngleFirstAxis",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189020",
            "name": "MagnetizationTransfer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189021",
            "name": "T2Preparation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189022",
            "name": "BloodSignalNulling",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189024",
            "name": "SaturationRecovery",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189025",
            "name": "SpectrallySelectedSuppression",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189026",
            "name": "SpectrallySelectedExcitation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189027",
            "name": "SpatialPreSaturation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189028",
            "name": "Tagging",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189029",
            "name": "OversamplingPhase",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189030",
            "name": "TagSpacingFirstDimension",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189032",
            "name": "GeometryOfKSpaceTraversal",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189033",
            "name": "SegmentedKSpaceTraversal",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189034",
            "name": "RectilinearPhaseEncodeReordering",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189035",
            "name": "TagThickness",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189036",
            "name": "PartialFourierDirection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189037",
            "name": "GatingSynchronizationTechnique",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189041",
            "name": "ReceiveCoilManufacturerName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189042",
            "name": "MRReceiveCoilSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189043",
            "name": "ReceiveCoilType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189044",
            "name": "QuadratureReceiveCoil",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189045",
            "name": "MultiCoilDefinitionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189046",
            "name": "MultiCoilConfiguration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189047",
            "name": "MultiCoilElementName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189048",
            "name": "MultiCoilElementUsed",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189049",
            "name": "MRTransmitCoilSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189050",
            "name": "TransmitCoilManufacturerName",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189051",
            "name": "TransmitCoilType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189052",
            "name": "SpectralWidth",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189053",
            "name": "ChemicalShiftReference",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189054",
            "name": "VolumeLocalizationTechnique",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189058",
            "name": "MRAcquisitionFrequencyEncodingSteps",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189059",
            "name": "DeCoupling",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189060",
            "name": "DeCoupledNucleus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189061",
            "name": "DeCouplingFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189062",
            "name": "DeCouplingMethod",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189063",
            "name": "DeCouplingChemicalShiftReference",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189064",
            "name": "KSpaceFiltering",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189065",
            "name": "TimeDomainFiltering",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189066",
            "name": "NumberOfZeroFills",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189067",
            "name": "BaselineCorrection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189070",
            "name": "CardiacRRIntervalSpecified",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189073",
            "name": "AcquisitionDuration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00189074",
            "name": "FrameAcquisitionDatetime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00189075",
            "name": "DiffusionDirectionality",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189076",
            "name": "DiffusionGradientDirectionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189077",
            "name": "ParallelAcquisition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189078",
            "name": "ParallelAcquisitionTechnique",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189079",
            "name": "InversionTimes",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189080",
            "name": "MetaboliteMapDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189081",
            "name": "PartialFourier",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189082",
            "name": "EffectiveEchoTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189084",
            "name": "ChemicalShiftSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189085",
            "name": "CardiacSignalSource",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189087",
            "name": "DiffusionBValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189089",
            "name": "DiffusionGradientOrientation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189090",
            "name": "VelocityEncodingDirection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189091",
            "name": "VelocityEncodingMinimumValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189093",
            "name": "NumberOfKSpaceTrajectories",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189094",
            "name": "CoverageOfKSpace",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189095",
            "name": "SpectroscopyAcquisitionPhaseRows",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189096",
            "name": "ParallelReductionFactorInPlane",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189098",
            "name": "TransmitterFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189100",
            "name": "ResonantNucleus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189101",
            "name": "FrequencyCorrection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189103",
            "name": "MRSpectroscopyFOVGeometrySeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189104",
            "name": "SlabThickness",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189105",
            "name": "SlabOrientation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189106",
            "name": "MidSlabPosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189107",
            "name": "MRSpatialSaturationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189112",
            "name": "MRTimingAndRelatedParametersSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189114",
            "name": "MREchoSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189115",
            "name": "MRModifierSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189117",
            "name": "MRDiffusionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189118",
            "name": "CardiacTriggerSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189119",
            "name": "MRAveragesSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189125",
            "name": "MRFOVGeometrySeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189126",
            "name": "VolumeLocalizationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189127",
            "name": "SpectroscopyAcquisitionDataColumns",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189147",
            "name": "DiffusionAnisotropyType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00189151",
            "name": "FrameReferenceDatetime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00189152",
            "name": "MetaboliteMapSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189155",
            "name": "ParallelReductionFactorOutOfPlane",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189159",
            "name": "SpectroscopyAcquisitionOutOfPlanePhaseSteps",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189166",
            "name": "BulkMotionStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189168",
            "name": "ParallelReductionFactorSecondInPlane",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189169",
            "name": "CardiacBeatRejectionTechnique",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189170",
            "name": "RespiratoryMotionCompensation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189171",
            "name": "RespiratorySignalSource",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189172",
            "name": "BulkMotionCompensationTechnique",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189173",
            "name": "BulkMotionSignal",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189174",
            "name": "ApplicableSafetyStandardAgency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189175",
            "name": "ApplicableSafetyStandardVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189176",
            "name": "OperationModeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189177",
            "name": "OperatingModeType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189178",
            "name": "OperationMode",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189179",
            "name": "SpecificAbsorptionRateDefinition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189180",
            "name": "GradientOutputType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189181",
            "name": "SpecificAbsorptionRateValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189182",
            "name": "GradientOutput",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189183",
            "name": "FlowCompensationDirection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189184",
            "name": "TaggingDelay",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189195",
            "name": "ChemicalShiftsMinimumIntegrationLimit",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189196",
            "name": "ChemicalShiftsMaximumIntegrationLimit",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189197",
            "name": "MRVelocityEncodingSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189198",
            "name": "FirstOrderPhaseCorrection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189199",
            "name": "WaterReferencedPhaseCorrection",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189200",
            "name": "MRSpectroscopyAcquisitionType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189214",
            "name": "RespiratoryMotionStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189217",
            "name": "VelocityEncodingMaximumValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189218",
            "name": "TagSpacingSecondDimension",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189219",
            "name": "TagAngleSecondAxis",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189220",
            "name": "FrameAcquisitionDuration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189226",
            "name": "MRImageFrameTypeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189227",
            "name": "MRSpectroscopyFrameTypeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189231",
            "name": "MRAcquisitionPhaseEncodingStepsInPlane",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189232",
            "name": "MRAcquisitionPhaseEncodingStepsOutOfPlane",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189234",
            "name": "SpectroscopyAcquisitionPhaseColumns",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189236",
            "name": "CardiacMotionStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00189239",
            "name": "SpecificAbsorptionRateSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00189424",
            "name": "AcquisitionProtocolDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0018a003",
            "name": "ContributionDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0020000d",
            "name": "StudyInstanceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "0020000e",
            "name": "SeriesInstanceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00200010",
            "name": "StudyID",
            "operation": {
                "operationName": "empty"
            }
        },
        {
            "enabled": false,
            "tag": "00200011",
            "name": "SeriesNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200012",
            "name": "AcquisitionNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200013",
            "name": "InstanceNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200019",
            "name": "ItemNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200020",
            "name": "PatientOrientation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200022",
            "name": "OverlayNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200024",
            "name": "CurveNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200026",
            "name": "LUTNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200032",
            "name": "ImagePosition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200037",
            "name": "ImageOrientation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00200052",
            "name": "FrameOfReferenceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00200060",
            "name": "Laterality",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200062",
            "name": "ImageLaterality",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200100",
            "name": "TemporalPositionIdentifier",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200105",
            "name": "NumberOfTemporalPositions",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00200110",
            "name": "TemporalResolution",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00200200",
            "name": "SynchronizationFrameOfReferenceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00201000",
            "name": "SeriesInStudy",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201002",
            "name": "ImagesInAcquisition",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201004",
            "name": "AcquisitionsInStudy",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201040",
            "name": "PositionReferenceIndicator",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201041",
            "name": "SliceLocation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201070",
            "name": "OtherStudyNumbers",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201200",
            "name": "NumberOfPatientRelatedStudies",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201202",
            "name": "NumberOfPatientRelatedSeries",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201204",
            "name": "NumberOfPatientRelatedInstances",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201206",
            "name": "NumberOfStudyRelatedSeries",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201208",
            "name": "NumberOfStudyRelatedInstances",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00201209",
            "name": "NumberOfSeriesRelatedInstances",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00203401",
            "name": "ModifyingDeviceID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00203404",
            "name": "ModifyingDeviceManufacturer",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00203406",
            "name": "ModifiedImageDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00204000",
            "name": "ImageComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00209056",
            "name": "StackID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209057",
            "name": "InStackPositionNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209071",
            "name": "FrameAnatomySeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209072",
            "name": "FrameLaterality",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209111",
            "name": "FrameContentSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209113",
            "name": "PlanePositionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209116",
            "name": "PlaneOrientationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209128",
            "name": "TemporalPositionIndex",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209153",
            "name": "TriggerDelayTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209156",
            "name": "FrameAcquisitionNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209157",
            "name": "DimensionIndexValues",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209158",
            "name": "FrameComments",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00209161",
            "name": "ConcatenationUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00209162",
            "name": "InConcatenationNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209163",
            "name": "InConcatenationTotalNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00209164",
            "name": "DimensionOrganizationUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00209165",
            "name": "DimensionIndexPointer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209167",
            "name": "FunctionalGroupSequencePointer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209213",
            "name": "DimensionIndexPrivateCreator",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209221",
            "name": "DimensionOrganizationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209222",
            "name": "DimensionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209228",
            "name": "ConcatenationFrameOffsetNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00209238",
            "name": "FunctionalGroupPrivateCreator",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280002",
            "name": "SamplesPerPixel",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280004",
            "name": "PhotometricInterpretation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280006",
            "name": "PlanarConfiguration",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280008",
            "name": "NumberOfFrames",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280009",
            "name": "FrameIncrementPointer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280010",
            "name": "Rows",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280011",
            "name": "Columns",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280012",
            "name": "Planes",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280014",
            "name": "UltrasoundColorDataPresent",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280030",
            "name": "PixelSpacing",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280031",
            "name": "ZoomFactor",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280032",
            "name": "ZoomCenter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280034",
            "name": "PixelAspectRatio",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280051",
            "name": "CorrectedImage",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280100",
            "name": "BitsAllocated",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280101",
            "name": "BitsStored",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280102",
            "name": "HighBit",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280103",
            "name": "PixelRepresentation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280106",
            "name": "SmallestImagePixelValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280107",
            "name": "LargestImagePixelValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280108",
            "name": "SmallestPixelValueInSeries",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280109",
            "name": "LargestPixelValueInSeries",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280110",
            "name": "SmallestImagePixelValueInPlane",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280111",
            "name": "LargestImagePixelValueInPlane",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280120",
            "name": "PixelPaddingValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280300",
            "name": "QualityControlImage",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00280301",
            "name": "BurnedInAnnotation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281040",
            "name": "PixelIntensityRelationship",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281041",
            "name": "PixelIntensityRelationshipSign",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281050",
            "name": "WindowCenter",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281051",
            "name": "WindowWidth",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281052",
            "name": "RescaleIntercept",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281053",
            "name": "RescaleSlope",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281054",
            "name": "RescaleType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281055",
            "name": "WindowCenterWidthExplanation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281090",
            "name": "RecommendedViewingMode",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281101",
            "name": "RedPaletteColorLUTDescriptor",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281102",
            "name": "GreenPaletteColorLUTDescriptor",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281103",
            "name": "BluePaletteColorLUTDescriptor",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00281199",
            "name": "PaletteColorLUTUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00281201",
            "name": "RedPaletteColorLUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281202",
            "name": "GreenPaletteColorLUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281203",
            "name": "BluePaletteColorLUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00281214",
            "name": "LargePaletteColorLUTUid",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "00281221",
            "name": "SegmentedRedPaletteColorLUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281222",
            "name": "SegmentedGreenPaletteColorLUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281223",
            "name": "SegmentedBluePaletteColorLUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281300",
            "name": "ImplantPresent",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281350",
            "name": "PartialView",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00281351",
            "name": "PartialViewDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00282110",
            "name": "LossyImageCompression",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00282112",
            "name": "LossyImageCompressionRatio",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00283000",
            "name": "ModalityLUTSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00283002",
            "name": "LUTDescriptor",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00283003",
            "name": "LUTExplanation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00283004",
            "name": "ModalityLUTType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00283006",
            "name": "LUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00283010",
            "name": "VOILUTSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00283110",
            "name": "SoftcopyVOILUTSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00284000",
            "name": "ImagePresentationComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00285000",
            "name": "BiPlaneAcquisitionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286010",
            "name": "RepresentativeFrameNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286020",
            "name": "FrameNumbersOfInterest",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286022",
            "name": "FrameOfInterestDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286030",
            "name": "MaskPointer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286040",
            "name": "RWavePointer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286100",
            "name": "MaskSubtractionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286101",
            "name": "MaskOperation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286102",
            "name": "ApplicableFrameRange",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286110",
            "name": "MaskFrameNumbers",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286112",
            "name": "ContrastFrameAveraging",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286114",
            "name": "MaskSubPixelShift",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286120",
            "name": "TIDOffset",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00286190",
            "name": "MaskOperationExplanation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289001",
            "name": "DataPointRows",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289002",
            "name": "DataPointColumns",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289003",
            "name": "SignalDomain",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289099",
            "name": "LargestMonochromePixelValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289108",
            "name": "DataRepresentation",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289110",
            "name": "PixelMatrixSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289132",
            "name": "FrameVOILUTSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289145",
            "name": "PixelValueTransformationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00289235",
            "name": "SignalDomainRows",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0032000a",
            "name": "StudyStatusID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0032000c",
            "name": "StudyPriorityID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00320012",
            "name": "StudyIDIssuer",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00320032",
            "name": "StudyVerifiedDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00320033",
            "name": "StudyVerifiedTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00320034",
            "name": "StudyReadDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00320035",
            "name": "StudyReadTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00321000",
            "name": "ScheduledStudyStartDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00321001",
            "name": "ScheduledStudyStartTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00321010",
            "name": "ScheduledStudyStopDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00321011",
            "name": "ScheduledStudyStopTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00321020",
            "name": "ScheduledStudyLocation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00321021",
            "name": "ScheduledStudyLocationAET",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00321030",
            "name": "ReasonforStudy",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00321032",
            "name": "RequestingPhysician",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00321033",
            "name": "RequestingService",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00321040",
            "name": "StudyArrivalDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00321041",
            "name": "StudyArrivalTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00321050",
            "name": "StudyCompletionDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00321051",
            "name": "StudyCompletionTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00321055",
            "name": "StudyComponentStatusID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00321060",
            "name": "RequestedProcedureDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00321064",
            "name": "RequestedProcedureCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00321070",
            "name": "RequestedContrastAgent",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00324000",
            "name": "StudyComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00380004",
            "name": "RefPatientAliasSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00380008",
            "name": "VisitStatusID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00380010",
            "name": "AdmissionID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380011",
            "name": "IssuerOfAdmissionID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00380016",
            "name": "RouteOfAdmissions",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0038001a",
            "name": "ScheduledAdmissionDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0038001b",
            "name": "ScheduledAdmissionTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0038001c",
            "name": "ScheduledDischargeDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0038001d",
            "name": "ScheduledDischargeTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0038001e",
            "name": "ScheduledPatientInstitutionResidence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380020",
            "name": "AdmittingDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380021",
            "name": "AdmittingTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380030",
            "name": "DischargeDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00380032",
            "name": "DischargeTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00380040",
            "name": "DischargeDiagnosisDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00380044",
            "name": "DischargeDiagnosisCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00380050",
            "name": "SpecialNeeds",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380060",
            "name": "ServiceEpisodeID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380061",
            "name": "IssuerOfServiceEpisodeId",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380062",
            "name": "ServiceEpisodeDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380300",
            "name": "CurrentPatientLocation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380400",
            "name": "PatientInstitutionResidence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00380500",
            "name": "PatientState",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00381234",
            "name": "ReferencedPatientAliasSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00384000",
            "name": "VisitComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "003a0004",
            "name": "WaveformOriginality",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0005",
            "name": "NumberOfWaveformChannels",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0010",
            "name": "NumberOfWaveformSamples",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a001a",
            "name": "SamplingFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0020",
            "name": "MultiplexGroupLabel",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0200",
            "name": "ChannelDefinitionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0202",
            "name": "WaveformChannelNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0203",
            "name": "ChannelLabel",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0205",
            "name": "ChannelStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0208",
            "name": "ChannelSourceSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0209",
            "name": "ChannelSourceModifiersSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a020a",
            "name": "SourceWaveformSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a020c",
            "name": "ChannelDerivationDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0210",
            "name": "ChannelSensitivity",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0211",
            "name": "ChannelSensitivityUnitsSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0212",
            "name": "ChannelSensitivityCorrectionFactor",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0213",
            "name": "ChannelBaseline",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0214",
            "name": "ChannelTimeSkew",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0215",
            "name": "ChannelSampleSkew",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0218",
            "name": "ChannelOffset",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a021a",
            "name": "WaveformBitsStored",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0220",
            "name": "FilterLowFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0221",
            "name": "FilterHighFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0222",
            "name": "NotchFilterFrequency",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "003a0223",
            "name": "NotchFilterBandwidth",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400001",
            "name": "ScheduledStationAET",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400002",
            "name": "SPSStartDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400003",
            "name": "SPSStartTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400004",
            "name": "SPSEndDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400005",
            "name": "SPSEndTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400006",
            "name": "ScheduledPerformingPhysicianName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400007",
            "name": "SPSDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400008",
            "name": "ScheduledProtocolCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400009",
            "name": "SPSID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0040000b",
            "name": "",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400010",
            "name": "ScheduledStationName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400011",
            "name": "SPSLocation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400012",
            "name": "PreMedication",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400020",
            "name": "SPSStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400100",
            "name": "SPSSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400220",
            "name": "RefNonImageCompositeSOPInstanceSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400241",
            "name": "PerformedStationAET",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400242",
            "name": "PerformedStationName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400243",
            "name": "PerformedLocation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400244",
            "name": "PPSStartDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400245",
            "name": "PPSStartTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400248",
            "name": "PerformedStationNameCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400250",
            "name": "PPSEndDate",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400251",
            "name": "PPSEndTime",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400252",
            "name": "PPSStatus",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400253",
            "name": "PPSID",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400254",
            "name": "PPSDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400255",
            "name": "PerformedProcedureTypeDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400260",
            "name": "PerformedProtocolCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400270",
            "name": "ScheduledStepAttributesSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400275",
            "name": "RequestAttributesSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00400280",
            "name": "PPSComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400281",
            "name": "PPSDiscontinuationReasonCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400293",
            "name": "QuantitySeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400294",
            "name": "Quantity",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400295",
            "name": "MeasuringUnitsSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400296",
            "name": "BillingItemSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400300",
            "name": "TotalTimeOfFluoroscopy",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400301",
            "name": "TotalNumberOfExposures",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400302",
            "name": "EntranceDose",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400303",
            "name": "ExposedArea",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400306",
            "name": "DistanceSourceToEntrance",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400307",
            "name": "DistanceSourceToSupport",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040030e",
            "name": "ExposureDoseSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400310",
            "name": "CommentsOnRadiationDose",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400312",
            "name": "XRayOutput",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400314",
            "name": "HalfValueLayer",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400316",
            "name": "OrganDose",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400318",
            "name": "OrganExposed",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400320",
            "name": "BillingProcedureStepSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400321",
            "name": "FilmConsumptionSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400324",
            "name": "BillingSuppliesAndDevicesSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400330",
            "name": "RefProcedureStepSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400340",
            "name": "PerformedSeriesSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400400",
            "name": "SPSComments",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040050a",
            "name": "SpecimenAccessionNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400550",
            "name": "SpecimenSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00400551",
            "name": "SpecimenIdentifier",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00400555",
            "name": "AcquisitionContextSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00400556",
            "name": "AcquisitionContextDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040059a",
            "name": "SpecimenTypeCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "004006fa",
            "name": "SlideIdentifier",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040071a",
            "name": "ImageCenterPointCoordinatesSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040072a",
            "name": "XOffsetInSlideCoordinateSystem",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040073a",
            "name": "YOffsetInSlideCoordinateSystem",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040074a",
            "name": "ZOffsetInSlideCoordinateSystem",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "004008d8",
            "name": "PixelSpacingSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "004008da",
            "name": "CoordinateSystemAxisCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "004008ea",
            "name": "MeasurementUnitsCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00401001",
            "name": "RequestedProcedureID",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00401002",
            "name": "ReasonForTheRequestedProcedure",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00401003",
            "name": "RequestedProcedurePriority",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00401004",
            "name": "PatientTransportArrangements",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00401005",
            "name": "RequestedProcedureLocation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00401008",
            "name": "ConfidentialityCode",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00401009",
            "name": "ReportingPriority",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00401010",
            "name": "NamesOfIntendedRecipientsOfResults",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00401011",
            "name": "IntendedRecipientsOfResultsIDSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00401102",
            "name": "PersonAddress",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00401103",
            "name": "PersonTelephoneNumbers",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00401400",
            "name": "RequestedProcedureComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00402001",
            "name": "ReasonForTheImagingServiceRequest",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00402004",
            "name": "IssueDateOfImagingServiceRequest",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00402005",
            "name": "IssueTimeOfImagingServiceRequest",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00402008",
            "name": "OrderEnteredBy",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00402009",
            "name": "OrderEntererLocation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00402010",
            "name": "OrderCallbackPhoneNumber",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00402016",
            "name": "PlacerOrderNumber",
            "operation": {
                "operationName": "hash",
                "operationParameters": [
                    "this",
                    "16"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00402017",
            "name": "FillerOrderNumber",
            "operation": {
                "operationName": "hash",
                "operationParameters": [
                    "this",
                    "16"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00402400",
            "name": "ImagingServiceRequestComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00403001",
            "name": "ConfidentialityPatientData",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00404023",
            "name": "RefGenPurposeSchedProcStepTransUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00404025",
            "name": "ScheduledStationNameCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00404027",
            "name": "ScheduledStationGeographicLocCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00404030",
            "name": "PerformedStationGeoLocCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00404034",
            "name": "ScheduledHumanPerformersSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00404035",
            "name": "ActualHumanPerformersSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00404036",
            "name": "HumanPerformersOrganization",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00404037",
            "name": "HumanPerformersName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "00408302",
            "name": "EntranceDoseInmGy",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00409096",
            "name": "RealWorldValueMappingSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00409210",
            "name": "LUTLabel",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00409211",
            "name": "RealWorldValueLUTLastValueMappedUS",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00409212",
            "name": "RealWorldValueLUTData",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00409216",
            "name": "RealWorldValueLUTFirstValueMappedUS",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00409224",
            "name": "RealWorldValueIntercept",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "00409225",
            "name": "RealWorldValueSlope",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a010",
            "name": "RelationshipType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0040a027",
            "name": "VerifyingOrganization",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a030",
            "name": "VerificationDateTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a032",
            "name": "ObservationDateTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0040a040",
            "name": "ValueType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a043",
            "name": "ConceptNameCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a050",
            "name": "ContinuityOfContent",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a073",
            "name": "VerifyingObserverSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a075",
            "name": "VerifyingObserverName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a078",
            "name": "AuthorObserverSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a07a",
            "name": "ParticipantSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a07c",
            "name": "CustodialOrganizationSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a088",
            "name": "VerifyingObserverIdentificationCodeSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0040a0b0",
            "name": "RefWaveformChannels",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0040a120",
            "name": "DateTime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a121",
            "name": "Date",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0040a122",
            "name": "Time",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0040a123",
            "name": "PersonName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0040a124",
            "name": "UID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "0040a130",
            "name": "TemporalRangeType",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a132",
            "name": "RefSamplePositions",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a136",
            "name": "RefFrameNumbers",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a138",
            "name": "RefTimeOffsets",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0040a13a",
            "name": "RefDatetime",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0040a160",
            "name": "TextValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a168",
            "name": "ConceptCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a180",
            "name": "AnnotationGroupNumber",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a195",
            "name": "ModifierCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a300",
            "name": "MeasuredValueSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a30a",
            "name": "NumericValue",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a360",
            "name": "PredecessorDocumentsSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a370",
            "name": "RefRequestSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a372",
            "name": "PerformedProcedureCodeSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a375",
            "name": "CurrentRequestedProcedureEvidenceSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a385",
            "name": "PertinentOtherEvidenceSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a491",
            "name": "CompletionFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a492",
            "name": "CompletionFlagDescription",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a493",
            "name": "VerificationFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a504",
            "name": "ContentTemplateSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040a525",
            "name": "IdenticalDocumentsSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0040a730",
            "name": "ContentSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": false,
            "tag": "0040b020",
            "name": "AnnotationSeq",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040db00",
            "name": "TemplateIdentifier",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040db06",
            "name": "TemplateVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040db07",
            "name": "TemplateLocalVersion",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": false,
            "tag": "0040db0b",
            "name": "TemplateExtensionFlag",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "0040db0c",
            "name": "TemplateExtensionOrganizationUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "0040db0d",
            "name": "TemplateExtensionCreatorUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": false,
            "tag": "0040db73",
            "name": "RefContentItemIdentifier",
            "operation": {
                "operationName": "keep"
            }
        },
        {
            "enabled": true,
            "tag": "00603000",
            "name": "OverlayData",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00604000",
            "name": "OverlayComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "0070031a",
            "name": "FiducialUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00880140",
            "name": "StorageMediaFilesetUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "00880200",
            "name": "IconImageSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00880906",
            "name": "TopicSubject",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00880910",
            "name": "TopicAuthor",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "00880912",
            "name": "TopicKeyWords",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "04000100",
            "name": "DigitalSignatureUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "04000561",
            "name": "OriginalAttributesSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "04000550",
            "name": "ModifiedAttributesSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "20300020",
            "name": "TextString",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "30060024",
            "name": "ReferencedFrameOfReferenceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "300600c2",
            "name": "RelatedFrameOfReferenceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "300a0013",
            "name": "DoseReferenceUID",
            "operation": {
                "operationName": "hashuid",
                "operationParameters": [
                    "@UIDROOT",
                    "this"
                ]
            }
        },
        {
            "enabled": true,
            "tag": "40000010",
            "name": "Arbitrary",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40004000",
            "name": "TextComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080042",
            "name": "ResultsIDIssuer",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080102",
            "name": "InterpretationRecorder",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "4008010a",
            "name": "InterpretationTranscriber",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "4008010b",
            "name": "InterpretationText",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "4008010c",
            "name": "InterpretationAuthor",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080111",
            "name": "InterpretationApproverSequence",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080114",
            "name": "PhysicianApprovingInterpretation",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080115",
            "name": "InterpretationDiagnosisDescription",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080118",
            "name": "ResultsDistributionListSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080119",
            "name": "DistributionName",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "4008011a",
            "name": "DistributionAddress",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080202",
            "name": "InterpretationIdIssuer",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40080300",
            "name": "Impressions",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "40084000",
            "name": "ResultComments",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "fffafffa",
            "name": "DigitalSignaturesSeq",
            "operation": {
                "operationName": "remove"
            }
        },
        {
            "enabled": true,
            "tag": "fffcfffc",
            "name": "DataSetTrailingPadding",
            "operation": {
                "operationName": "remove"
            }
        }
    ],
    "options": {
        "sequenceAction": "remove",
        "removeDisabled": false,
        "removePrivateGroups": true,
        "removeOverlays": true,
        "removeCurves": true,
        "keepGroup0018": true,
        "keepGroup0020": true,
        "keepGroup0028": true,
        "strict": false
    }
}
```