import BagItem from "../component/BagItem";
import BagSummery from "../component/BagSummery";

const Bags=()=>{
  const item={
    id: '007',
    image: 'images/7.jpg',
    company: 'The Indian Garage Co',
    item_name: 'Men Slim Fit Regular Shorts',
    original_price: 1599,
    current_price: 639,
    discount_percentage: 60,
    rating: {
        stars: 4.2,
        count: 388,
    }}

  return(
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
         <BagItem item={item}/>
         </div>
         <BagSummery/>
      </div>
    </main>
    )
}
export default Bags;