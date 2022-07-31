import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import renderWithProvider from './helpers/renderWithProvider';
import WineBanner from '../components/WineBanner';

describe('Testa o componente WineCard', () => {
    beforeEach(() => {
        renderWithRouter(renderWithProvider(<WineBanner />));
      });
    it('verifica se o banner com os vinhos é renderizado', () => {
        const wineBanner = screen.getByTestId('wine-banner');
        expect(wineBanner).toBeInTheDocument();
    })
});
