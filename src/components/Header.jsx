import {
  Container,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

const Header = ({ onSubmit }) => {
  const { register, formState, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxW="3xl">
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <IoSearchOutline />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Prueba con 'Chicken o Beef'"
                {...register("search", { required: true })}
                focusBorderColor={
                  !!formState.errors.search ? "crimson" : "blue.400"
                }
                isInvalid={!!formState.errors.search}
              />
              <Button type="submit" ml={5} color="white" bgColor="blue.400">
                Buscar
              </Button>
            </InputGroup>
          </Stack>
        </Container>
      </form>
    </>
  );
};

export default Header;
