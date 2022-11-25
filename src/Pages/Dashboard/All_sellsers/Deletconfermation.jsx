import React from 'react';

const Deletconfermation = ({setDeleteData,deleteUser,DeletData}) => {
    return (
        <div>
        {/* <label htmlFor="deleteSeller" className="btn">
          open modal
        </label> */}
        
  
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="deleteSeller" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
            Varifying Confarmation
            </h3>
            <p className="py-4">
              Are You sure you want to Variefy <span className="text-xl font-bold text-blue-600">{DeletData?.name}</span> ?<br />
  
            </p>
            <div className="modal-action">
              <label htmlFor="deleteSeller" className="btn btn-primary" onClick={deleteUser}>
                Confirm
              </label>
              <label htmlFor="deleteSeller" className="btn" onClick={()=>setDeleteData(null)} >
               Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Deletconfermation;