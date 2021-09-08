import "./home.css"
import bg from './imgs/bg.jpg'
import Product from "./Products/product";




const Homee = () => {
    return (
      <div className="home">
        <div className="home-cont">
        <img src={bg} alt="" className='home-img' />
          <div className="home-row">
            < Product title = {'ZOTAC Gaming GeForce RTX 3060 Twin Edge'} 
            price = {750} img ={"https://m.media-amazon.com/images/I/7156DLyUsYL._AC_SL1500_.jpg"} id={548521}/>
            < Product title={'Intel Core i9-9900K'} 
            price = {337} img = {"https://m.media-amazon.com/images/I/71lKbXjVInL._AC_SL1500_.jpg"} id={84614563}/>
          </div>
          <div className="home-row">
          < Product title={'GIGABYTE Z390 AORUS PRO Wi-Fi'} 
          price = {230} img = {"https://m.media-amazon.com/images/I/711SiD3vpdL._AC_SL1500_.jpg"} id={54684515}/>
          < Product title={"RAM G.Skill Trident Z RGB Series 16GB "} 
          price = {85} img = {"https://m.media-amazon.com/images/I/61l4EStxhnL._AC_SL1274_.jpg"} id={64816548}/>
          < Product title={'Razer DeathAdder V2 Gaming Mouse'} 
          price = {120} img = {"https://m.media-amazon.com/images/I/618etkLUt9L._AC_SL1500_.jpg"} id={68454164}/>
          </div>
          <div className="home-row">
          < Product title={'Razer Blade 15 Base Gaming Laptop'} 
          price = {1160} img = {"https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_SL1500_.jpg"} id={87489514}/>
          </div>
        </div>
      </div>
    );
  };
 
export default Homee;