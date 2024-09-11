import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from 'src/components/NavBar.tsx';

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? "This route doesn't exist!"
    : 'An unexpected error occurred.';

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>{errorMessage}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
