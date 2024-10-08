import React, { useEffect } from "react";
import Image from "next/image";
import SupplierFilter from "./supplierFilter";
import filterSvg from '../public/filter.svg';
import sortDownSvg from '../public/sort-down.svg';
import downloadSvg from '../public/download.svg';
import errorSvg from '../public/alert.svg';
import rightCapSvg from '../public/chevron-right.svg';
import ModalDialog from "@/components/modal";
import { ErrorReview } from "./errorReview";
import { ISupplierErrorData } from "@/interfaces/ISupplierErrorData";

export const SupplierGrid: React.FC<{ supplierData: ISupplierData[], gridType: string }> = ({ supplierData, gridType }) => {
    const [searchText, setSearchText] = React.useState<string>('');
    const [tempSupplierData, setTempSupplierData] = React.useState<ISupplierData[]>();
    const [showErrorModal, setShowErrorModal] = React.useState(false);
    const [showfilter, setShowFilter] = React.useState(false);
    const [errorData, setErrorData] = React.useState<ISupplierErrorData>();
    const [status, setStatus] = React.useState<string>(gridType);
    const cols = ["Select All", "Modified Date", "Created Date", "Supplier ID", "Supplier Name", "Commodity", "Region", "Buyer Name", "Buyer's Department", "Status", "Feedback/Error", "Decision"];
    const [tableCols, setTableCols] = React.useState<string[]>(cols);
    let supplierAction: any[] = [];

    const selectAll = (isSelected: boolean) => {
        const checkbox = document.querySelectorAll('table tbody tr input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = isSelected;
        }
    }

    const showErrorReport = async (supplier: ISupplierData) => {
        if (supplier.feedback) {
            await fetch('https://aonapi.azurewebsites.net/VerificationReport/GetVerificationConsolidatedReport?docmentNo=' + supplier.documentId)
                .then((res) => res.json())
                .then((data: ISupplierErrorData) => { setErrorData(data) });
            setShowErrorModal(true);
        }
    }

    const applyFilter = (filteredData: ISupplierData[]) => {
        setTempSupplierData(filteredData);
    }

    const updateAction = (e: React.ChangeEvent<HTMLSelectElement>, data: ISupplierData) => {
        let isApproved = e.target.value == "Approve";
        supplierAction.push({ taskId: data.taskID, isApprove: isApproved })
    }

    const submitSupplierData = () => {
        supplierAction.forEach((action)=>{
            fetch(`https://aonapi.azurewebsites.net/SupplierApprovalRequest/ApproveDeny?taskId=${action.taskId}&isApprove=${action.isApprove}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            }).then(() => {
                console.log("Supplier Request updated successfully");
            })
                .catch(() => console.error("Failed to update Supplier Report Approval Request"));
        })
    }

    useEffect(() => {
        const temp = [...cols];
        if (status == "request") {
            temp.splice(temp.indexOf("Supplier ID"), 1);
            setTableCols(temp);
        }
        else {
            setTableCols(cols);
        }
    }, [status]);

    useEffect(() => {
        setTempSupplierData(supplierData);
    }, [supplierData])



    return <><div className="supplierGridContainer">
        <div className="filterContiner">
            <div>
                <input name="searchInput" placeholder="Search" className="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <div className="grid-filter">
                    <button className="sortBtn" onClick={() => { setShowFilter(!showfilter) }}>
                        <Image src={filterSvg} alt="filter icon" />
                        Filter by
                        <span className="filterCount">2</span>
                        <Image src={sortDownSvg} alt="arrow-down" />
                    </button>
                    {showfilter && <SupplierFilter supplierData={supplierData} toggleFilter={setShowFilter} filterSupplier={applyFilter} />}
                </div>
            </div>
            <div>
                <button className="sortBtn">
                    <Image src={downloadSvg} alt="filter icon" />
                    Export
                    <Image src={sortDownSvg} alt="arrow-down" />
                </button>
                <span className="statusFilter">
                    <label htmlFor="new">Supplier Registration</label> <input type="radio" id="new" name="status" value="registration" checked={status === "registration"} onChange={(e) => { setStatus(e.target.value) }} />
                    <label htmlFor="rescan">Supplier Request</label><input type="radio" name="status" id="rescan" value="request" checked={status === "request"} onChange={(e) => { setStatus(e.target.value) }} />
                </span>
            </div>
        </div>
        <div className="supplierGrid">


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs border-b">
                        <tr>
                            {tableCols.map((col, i) =>
                                <th key={`check${i}`} scope="col" className="px-3 py-3">
                                    {i == 0 && <input type="checkbox" onChange={(e) => { selectAll(e.target.checked) }} />}{col}
                                </th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {tempSupplierData && tempSupplierData.map((data, i) => <tr key={`row${i}`} className="bg-white border-b">
                            <td className="px-3 py-3 text-center">
                                <input type="checkbox" />
                            </td>
                            <td className="px-3 py-3">
                                {data.dateModified}
                            </td>
                            <td className="px-3 py-3">
                                {data.dateCreated}
                            </td>
                            {status !== "request" && <td className="px-3 py-3">
                                {data.suppliedId}
                            </td>}
                            <td scope="row" className="px-3 py-3">
                                {data.supplierName}
                            </td>
                            <td className="px-3 py-3">
                                {data.commodity}
                            </td>
                            <td className="px-3 py-3">
                                {data.region}
                            </td>
                            <td className="px-3 py-3">
                                {data.buyerName}
                            </td>
                            <td scope="row" className="px-3 py-3">
                                {data.buyerDept}
                            </td>
                            {/* <td className="px-3 py-3">
                                {data.type}
                            </td> */}
                            <td className="px-3 py-3">
                                {data.status === 'Approved' && <span className="approved">{data.status}</span>}
                                {data.status === 'Denied' && <span className="rejected">{data.status}</span>}
                            </td>
                            <td className="px-3 py-3 inline-flex cursor-pointer" onClick={() => { showErrorReport(data) }}>
                                {data.feedback ? 'Error' : 'View Report'}
                                <span className="ml-1 relative top-1"><Image src={data.feedback ? errorSvg : rightCapSvg} alt='action' /></span>
                            </td>
                            <td className="px-3 py-3">
                                <select onChange={(e) => { updateAction(e, data) }}>
                                    <option>No Action</option>
                                    <option>Approve</option>
                                    <option>Reject</option>
                                </select>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                {showErrorModal && <ModalDialog content={<ErrorReview errorData={errorData} toggleModal={setShowErrorModal} />} toggleModal={setShowErrorModal} />}
            </div>
        </div>
    </div>
        <div className="submitBtn">
            <button onClick={submitSupplierData}>Submit</button>
        </div></>
}