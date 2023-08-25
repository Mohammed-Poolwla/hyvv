import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface IPricingCard {
  id: string;
  interval: string;
  description: string;
  name: string;
  price: number;
  to: string;
}

const PricingCard: React.FC<IPricingCard> = ({
  id,
  interval,
  description,
  name,
  price,
  to,
}) => {
  const router = useRouter();
  return (
    <Card maxW="sm" key={id}>
      <CardBody>
        <Image src="/hyvv-small.png" alt="card-image" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <HStack alignItems="baseline">
            <Text color="blue.600" fontSize="2xl">
              ${price / 100}
            </Text>
            <Text color="gray.500">/{interval}</Text>
          </HStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup ml={"auto"} mr={"auto"} spacing="2">
          <Button
            variant="solid"
            colorScheme="yellow"
            onClick={() => router.push(to)}
          >
            Get Started
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
