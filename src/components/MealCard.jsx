import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Stack,
  Button,
  Text
} from "@chakra-ui/react";

const MealCard = ({ meal, openRecipe }) => {
  return (
    <Card maxW="sm" boxShadow="lg">
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />
        <Stack mt="6" spacing="3" color="blue.400">
          <Heading size="md">
            {" "}
            <Text mt={4}>{meal.strMeal}</Text>
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter mt={0} pt={2}>
        <Button onClick={openRecipe} color="white" bgColor="blue.400" width="100%">
          Ver Receta
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
