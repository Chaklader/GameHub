import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import {useRouteError} from "react-router";
import {isRouteErrorResponse} from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error) ? 'This page doesn\'t exist' : 'An unexpected error occurred'}</Text>
            </Box>
        </>
    );
};

export default ErrorPage;