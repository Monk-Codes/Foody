import useHttp from "../assets/UseHttp";
import MealItem from "./MealItem";

const reqConfig = {};

export default function Meals() {
 const { data: loadedMeals, isLoad, error } = useHttp("http://localhost:3000/meals", reqConfig, []);

 if (isLoad) {
  return <p className="center">Fetching meals..</p>;
 }
 if (error) {
  return (
   <div className="error">
    <h2>Failed to fetch meals</h2>
    <p>{error}</p>
   </div>
  );
 }
 ////////////////////////////
 return (
  <>
   <ul id="meals">
    {loadedMeals.map((meal) => (
     <MealItem key={meal.id} meal={meal} />
    ))}
   </ul>
  </>
 );
}
