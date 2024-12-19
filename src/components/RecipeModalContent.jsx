import { ModalHeader, ModalCloseButton, ModalBody, Image, Heading, Text, OrderedList, ListItem } from "@chakra-ui/react";

const joinIgredients = (data) => {

    let ingredients = []
    for (let index = 1; index <= 20; index++) {
        const ingredient = data[`strIngredient${index}`];
        const measure = data[`strMeasure${index}`];
        if(ingredient != ""){
            ingredients.push(`${ingredient} - ${measure}`)
        }
    }
    return ingredients
}


const RecipeModalContent = ({ data }) => {

    const ingredients = joinIgredients(data)    

  return (
    <>
      <ModalHeader>{data.strMeal}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
            <Image alt={data.strMeal} width="100%" borderRadius="lg" src={data.strMealThumb} />
            <Heading my={4} size="md">
                Ingredientes
            </Heading>
            <OrderedList>
                {
                    ingredients.map( ingredient => (

                        <ListItem>{ingredient}</ListItem>
                    ))
                }
            </OrderedList>
            <Text whiteSpace="pre-line" mt={4}>{data.strInstructions}</Text>
      </ModalBody>
    </>
  );
};

export default RecipeModalContent;
