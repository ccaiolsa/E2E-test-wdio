import { $$, browser } from '@wdio/globals'

class Login{
    get btn_conta(){
        return $('a[href="/login.html"]')

    }
    get barra_login(){
        return $('#email')

    }
    get barra_senha(){
        return $('#password')
    }
    get btn_login(){
        return $('#login-btn')
    }
    get flash_msg(){
        return $('*= Login realizado com sucesso')
    }
    async realizar_login(email, senha){
        await expect(this.btn_conta).toBeDisplayed()
        await this.btn_conta.click()
        await this.barra_login.setValue(email)
        await this.barra_senha.setValue(senha)
        await this.btn_login.click()
    }
}

export default new Login();