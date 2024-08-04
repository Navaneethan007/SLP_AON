import React from "react";
import Image from "next/image";
import chevRightSvg from '../public/chevron-right.svg';

const SupplierFilter: React.FC<{ supplierData: ISupplierData[], toggleFilter: React.Dispatch<React.SetStateAction<boolean>> }> = ({ supplierData, toggleFilter }) => {
    const filterTypes = ["Buyer Name", "Department", "Commodities", "Geography", "Type", "Status", "Feedback"];
    // document.addEventListener('click',(e)=>{
    //     e.stopPropagation();
    //     toggleFilter(false);
    // });


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

        return filterData;
    }

    return (
        <div className="filter-container">
            {filterTypes.map((filter, i) =>
            (<div className="filter-item">
                <div className="filter-title" id={`supplierName${i}`} onClick={(e) => { toggleFilterItem(i) }}>
                    <p>{filter}<Image id={`chev${i}`} src={chevRightSvg} alt="right-arrow" /></p>
                </div>
                <div className='filter-content' id={`filter${i}`}>
                    <input className="search-item searchInput" placeholder="Search" />
                    <div className="filter-list">
                        {getFilterData(filter).map((data, i) =>
                            data ? <div><input id={`checkBox${i}`} type="checkbox" />
                                <label htmlFor={`checkBox${i}`}>{data}</label>
                            </div> : null)}
                        {getFilterData(filter).length == 0 && <div>No Records Found</div>}
                    </div>
                </div>
            </div>))}
            <div className="filter-action">
                <button className="cancel" onClick={() => toggleFilter(false)}>Cancel</button>
                <button className="apply">Apply</button>
            </div>
        </div>
    )
}

export default SupplierFilter;