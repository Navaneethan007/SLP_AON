import React from "react";
import Image from "next/image";
import ModalDialog from "@/components/modal";
import { IReport, ISupplierErrorData } from "@/interfaces/ISupplierErrorData";
import closeIcon from '../public/close.svg';

interface IVerificationReportRequest {
    id: Number;
    approvalComments: string;
    IsApproved: boolean | null;
}

export const ErrorReview: React.FC<{ errorData: ISupplierErrorData | undefined, toggleModal: React.Dispatch<React.SetStateAction<boolean>> }> = ({ errorData, toggleModal }) => {
    const [showError, setShowError] = React.useState(false);
    const requestData: IVerificationReportRequest[] = [];

    const submitResponse = async () => {
        await requestData.map((req) => {
            fetch(`https://aonapi.azurewebsites.net/VerificationReport/ApproveDenyVerificationReport?id=${req.id}&approvalComments=${req.approvalComments}&IsApproved=${req.IsApproved}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            }).then(() => {
                console.log("Verification Report Request updated successfully");
                toggleModal(false);
            })
                .catch(() => console.error("Failed to update Verification Report Request"));
        });
    }

    const updateApprovalRequest = (report: IReport | undefined, isApproved: boolean | null, approvalComments: string) => {
        if (!report || !report?.id) return;
        let i = requestData.findIndex((req) => req.id === report.id);
        if (i === -1) {
            requestData.push({ id: report.id, approvalComments: report.approvalComments, IsApproved: report.isApproved });
            i = requestData.length - 1;
        }
        if (isApproved != null)
            requestData[i].IsApproved = isApproved;
        else
            requestData[i].approvalComments = approvalComments;
    }

    return (
        <div className="errorReviewModal">
            {/* <button onClick={() => { setShowError(!showError) }}>Open Nested Modal</button> */}
            <div>
                <div className="title">
                    <p>Error Review</p>
                    <Image src={closeIcon} alt="close icon" width={20} onClick={() => toggleModal(false)} />
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse">
                    <thead className="text-xs border-b">
                        <tr>
                            <td className="w-40 px-3 py-3">VALIDATION TYPE</td>
                            <td className="w-48 px-3 py-3">DECISION</td>
                            <td className="px-3 py-3">ERROR MESSAGE</td>
                            <td className="px-3 py-3">NOTES</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-3 py-3">
                                GST
                            </td>
                            <td className="px-3 py-3">
                                <label className="custom-radio green">
                                    <input type="radio" name="gstDecision" value="approve" onClick={(e) => { updateApprovalRequest(errorData?.gstReport, true, "") }} />
                                    <i></i>Approve
                                </label>
                                <label className="custom-radio red">
                                    <input type="radio" name="gstDecision" value="reject" onClick={(e) => { updateApprovalRequest(errorData?.gstReport, false, "") }} />
                                    <i></i>Reject
                                </label>
                            </td>
                            <td className="px-3 py-3 errorText">
                                {errorData?.gstReport?.aiComments && <div><span>AI Verification Comments :</span> {errorData?.gstReport?.aiComments || ""}</div>}
                                {errorData?.gstReport?.verificationComments && <div><span> Govt Verification Comments :</span> {errorData?.gstReport?.verificationComments || ""}</div>}
                            </td>
                            <td className="px-3 py-3">
                                <textarea value={errorData?.gstReport.approvalComments} onChange={(e) => updateApprovalRequest(errorData?.gstReport, null, e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-3">
                                PAN
                            </td>
                            <td className="px-3 py-3">
                                <label className="custom-radio green">
                                    <input type="radio" name="panDecision" value="approve" onClick={() => updateApprovalRequest(errorData?.panReport, true, "")} />
                                    <i></i>Approve
                                </label>
                                <label className="custom-radio red">
                                    <input type="radio" name="panDecision" value="reject" onClick={() => updateApprovalRequest(errorData?.panReport, false, "")} />
                                    <i></i>Reject
                                </label>
                            </td>
                            <td className="px-3 py-3 errorText">
                                {errorData?.panReport?.aiComments && <div><span>AI Verification Comments :</span> {errorData?.panReport?.aiComments || ""}</div>}
                                {errorData?.panReport?.verificationComments && <div><span> Govt Verification Comments :</span> {errorData?.panReport?.verificationComments || ""}</div>}
                            </td>
                            <td className="px-3 py-3">
                                <textarea value={errorData?.panReport?.approvalComments} onChange={(e) => updateApprovalRequest(errorData?.panReport, null, e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                    <button onClick={() => { toggleModal(false) }}>Close</button>
                    <button onClick={submitResponse}>Submit</button>
                </div>
            </div>
            {showError && <ModalDialog content={<>Nested</>} toggleModal={setShowError} />}
        </div>
    )
}