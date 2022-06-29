import styled from '@emotion/styled';
import { theme } from 'styles';

export const StatSection = styled.section`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  border: solid 1px #afb3c0;
  border-radius: 3px;
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
`;

export const Title = styled.h2`
  padding-top: 15px;
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.darkGray};
`;

export const StatList = styled.ul`
  display: flex;
  padding-inline-start: 0;
   margin-block-start: 0;
   margin-block-end: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 70px;
  color: ${theme.colors.light};
  justify-content: center;
  align-items: center;
`;