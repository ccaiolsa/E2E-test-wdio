import { $$, browser } from '@wdio/globals'
import login from '../pageobjects/page_login'

describe('Hub de Leitura Integrado', () => {
    beforeEach(async () => {
        await browser.url('http://localhost:3000/')
    })

    it('Funcionalidade Login', async () => {
        login.realizar_login('usuario@teste.com','user123')
        await expect(login.flash_msg).toBeDisplayed()
        await expect(browser).toHaveUrl('http://localhost:3000/dashboard.html')
    });
 
})
