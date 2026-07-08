import { $$, browser } from '@wdio/globals'
import page from '../pageobjects/page-livro'

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
})
