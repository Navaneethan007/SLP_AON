interface IAdminPanelRequest {
    id: number;
    client: number;
    clientName: string;
    ariba_Host: string;
    ariba_Realm: string;
    ariba_User: string;
    ariba_Password: string;
    ariba_APIKey: string;
    ariba_Token_API_URL: string;
    ariba_Get_Token_Authorisation_Token: string;
    ariba_PendingApprovables_URL: string;
    ariba_TaskDetails_URL: string;
    ariba_AttachmentDetails_URL: string;
    ariba_SupplierAppRequest_Approve_URL: string;
    serverLogFilePath: string;
    serviceInterval: string;
    supplierDocuments_DownloadPath: string;
    verfication_APIToken: string;
    verfication_GST_URL: string;
    verfication_Aadhaar_URL: string;
    verfication_MSME_URL: string;
    verfication_PAN_URL: string;
    aIverification_API_URL: string;
}