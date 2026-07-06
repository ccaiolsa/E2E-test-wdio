import { $$, browser } from '@wdio/globals'
import page from '../pageobjects/page-livro'
import pageCart from '../pageobjects/page_carrinho'
import login from '../pageobjects/page_login'

describe('Hub de Leitura Integrado', () => {
    beforeEach(async () => {
        await browser.url('http://localhost:3000/')
    })

    it('Deve buscar produto pelo nome', async () => {
        const nome ='O senhor dos Anéis'
        await expect($('button=Explorar Catálogo')
        ).toBeDisplayed()
        await $('button=Explorar Catálogo').click()

        await expect($('#search-input')
        ).toBeDisplayed()
        await $('#search-input').setValue(nome)

        await expect($(`*=${nome}`)
        ).toBeDisplayed()

    });
    
    it('AFuncionalidade busca', async () => {
        const nome = 'O senhor dos anéis'
        await page.adicionar_livro(nome)
        await expect(
            page.flash_msg
        ).toBeDisplayed()
        await expect(page.flash_msg
        ).toHaveText(`"O Senhor dos Anéis: A Sociedade do Anel" foi adicionado à cesta!`)

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

    it.only('Funcionalidade Login', async () => {
        login.realizar_login('usuario@teste.com','user123')
        await expect(login.flash_msg).toBeDisplayed()
        await expect(browser).toHaveUrl('http://localhost:3000/dashboard.html')
    });
 
})
