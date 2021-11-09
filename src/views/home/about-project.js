import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Button
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
  // Replace test data with your own
  const features = [
    {
      id: 1,
      title: 'Modular Structure',
      text: 'The structure is modular and you can shape the app yourself according to your needs.',
    },
    {
      id: 2,
      title: 'Routes',
      text: 'Routes have already been setup! And integrated So just create new pages, add routes and start working.',
    },
    {
      id: 3,
      title: 'Views',
      text: 'You can add multiple folders to views and add multiple pages to it. Which makes the app structure easy and more understandable',
    },
    {
      id: 4,
      title: 'Components',
      text: 'A component folder has also been added, You can add multiple folders for multiple components in here like <b>buttons</b> folder for multiple variants of buttons',
    },
    {
      id: 5,
      title: 'Single Page Application',
      text: 'This boilerplate is a Single Page Application and can be further on converted into a Progressive Web App too.',
    },
    {
      id: 6,
      title: 'Loading Bar',
      text: `I've added a top loading bar. So whenever we move to a route a loading bar appears as if the page never changes`,
    }
    ,
    {
      id: 7,
      title: 'UI Libraries',
      text: `I've used Chakra UI in this app. It is referenced in index.js file in src folder. You can easily use other UI libraries too.`,
    }
    ,
    {
      id: 8,
      title: 'Customization',
      text: `You can enhance this boilerplate by customizing it according to your needs. Like you can add redux in this boilerplate too.`,
    }
  ];
  
  export default function GridListWithHeading() {
    return (
      <Box p={4} className="App">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Simple React Boilerplate</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Here is a brief description of everything which is included in this project.
          </Text>
          <Link to="/">
            <Button rounded={'full'} px={6}>
              Back To Home
            </Button>
          </Link>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }