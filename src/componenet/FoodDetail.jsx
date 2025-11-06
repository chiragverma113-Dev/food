import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Listdetail = () => {
  const { idMeal } = useParams();
  console.log(idMeal);

  const [info, setinfo] = useState(); // start with null or []

  const getinfo = async () => {
    const apidata = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const res = await apidata.json();
    console.log("API Data:", res.meals); // ✅ log the data
    setinfo(res.meals[0]);
  };

  useEffect(() => {
    if (idMeal) {
      getinfo(); // ✅ run only when idMeal is available
    }
  }, [idMeal]);

  return (
    <div>
      {!info ? (
        "no data"
      ) : (
        <div className="max-w-[1200px] mx-auto bg-amber-500 flex p-4 my-12 rounded-2xl">
          <img
            className="max-w-[300px] max-h-[300px] rounded-2xl"
            src={info.strMealThumb}
            alt=""
          />
          <div className="ml-4 ">
            <h1 className="text-xl font-bold mb-2">Recipie Name</h1>
            <div className="pb-2">
              <button className="bg-amber-900 rounded-[6px] text-[10px] shadow-lg hover:text-white px-4 py-1">
                {info.strMeal}
              </button>
            </div>

            <p className="break-all text-[12px]">{info.strInstructions}</p>
            <NavLink to={"/"}>
              <div className=" relative ">
                <button className=" cursor-pointer absolute bottom-(-10) right-0 bg-amber-900 rounded-[6px] text-[10px] shadow-lg hover:text-white px-4 py-1">
                  Go To Home Page
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
