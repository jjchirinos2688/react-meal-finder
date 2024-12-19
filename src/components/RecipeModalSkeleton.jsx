import { Container, SkeletonText } from "@chakra-ui/react"


const RecipeModalSkeleton = () => {
  return (
    <Container>
        <SkeletonText my={4} noOfLines={1} skeletonHeight={8} />
        <SkeletonText noOfLines={1} skeletonHeight={280} />
        <SkeletonText mt={4} noOfLines={5} skeletonHeight={4} />
    </Container>
  )
}

export default RecipeModalSkeleton