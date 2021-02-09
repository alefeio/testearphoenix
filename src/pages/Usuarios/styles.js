import styled from 'styled-components';
import { darken } from 'polished';

import bannerProdutos from '~/assets/banner-produtos.jpg';

export const Container = styled.div`
  background: #fff;
`;

export const Banner = styled.div`
  height: 271px;
  display: block;
  background: url(${bannerProdutos}) no-repeat center center;
  background-size: cover;
`;

export const Barra = styled.div`
  display: block;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 80px;

  @media (max-width: 720px) {
    padding: 10px;
  }

  ul {
    display: flex;
  }

  ul li a {
    margin: 5px;
    padding: 10px;
    color: #4d4d4d;
  }
`;

export const ListaProdutos = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 50px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    overflow: hidden;

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #135c58;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#135c58')};
      }
    }

    img {
      width: 250px;
      height: 250px;
      transition: 1s;

      &:hover {
        width: 350px;
        height: 350px;
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    a {
      margin: 5px 0 0;
      padding: 1.3rem;
      text-align: center;
      background: #135c58;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#135c58')};
      }
    }
  }
`;

export const Titulo = styled.h1`
  width: 100%;
  margin: 2rem auto;
  text-align: center;
`;
