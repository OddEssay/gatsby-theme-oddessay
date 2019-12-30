import * as React from "react";

import {Box,Card} from "./index";
import {Text} from '../typeography'

export default { title: 'Cards' };

export const single_card = () => <Card><Text>This is some text in a a card.</Text></Card>

export const two_cards = () => <Box>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
</Box>
export const three_cards = () => <Box>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
</Box>

export const five_cards = () => <Box>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
</Box>

export const eight_cards = () => <Box>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
</Box>