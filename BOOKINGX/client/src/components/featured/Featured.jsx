import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=colombo,kandy,ella"
  );
  
  console.log(data)
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait") : (<><div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/685293.webp?k=799ffc96a5a78c6ed25a9f622dd64617e54e27219c54a828d1830cb3055560db&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Colombo</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/685330.webp?k=ee4ac422e47649d2d04a9759dc81fa51f138f477796a8043557e864517ae6f5f&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kandy</h1>
          <h2>{data[1]}properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/408617652.webp?k=03038030f4b7c87c97e986d17a3b2247c5cfdf8ff0b9b9cad5790d9403f9d49a&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ella</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;
