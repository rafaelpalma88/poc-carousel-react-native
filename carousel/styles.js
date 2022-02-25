import styled from "styled-components";
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const Item = styled.View`
    width: ${width}px;
    background-color: white;
    border-color: lightgray;
    border-top-width: 8px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const BoxMonth = styled.Text`
    text-transform: uppercase;
    color: gray;
    margin-top: 5px;
    margin-bottom: 5px; 
    font-size: 12px;
`;

export const BoxValue = styled.Text`
    font-size: 26px;
    color: lightgray;
    font-weight: bold;
    margin-top: 14px;
    margin-bottom: 14px;
`;

export const Bullets = styled.View`
    flex-direction: row;
    align-self: center;
    padding-right: 24px;
    padding-top: 20px;
`;

export const Bullet = styled.View`
    width: 8px;
    height: 8px;
    background-color: ${({ active }) => active ? 'black' : 'gray'};
    margin-left: 8px;
    border-radius: 4px;
`;

export const ItemBottom = styled.View`
    background-color: lightgray;
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
    border-bottom-left-radius: 5px;
    margin-right: 1px;    
`;

