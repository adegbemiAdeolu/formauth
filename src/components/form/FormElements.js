import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.75);
    width: 280px;
    padding: 2rem;
    margin: auto;
    margin-top: 3rem;
`

export const Title = styled.h1`
    color: #FFFFFF;
    font-size: 1.5rem;
    margin-bottom: 2rem;
`

export const Input = styled.input`
    margin-bottom: 1rem;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 2px;
    background-color: white;

    &:last-of-type {
        margin-bottom: 1.5rem;
    }

    ::placeholder {
        color: green;
        font-style: italic;
        padding-left: 2px;
    }
`

export const SubmitButton = styled.button`
    background-color: green;
    color: #FFFFFF;
    width: fit-content;
    margin: auto;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }

    &:hover {
        color: grey;
        }
`

export const Text = styled.p`
    color: #FFFFFF;
    margin: auto;
    margin-top: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
`

export const Link = styled(ReactRouterLink)`
    color: #e87c03;
    text-decoration: underline;
    cursor: pointer;
`

export const TextSmall = styled.small`
    font-size: 0.7rem;
    color: grey;
`

export const ErrorMessage = styled.div`
    background-color: #e87c03;
    color: #FFFFFF;
    font-size: 0.8rem;
    border-radius: 4px;
    padding: 0.9rem 1.2rem;
    margin: 0 auto 0.6rem auto;
`