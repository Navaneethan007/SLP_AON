import React from "react";
import Image from "next/image";
import chevRightSvg from '../public/chevron-right.svg';

const SupplierFilter: React.FC<{ supplierData: ISupplierData[], toggleFilter: React.Dispatch<React.SetStateAction<boolean>> }> = ({ supplierData, toggleFilter }) => {

    // document.addEventListener('click',(e)=>{
    //     e.stopPropagation();
    //     toggleFilter(false);
    // });


    const toggleFilterItem = (e: any) => {
        if (e.target.parentElement.parentElement.classList.contains('expand')) {
            e.target.parentElement.parentElement.classList.remove('expand');
        } else {
            document.querySelector('.expand')?.classList.remove('expand');
            e.target.parentElement.parentElement.classList.add('expand');
        }
    }

    return (
        <div className="filter-container">
            <div className="filter-item">
                <div className="filter-title" id='supplierName'>
                    <p>Supplier Name <Image src={chevRightSvg} alt="right-arrow" onClick={(e) => { toggleFilterItem(e) }} /></p>
                </div>
                <div className='filter-content'>
                    <input className="search-item searchInput" placeholder="Search" />
                    <div className="filter-list">
                        <div><input type="checkbox" />
                            <label>Buyer 1</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 2</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 3</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 4</label></div>
                            <div><input type="checkbox" />
                            <label>Buyer 1</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 2</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 3</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 4</label></div>
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <div className="filter-title" id='supplierName'>
                    <p>Buyer Name <Image src={chevRightSvg} alt="right-arrow" onClick={(e) => { toggleFilterItem(e) }} /></p>
                </div>
                <div className='filter-content'>
                    <input className="search-item searchInput" placeholder="Search" />
                    <div className="filter-list">
                        <div><input type="checkbox" />
                            <label>Buyer 1</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 2</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 3</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 4</label></div>
                            <div><input type="checkbox" />
                            <label>Buyer 1</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 2</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 3</label></div>
                        <div><input type="checkbox" />
                            <label>Buyer 4</label></div>
                    </div>
                </div>
            </div>
            <div className="filter-action">
                <button className="cancel" onClick={() => toggleFilter(false)}>Cancel</button>
                <button className="apply">Apply</button>
            </div>
        </div>
    )
}

export default SupplierFilter;