import React from 'react';

const DeleteModal = ({setDelete,handleDelete,deletereported}) => {
    return (
        <div>
            {/* The button to open modal */}
{/* <label htmlFor="DeleteReport" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="DeleteReport" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Deleting confermation</h3>
    <p className="py-4">Are you sure You want to delete this product</p>
    <div className="modal-action">
      <label htmlFor="DeleteReport" className="btn btn-primary" onClick={handleDelete}>Confirm</label>
      <label htmlFor="DeleteReport" className="btn" onClick={()=>setDelete(null)}>Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteModal;