import React from 'react'
import './main.css';

const DeleteButton = ({flag, showModel, deleteItem}) => {
    const style = {
        position: 'fixed',
        width: '25%',
        height: '25%',
        backgroundColor: 'rgb(44 173 94)',
        top: '0',
        left: '576px',
        borderRadius: '4%',
    }

  return (
   <>
   {flag && <div style={style}>
        <h1>Bạn có chắc muốn xoá không?</h1>
        <div className="d-flex justify-content-center">
          <button onClick={deleteItem} className="btn btn-primary">Có</button>
          <button onClick={deleteItem} className="btn ">Không</button>
          </div>
   </div>}
    <button className="btn btn-primary btn-sm trash"
            type="button"
            title="Xóa"
            onClick={showModel}
    >
                            <i className="fas fa-trash-alt" />
                          </button>
   </>
  )
}

export default DeleteButton