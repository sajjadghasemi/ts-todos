import React from 'react'

const Infinite = () => {
  return (
    <div>HEEEEEEEEY</div>
  )
}

export default Infinite

// import React, { useContext, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { Link } from "react-router-dom";
// import { DbContext } from "../../store/db-context";
// import Header from "../layouts/Header";
// import LoadingLayout from "../layouts/LoadingLayout";

// const LIMIT = 6;

// const AllProducts = () => {
//     const ctx = useContext(DbContext);

//     const products = ctx.db.products;

//     const [productsData, setProductsData] = useState(products.slice(0, LIMIT));
//     const [visible, setVisible] = useState(LIMIT);
//     const [hasMore, setHasMore] = useState(true);

//     const fetchData = () => {
//         const newLimit = visible + LIMIT;
//         const dataToAdd = products.slice(visible, newLimit);

//         if (products.length > productsData.length) {
//             setTimeout(() => {
//                 setProductsData([...products].concat(dataToAdd));
//             }, 1500);
//             setVisible(newLimit);
//         } else {
//             setHasMore(false);
//         }
//     };

//     return (
//         <>
//             <Header />
//             <div className="col-md-12 pull-right mt-3 shabnam">
//                 <div className="section-slider-product">
//                     <div className="widget widget-product card">
//                         <header className="card-header">
//                             <h3 className="title-one text-light shabnam">
//                                 محصولات
//                             </h3>
//                         </header>
//                         <div className="product-carousel owl-carousel owl-theme owl-rtl owl-loaded owl-drag">
//                             <div className="owl-stage-outer">
//                                 <div className="owl-stage">
//                                     <InfiniteScroll
//                                         dataLength={productsData.length}
//                                         next={fetchData}
//                                         hasMore={hasMore}
//                                         loader={<LoadingLayout />}
//                                     >
//                                         {productsData.map((item) => (
//                                             <div
//                                                 key={item.id}
//                                                 className="owl-item active col-md-4"
//                                             >
//                                                 <div className="item">
//                                                     <Link
//                                                         to={
//                                                             "product/" + item.id
//                                                         }
//                                                     >
//                                                         <img
//                                                             src={item.img}
//                                                             className="img-fluid"
//                                                             alt=""
//                                                         />
//                                                     </Link>
//                                                     <h5 className="text-center">
//                                                         <Link
//                                                             to="product/id"
//                                                             className="shabnam text-light"
//                                                         >
//                                                             {item.title}
//                                                         </Link>
//                                                     </h5>
//                                                     <div className="price text-center">
//                                                         <span className="shabnam text-price">
//                                                             {item.price}
//                                                             <span>تومان</span>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </InfiniteScroll>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AllProducts;
