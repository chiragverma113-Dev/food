import { NavLink } from "react-router-dom";
import { useState } from "react";

export const List = () => {
  const [data, setdata] = useState(null);
  const [search, setsearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // new state

  const getdata = async () => {
{!search?
  console.log("")
  
  :
      setHasSearched(true); // mark that search happened
    const apidata = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const res = await apidata.json();
    setdata(res.meals);

}
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-5">FOOD RECIPE APP</h1>
      <div className="max-w-[1200px] mx-auto flex gap-1 items-center justify-center p-5">
        <div className="w-full max-w-sm min-w-[200px]">
          <input
            className=" w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-[10px] border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
            placeholder="Enter Food Name"
            onChange={(event) => setsearch(event.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={getdata}
          className="bg-amber-600 rounded-[6px] text-[12px] shadow-lg hover:text-white px-3 py-2 cursor-pointer"
        >
          Search
        </button>
      </div>

      <div>
        { !hasSearched? (
          <div className="col-span-full flex justify-center items-center">
            <h1 className="text-2xl font-bold text-center">
              Search Your Food First
            </h1>
          </div>
        ) : (
          <div
            className="max-w-[1200px] gap-2 grid grid-cols-2 sm:grid-cols-5 mx-auto"
          >
            {/* Show "No Data Found" only if user searched and data is empty */}
            {hasSearched && !data ? (
              <div className="col-span-full flex justify-center items-center">
                <h1 className="text-2xl font-bold text-center">No Data Found</h1>
              </div>
            ) : (
              data?.map((e) => (
                <div
                  key={e.idMeal}
                  className="max-w-[200px] flex flex-col items-center space-y-2 border-[1px] p-[6px] border-gray-200 rounded-2xl"
                >
                  <img className="rounded-2xl" src={e.strMealThumb} alt="" />
                  <h1 className="text-[12px] font-bold text-black text-center">
                    {e.strMeal}
                  </h1>

                  <NavLink to={`/${e.idMeal}`}>
                    <button
                      type="submit"
                      className="bg-amber-600 rounded-[6px] text-[10px] shadow-lg hover:text-white px-4 py-1 cursor-pointer"
                    >
                      Got To Detail
                    </button>
                  </NavLink>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
