import { $$, browser } from '@wdio/globals'
import page from '../pageobjects/page-livro'
import pageCart from '../pageobjects/page_carrinho'

describe('Hub de Leitura Integrado', () => {
    beforeEach(async () => {
        await browser.url('http://localhost:3000/')
    })

    it('Funcionalidade Checkout', async () => {
        page.adicionar_livro('O senhor dos anéis')
        await pageCart.contador_carrinho.waitUntil(async () => {
            return (await pageCart.contador_carrinho.getText()) !== ''
        }, { timeout: 5000, timeoutMsg: 'O contador do carrinho não foi atualizado' })
        await expect(pageCart.contador_carrinho).toHaveText('1')

        pageCart.preencher_carrinho('Teste de descrição do produto')
        await expect(browser).toHaveUrl('http://localhost:3000/checkout.html')
        
        await $('h2=Finalizar').waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'O botão de finalizar não foi exibido'
        })
        await expect($('h2=Finalizar')).toBeDisplayed()
    })
})
