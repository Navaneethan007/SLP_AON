export const SupplierRequestMapper = (data: any[]): ISupplierData[] => {

    let supplierData: ISupplierData[] = [];
    data.map((d, i) => {
        supplierData.push({
            documentId: d.documentId,
            taskID: d.taskID,
            dateModified: d.createdDate,
            dateCreated: d.modifiedDate,
            suppliedId: "SCAS00" + i,
            supplierName: d.supplier_Name,
            commodity: "BG",
            region: "CHI",
            buyerName: "Buyer-" + i,
            buyerDept: "Raw",
            type: "New",
            status: d.status,
            feedback: d.isError
        });
    });

    return supplierData;
}