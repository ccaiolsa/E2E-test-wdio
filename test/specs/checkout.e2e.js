import { $$, browser } from '@wdio/globals'
import page from '../pageobjects/page-livro'
import pageCart from '../pageobjects/page_carrinho'

describe('Hub de Leitura Integrado', () => {
    beforeEach(async () => {
        await browser.url('http://localhost:3000/')
    })

    it('Funcionalidade Checkout', async () => {
        page.adicionar_livro('O senhor dos anéis')
        await expect(
            pageCart.contador_carrinho
        ).toHaveText('1')
        pageCart.preencher_carrinho('Teste de descrição do produto')
        await expect(browser).toHaveUrl('http://localhost:3000/checkout.html')
        await expect(
            $('h2=Finalizar')
        ).toBeDisplayed()
    })
})
