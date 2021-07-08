import React from 'react'
import { Container, Wrapper, Title, Input, Button, Link, Text, TextSmall } from "./FormElements";

export default function Form({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Wrapper = function FormWrapper({ children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

Form.Title = function FormTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
}

Form.Input = function FormInput({ children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>;
}

Form.Button = function FormButton ({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

Form.Text = function FormText ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Form.Text = function FormText ({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}

Form.Link = function FormLink ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Form.TextSmall = function FormTextSmall ({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
}
