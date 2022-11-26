import React from 'react';

const ReportConfirmModal = ({handleReport,setReport}) => {
    return (
        <div>
            {/* The button to open modal */}
{/* <label htmlFor="reportConfirm" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="reportConfirm" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="reportConfirm" className="btn btn-primary" onClick={handleReport}>Confirm</label>
      <label htmlFor="reportConfirm" className="btn" onClick={()=>setReport(null)}>Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReportConfirmModal;