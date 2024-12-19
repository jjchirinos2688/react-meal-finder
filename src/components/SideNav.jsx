import { Heading, VStack, Link, SkeletonText } from "@chakra-ui/react";
import React from "react";

const selectedProps = {
    bgColor: "blue.400",
    color: "white",
    fontWeight: "bold"
}

const SideNav = ({ categories, loading, selectedCategory, setSelectedCategory }) => {


  console.log('selectedCategory:', selectedCategory)

  return loading ? (
    <SkeletonText mt='1' noOfLines={8} spacing='6' skeletonHeight='2' /> 
  ) : (
    
    <>
      <Heading color="blue.400" fontSize={14} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {
        categories.map((category) => (
            <Link 
              onClick={() => setSelectedCategory(category)}
                key={category.strCategory}
                {...(selectedCategory.strCategory == category.strCategory && selectedProps)} 
                _hover={{textDecoration: 'none', background: "blue.100"}}  
                h="40px"
                px={2}
                py={2}
                borderRadius={5}
            >
                {category.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default SideNav;
