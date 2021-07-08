import React from 'react'
import { Container, Wrapper, Title, Input, SubmitButton, Link, Text, TextSmall, ErrorMessage } from "./FormElements";

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

Form.SubmitButton = function FormSubmitButton ({ children, ...restProps }) {
    return <SubmitButton {...restProps}>{children}</SubmitButton>;
}

Form.Text = function FormText ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Form.Link = function FormLink ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Form.TextSmall = function FormTextSmall ({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
}

Form.ErrorMessage = function FormErrorMessage ({ children, ...restProps }) {
    return <ErrorMessage {...restProps}>{children}</ErrorMessage>;
}
