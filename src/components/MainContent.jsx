import { SimpleGrid } from "@chakra-ui/react";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

const MainContent = ({ meals, loading, openRecipe }) => {
  
  const skeletons = [1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
   
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
      {loading && skeletons.map(skeleton => (
        <SkeletonCard key={skeleton} />
      ))}

      {
        !loading && meals?.map( meal => (
          <MealCard openRecipe={() => openRecipe(meal)} key={meal.idMeal} meal={meal}></MealCard>
        ))
      }
    </SimpleGrid>
  )
};

export default MainContent;
