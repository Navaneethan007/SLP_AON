import React from "react";
import Image from "next/image";
import chevRightSvg from '../public/chevron-right.svg';

const SupplierFilter: React.FC<{ supplierData: ISupplierData[], toggleFilter: React.Dispatch<React.SetStateAction<boolean>>, filterSupplier: (filteredData: ISupplierData[]) => void }> = ({ supplierData, toggleFilter, filterSupplier }) => {
    const filterTypes = ["Buyer Name", "Department", "Commodities", "Geography", "Type", "Status", "Feedback"];
    const filterValue: any = {};

    const toggleFilterItem = (index: Number) => {
        let targetElement = document.querySelector(`#supplierName${index}`);
        if (!targetElement) return;

        if (targetElement.classList.contains('expand')) {
            targetElement.classList.remove('expand');
        } else {
            document.querySelector('.expand')?.classList.remove('expand');
            targetElement.classList.add('expand');
        }
    }

    const getFilterData = (type: string) => {
        let filterData: string[] = [];
        switch (type) {
            case 'Buyer Name':
                filterData = supplierData.map((supplier) => supplier.buyerName);
                break;
            case "Department":
                filterData = supplierData.map((supplier) => supplier.buyerDept);
                break;
            case "Commodities":
                filterData = supplierData.map((supplier) => supplier.commodity);
                break;
            case "Geography":
                filterData = supplierData.map((supplier) => supplier.region);
                break;
            case "Type":
                filterData = supplierData.map((supplier) => supplier.type);
                break;
                break;
            case "Status":
                filterData = ['Approved', 'Denied'];
                break;
            case "Feedback":
                filterData = ['Success', 'Error'];
                break;
        }

        return Array.from(new Set(filterData));
    }

    const selectFilter = (e: React.ChangeEvent<HTMLInputElement>, filter: string, data: string) => {
        if (!filterValue[filter]) filterValue[filter] = [];

        if (e.target.checked && filterValue[filter].indexOf(data) === -1) {
            filterValue[filter].push(data);
        } else {
            filterValue[filter].splice(filterValue[filter].indexOf(data), 1);
        }
    }

    const applyFilter = () => {
        let filteredSupplier: ISupplierData[] = supplierData;
        for (let x in filterValue) {
            switch (x) {
                case "Buyer Name":
                    filteredSupplier = filteredSupplier.filter((data) => filterValue[x].indexOf(data.buyerName) >= 0);
                    break;
                case "Department":
                    filteredSupplier = filteredSupplier.filter((data) => filterValue[x].indexOf(data.buyerDept) >= 0);
                    break;
                case "Commodities":
                    filteredSupplier = filteredSupplier.filter((data) => filterValue[x].indexOf(data.commodity) >= 0);
                    break;
                case "Geography":
                    filteredSupplier = filteredSupplier.filter((data) => filterValue[x].indexOf(data.region) >= 0);
                    break;
                case "Type":
                    filteredSupplier = filteredSupplier.filter((data) => filterValue[x].indexOf(data.type) >= 0);
                    break;
                case "Status":
                    filteredSupplier = filteredSupplier.filter((data) => filterValue[x].indexOf(data.status) >= 0);
                    break;
                case "Feedback":
                    filteredSupplier = filteredSupplier.filter((data) => filterValue[x].indexOf(data.feedback ? 'Success' : 'Error') >= 0);
                    break;
            }
        }
        filterSupplier(filteredSupplier);
    }

    return (
        <div className="filter-container">
            {filterTypes.map((filter, i) =>
            (<div className="filter-item" key={`filter${i}`}>
                <div className="filter-title" id={`supplierName${i}`} onClick={(e) => { toggleFilterItem(i) }}>
                    <p>{filter}<Image id={`chev${i}`} src={chevRightSvg} alt="right-arrow" /></p>
                </div>
                <div className='filter-content' id={`filter${i}`}>
                    <input className="search-item searchInput" placeholder="Search" />
                    <div className="filter-list">
                        {getFilterData(filter).map((data, i) =>
                            data ? <div key={`filter-item${i}`}><input id={`checkBox${i}`} type="checkbox" onChange={(e) => selectFilter(e, filter, data)} />
                                <label htmlFor={`checkBox${i}`}>{data}</label>
                            </div> : null)}
                        {getFilterData(filter).length == 0 && <div>No Records Found</div>}
                    </div>
                </div>
            </div>))}
            <div className="filter-action">
                <button className="cancel" onClick={() => toggleFilter(false)}>Cancel</button>
                <button className="apply" onClick={() => applyFilter()}>Apply</button>
            </div>
        </div>
    )
}

export default SupplierFilter;