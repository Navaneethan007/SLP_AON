import React from 'react';

const MessageQuery = () => {
  return (
    <div>

      {
        <div className="container">
        <div className="leftSection">
            <div className="topPart">
                <div className="detailLine">
                    <span className="label">To :</span>
                    <span className="text">Buyer Name</span>
                </div>
                <div className="detailLine">
                    <span className="label">From :</span>
                    <span className="text">Supplier Name</span>
                </div>
                <div className="horizontalLine">
                    <div className="halfDetail">
                        <span className="label">Subject :</span>
                        <span className="text link">Technical drawings and material specifications</span>
                    </div>
                    <div className="halfDetail">
                        <span className="label">Attachment :</span>
                        <img src="attach.svg" alt="Attachment" className="attachmentIcon" />
                        <span className="text link">1</span>
                    </div>
                </div>
            </div>
            <div className="queryBox">
                <div className="detailLine">
                    <span className="label">Query ID :</span>
                    <span className="text">MSM0001WER3</span>
                </div>
                <div className="detailLine">
                    <span className="label">From :</span>
                    <span className="text link">Supplier Name</span>
                </div>
                <div className="detailLine">
                    <span className="label">Attachment :</span>
                    <span className="text link">
                        <img src="attach.svg" alt="Attachment" className="attachmentIcon" /> 1 CAS Queries
                    </span>
                </div>
                <div className="download">
                    <div className="buttonWrapper">
                        <img src="download.svg" alt="Start" />
                        <div className="dropdown">
                            <button className="downloadBtn">Download by</button>
                            <div className="dropdownContent">
                                <button>PDF</button>
                                <button>Excel</button>
                                <button>Word</button>
                            </div>
                        </div>
                        <img src="sort-down.svg" alt="End" />
                    </div>
                </div>
                <div className="lineAboveButtons"></div>
                <div className="buttons">
                    <button className="viewBtn">View</button>
                    <button className="replyBtn">Reply</button>
                    <button className="forwardBtn">Forward</button>
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="rightSection">
            <div className="queryHeader">
                <div className="horizontalLine">
                    <div className="halfDetail">
                        <span className="label">Query ID :</span>
                        <span className="text">MSM0001WER3</span>
                    </div>
                    <div className="verticalLine">
                <div className="detailLine">
                        <span className="label">Event ID :</span>
                        <span className="text">DOC23457</span>
                </div>
                </div>
                </div>
                <div className="horizontalLine">
                    <div className="halfDetail">
                        <span className="label">Received On :</span>
                        <span className="text">Time stamp</span>
                    </div>
                    <div className="verticalLine">
                    <div className="halfDetail">
                        <span className="label">Event Name :</span>
                        <span className="text">CASFRP</span>
                    </div>
                    </div>
                </div>
                <div className="detailLine">
                    <span className="label">Viewed by :</span>
                    <span className="text">Buyer Name</span>
                </div>
            </div>
            <div className="formBox">
            <form className="form">
<div className="formGroup">
    <label className="formLabel">To</label>
    <input type="text" value="" className="input" readOnly />
</div>
<div className="formGroup">
    <label className="formLabel">From</label>
    <span className="text">Buyer Name</span>
</div>
<div className="formGroup">
    <label className="formLabel">Subject</label>
    <input type="text" value="" className="input" />
</div>
<div className="formGroup">
    <label className="formLabel">Attachment</label>
    <div className="attachmentBox">
         CAS Queries
    </div>
</div>
<div className="formGroupMessage">
    <label className="formLabel">Message</label>
    <textarea className="messagetextarea"></textarea>
</div>
<div className="formActions">
    <button type="submit" className="sendBtn">Send</button>
    <button type="button" className="cancelBtn">Cancel</button>
</div>
</form>


            </div>
        </div>
    </div>
      }
    </div>
  );
};

export default MessageQuery;
