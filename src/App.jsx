import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import useHttpData from "./hooks/useHttpCategories";
import axios from "axios";
import useHttpCategories from "./hooks/useHttpCategories";
import useHttpMeals from "./hooks/useHttpMeals";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";


const defaultCategory = {
  strCategory: "Beef",
}

function App() {
  
  // Busca las categorías y las asigna a data
  const { loading, data } = useHttpCategories(url);

  // busca los platos y los asigna a meals. Tambien se ejecuta al cambiar la categoria seleccionada
  const { loadingMeals, setLoadingMeals, meals, setMeals, selectedCategory, setSelectedCategory } = useHttpMeals();

  // Abre el modal
  const { isOpen, onOpen, onClose } = useDisclosure()   


  // Busca un plato escrito en el buscador
  const searchApi = (dataForm) => {
    setLoadingMeals(true)
    console.log("Categoría a buscar: ", dataForm.search);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dataForm.search}`;
    axios.get(url)
    .then((response) => setMeals(response.data.meals))
    .finally( () => setLoadingMeals(false))
  };

  const {fetch, loading:loadingDetail, data: dataDetail} = useFetch()

  // Busca el detalle de un plato
  const searchMealDetails = (meal) => {
    console.log('Buscar detalle meal')
    onOpen()
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
    fetch(url)
  }

  return (
    <>
      <Grid
        templateAreas={`"header header"
                    "nav main"
                  `}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ sm: "0 1fr", md: "250px 1fr" }}
        fontSize={14}
      >
        <GridItem
          pt="2"
          boxShadow="lg"
          bg="white"
          area={"header"}
          zIndex={1}
          position="sticky"
          top={0}
        >
          <Header onSubmit={searchApi} />
        </GridItem>
        <GridItem
          p="5"
          area={"nav"}
          height="calc(100vh - 60px)"
          position="sticky"
          top="60px"
          left="0"
          overflowY="auto"
        >
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>
        <GridItem p="4" bgColor="gray.100" area={"main"}>
          <MainContent loading={loadingMeals} meals={meals} openRecipe={searchMealDetails} />
        </GridItem>
      </Grid>
      <RecipeModal isOpen={isOpen} data={dataDetail} onClose={onClose} loading={loadingDetail}></RecipeModal>
    </>
  );
}

export default App;
