import * as React from "react";

import {Box,Card} from "./index";
import {Text} from '../typeography'

export default { title: 'Cards' };

export const single_card = () => <Card><Text>This is some text in a a card.</Text></Card>

export const two_cards = () => <Box>
    <Card title='A card title'><Text>This is some text in a a card.</Text></Card>
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

export const eight_full_cards = () => <Box>
    <Card
        title='This card has a title'
        footnote='A footnote'
        backgroundImage='https://images.unsplash.com/flagged/photo-1577566822352-19a8185c7fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w'
    >
        <Text>This is some text in a a card.</Text>
    </Card>
    <Card
        title='A light image'
        backgroundImage='https://images.unsplash.com/photo-1571292098320-997aa03a5d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1188&q=80'
    >
        <Text>This is some text in a a card.</Text>
    </Card>
    <Card footnote='Just a footnote here'><Text>This is some text in a a card.</Text></Card>
    <Card title='Just a title here'><Text>This is some text in a a card.</Text></Card>
    <Card
        title='This card has a title'
        backgroundImage='https://images.unsplash.com/photo-1559599746-8823b38544c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    >
        <Text>This is some text in a a card.</Text>
    </Card>
    <Card title='A title' footnote='A footnote'><Text>This is some text in a a card.</Text></Card>
    <Card><Text>This is some text in a a card.</Text></Card>
    <Card
        backgroundImage='https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    >
        <Text>This is some text in a a card.</Text>
    </Card>
</Box>