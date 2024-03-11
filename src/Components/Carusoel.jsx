import React from 'react'

const Carusoel = () => {
  return (
//     <div>
//         <div className="carousel w-full">
//   <div id="item1" className="carousel-item w-full">
//     <img src="https://healthcareandprotection.com/wp-content/uploads/2021/05/Blood-Bank-02-v2-750x375.png" className="w-full" />
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXo2TjCXKuYMspOtQQjan-AghTrBNMYYj1g&usqp=CAU" className="w-full" />
//   </div> 
//   <div id="item3" className="carousel-item w-full">
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrApHWxJY3Gqnrko53H-DDCrXREJrjq75GQ&usqp=CAU" className="w-full" />
//   </div> 
//   <div id="item4" className="carousel-item w-full">
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZCjvewyIM87sCS24I3yQiHRKAElIX3fUTw&usqp=CAU" className="w-full" />
//   </div>
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">
//   <a href="#item1" className="btn btn-xs">1</a> 
//   <a href="#item2" className="btn btn-xs">2</a> 
//   <a href="#item3" className="btn btn-xs">3</a> 
//   <a href="#item4" className="btn btn-xs">4</a>
// </div>
//     </div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://healthcareandprotection.com/wp-content/uploads/2021/05/Blood-Bank-02-v2-750x375.png" className="w-full h-80 " />
    <div className="object-cover	 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXo2TjCXKuYMspOtQQjan-AghTrBNMYYj1g&usqp=CAU" className="w-full h-80 " />
    <div className="object-cover	 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrApHWxJY3Gqnrko53H-DDCrXREJrjq75GQ&usqp=CAU" className="w-full h-80 " />
    <div className="object-cover	absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZCjvewyIM87sCS24I3yQiHRKAElIX3fUTw&usqp=CAU" className="w-full h-80  " />
    <div className="object-cover	absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export  {Carusoel}