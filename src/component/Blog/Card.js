import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Card = (props) => {
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleReadMore = () => {
    // Navigate to individual blog post page
    navigate(`/blog/${props.id || 1}`)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <div className="card-actions" style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button 
              className="btn_shadow" 
              onClick={handleReadMore}
              style={{ 
                padding: "8px 16px", 
                fontSize: "14px",
                background: "#32cd32",
                color: "#000",
                border: "none",
                borderRadius: "5px"
              }}
            >
              Read More
            </button>
            <a href='#popup' className='arrow' onClick={toggleModal}>
              <i className='fas fa-arrow-right'></i>
            </a>
          </div>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.ppimage} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              {props.title_two && (
                <>
                  <h1>{props.title_two}</h1>
                  <p>{props.desc_two}</p>
                </>
              )}

              {props.title_three && (
                <>
                  <h1>{props.title_three}</h1>
                  <p>{props.desc_three}</p>
                </>
              )}

              <div className="modal-actions" style={{ marginTop: "20px" }}>
                <button 
                  className='btn_shadow'
                  onClick={handleReadMore}
                  style={{ marginRight: "10px" }}
                >
                  Read Full Article <i className='fas fa-external-link-alt'></i>
                </button>
              </div>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card