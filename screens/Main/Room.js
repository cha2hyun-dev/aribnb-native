import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text``;

export default ({ route }) => {
    console.log(route);
    return (
        <Container>
            <Text>Room</Text>
        </Container>
    );
};