const HomeItem = ({item}) => {
  
  return (
    <>
      <div className="item_comtainer">
        <img className="item_image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐| {item.rating.count}
        </div>
        <div className="company_name">{item.company}</div>
        <div className="item_name">{item.item_name}</div>
        <div className="price">
          <span className="current_price">Rs.{item.current_price}</span>
          <span className="orignal_price">Rs. {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        <button className="btn_add_bag" onclick={()=>console.log("item was cliked")}>
          Add to bag
        </button>
      </div>
    </>
  );
};
export default HomeItem;
