
const {useEffect , useState} = React

const categories = [
  "All",
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery"
];
function App() {

  const [getApiData,setGetApiData] = useState([])
  const [getCategory,setGetCategory] = useState([])

  const getApiDataFn = async() => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setGetApiData(response.data)
  }
  useEffect(()=>{
    getApiDataFn()
  },[])

  console.log(getApiData);
  

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="搜尋產品..."
          className="p-2 border rounded-md flex-grow"
          value={''}
          onChange={() => {}}
          />
        <select
          className="p-2 border rounded-md"
          value={''}
          onChange={() => {}}
          >
          <option value={'類別 value'}>
            類別 1
          </option>
          
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {getApiData.map((item,index)=>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" key={index}>
          <div className="relative overflow-hidden">
            <img
              src={'https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=2840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt={'圖片 title'}
              className={item.image}
              />
            <button
              onClick={() => {}}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={"none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
              </svg>
            </button>
          </div>
          <div className="p-4 flex-grow flex flex-col">
            <h2 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h2>
            <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-gray-600">
                  {item.rating.rate} ({item.rating.count})
                </span>
              </div>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {item.category}
              </span>
            </div>
            <div className="flex items-center ms-1 mb-4">
              <span className="font-bold text-lg">{item.price}</span>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
