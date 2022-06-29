import styled from '@emotion/styled';
import { theme } from 'styles';

export const CardUser = styled.div`
  width: 250px;
  border: solid 1px ${theme.colors.gray};
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
  border-radius: 4px;
  padding-top: 30px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border: solid 1px ${theme.colors.gray};
  outline: none;
  border-radius: 50px;
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
  margin-bottom: 10px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: ${theme.colors.gray};
`;

export const Location = styled.p`
  color: ${theme.colors.gray};
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
   justify-content: space-evenly;
   padding-inline-start: 0;
   margin-block-start: 0;
   margin-block-end: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px ${theme.colors.gray};
  box-shadow: 5px 5px 11px 1px ${theme.colors.shadow};
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.shadow};
`;

export const Quantity = styled.span`
  font-style: normal;
  font-size: 18px;
  font-weight: 700;
`;

export const Label = styled.span`
  color: ${theme.colors.gray};
`;