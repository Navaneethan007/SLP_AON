export interface ISupplierErrorData {
    gstComments: string;
    panComments: string;
    gstReport: IReport;
    panReport: IReport
}

export interface IReport {
    id: number;
    documentNo: string;
    documentType: string;
    aiComments: string;
    verificationComments: string;
    aiValid: string;
    verficationValid: string;
    valid: boolean;
    isApproved: boolean;
    approvalComments: string;
}