import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByType"
  );


  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/square200/156672332.webp?k=fb817c626611cda449f13f29a7f753fd20a079b47c99c7eaa75d161e7f4f9b0a&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/483815281.webp?k=2515acb9affdfd74e8ceb1dff00a6b4ed5349787bc4403d58407820ebbe30632&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/507026305.webp?k=1104ecf9135206b2eeabb76067713b765145c5f4a9bdb49dd97c6d03cac741d7&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/239658998.webp?k=5b6dd87466c544e3bee0797ed2360c9c716b6e57fdceb324b1a5b2cef7eb4808&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/245320652.webp?k=dd99086426e6370eb5ed0609fedb5d368959141d8d710b14edc5a1fd330040a5&o="

  ];

  return (
    <div className="pList">
    {loading ? (
        "loading"
      ) : (
        <>
        {data &&
            images.map((img,i) => (
      <div className="pListItem">
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div>
      
      ))}
      </>
      )}

    </div>
  );
};

export default PropertyList;
