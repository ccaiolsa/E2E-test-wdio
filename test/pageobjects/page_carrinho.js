import { $$, browser } from '@wdio/globals'

class PageCarrinho{
    get contador_carrinho(){
        return $('#cart-count')
    }
    get link_carrinho(){
        return $('a[href="/basket.html"]')
    }
    get descricao(){
        return $('textarea')
    }
    get finalizar_compra(){
        return $('button=Finalizar Reservas')
    }

    async preencher_carrinho(texto){
        await this.link_carrinho.click()
        await this.descricao.setValue(texto)
        await expect(this.finalizar_compra).toBeDisplayed()
        await this.finalizar_compra.click()
    }
    
}

export default new PageCarrinho();