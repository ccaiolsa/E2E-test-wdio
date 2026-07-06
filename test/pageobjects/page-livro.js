import { $$, browser } from '@wdio/globals'

class PageLivro{

    get acessar_catalogo(){
        return $('button=Explorar Catálogo')
    };
    get barra_busca(){
        return $('#search-input')

    };
    get btn_add(){
        return $('button=Adicionar à Cesta')
    };
    get flash_msg(){
        return $('#global-alert-container')
    }

    async adicionar_livro(nome){
        await this.acessar_catalogo.click()

        await expect(this.barra_busca).toBeDisplayed()
        await this.barra_busca.setValue(nome)

        await expect($(`*=${nome}`)).toBeDisplayed()
        await expect(this.btn_add).toBeClickable()
        
        await this.btn_add.click()
    }
}

export default new PageLivro();