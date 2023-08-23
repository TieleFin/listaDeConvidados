
# Exercício - Lista de Convidados

Você está desenvolvendo um código back-end para um software, cujo objetivo é o controle de convidados de uma festa.

O servidor será executado em **Node.js** que será acessado através do endereço http://localhost:3000.

Você deverá utilizar o padrão API REST.

![](./imagem_festa_semfundo.png)

## Funcionalidades
O sistema deverá permitir que o usuário:

* Visualize a lista de convidados;

* Consulte se um convidado está na lista;

* Adicione um convidado;

* Remova um convidado.


Para ajudar você criamos um breve resumo do que será necessário em cada uma das funcionalidades do sistema.

______________________


### **Visualizar lista de convidados**  📋

Você deverá utilizar a URL: http://localhost:3000/convidados, o verbo será o GET e no body deverá retornar a lista de convidados.


DICA: Utilize o Insominia para auxiliar.

`EXEMPLO:`

```javascript
// Se você criar uma variável que armazena um array de convidados:

const convidados = [
    "Amanda de Oliveira",
    "Renata dos Santos",
    "Cristina da Silva",
    "Tiago Gonçalvez"
]
```

```javascript
// Ao solicitar a lista de convidados o retorno deverá ser:
// HTTP Status 200- requisição bem sucedida

 [
    "Amanda de Oliveira",
    "Renata dos Santos",
    "Cristina da Silva",
    "Tiago Gonçalvez"
 ]
```

_______________

### **Consultar se um convidado está na lista**  📋

Você deverá utilizar a URL: http://localhost:3000/convidados, o verbo será o GET e no query deverá ter o parâmetro nome. 

`EXEMPLO:`

Se quisermos veriricar se o nome "Diogo Teixeira" está na lista:

* http://localhost:3000/convidados?nome=Diogo_Teixeira

O retorno deverá ser conforme exemplos abaixo:

```javascript
// Quando é informado um nome que não está na lista:
// HTTP Status 404
{
    "mensagem": "Convidado não encontrado"
}
```
```javascript
// Quando é informado um nome presente na lista:
// HTTP Status 200
{
    "mensagem": "Convidado está na lista"
}
```
___________

### **Adicionar um convidado**  📋

Você deverá utilizar a URL: http://localhost:3000/convidados, o verbo será o POST e no body da requisição deverá ter um objeto JSON com a propriedade *nome*.

OBS: Não será permitido que o mesmo convidado seja cadastrado mais de uma vez.

`EXEMPLO:`

Se quisermos *adicionar* o nome "Diogo Teixeira" na lista:

```javascript
// No body da requisição:
{
    "nome": "Diogo Teixeira"
}
```
```javascript
// Se o nome já existe na lista
// HTTP Status 404
{
    "mensagem": "Não é possível cadastrar convidado que já está na lista"
}
```
```javascript
// Se o nome ainda não está na lista
// HTTP Status 201
{
    "mensagem": "Convidado adicionado com sucesso"
}
```
______

### **Remover um convidado**  📋

Você deverá utilizar a URL: http://localhost:3000/convidados, o verbo será o DELETE e o convidado a ser removido deverá ser informado como parâmetro de URL do tipo caminho (params) chamado *nome*.

`EXEMPLO:`

Se quisermos *remover* o nome "Diogo Teixeira" na lista:


* http://localhost:3000/convidados/Diogo_Teixeira

```javascript
// Se o nome está na lista
// HTTP Status 200
{
    "mensagem": "Convidado removido com sucesso"
}
```
```javascript
// Se o nome não está na lista
// HTTP Status 404
{
    "mensagem": "Convidado não encontrado"
}
```

Após criar todas as funcionalidades, não esqueça de testar. 


###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`