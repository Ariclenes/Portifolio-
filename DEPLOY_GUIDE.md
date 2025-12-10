# 📱 GUIA DE PUBLICAÇÃO NO GITHUB PAGES

## ✅ Pré-requisitos
- [Git](https://git-scm.com) instalado
- [GitHub CLI](https://cli.github.com) instalado (`gh auth login` para autenticar)
- Uma conta GitHub

## 📋 Passos para Publicar

### 1️⃣ Criar o Repositório no GitHub
Execute este comando:

```bash
cd /workspaces/Portifolio-
gh repo create modern-developer-portfolio --public --source=. --push --description "Modern Developer Portfolio - Portfólio Pessoal de Ariclenes Maciel"
```

### 2️⃣ Habilitar GitHub Pages
Depois que o repositório for criado, acesse:
1. Vá para: `https://github.com/ariclenesmaciel/modern-developer-portfolio`
2. Clique em **Settings** (Configurações)
3. Na barra lateral, vá para **Pages**
4. Em "Build and deployment", selecione:
   - Source: **GitHub Actions**
5. O workflow automático será acionado

### 3️⃣ Acessar seu Portfólio Online
Seu portfólio estará disponível em:

```
https://ariclenesmaciel.github.io/modern-developer-portfolio/
```

## 🔗 Links para Compartilhar em Redes Sociais

### WhatsApp
```
https://wa.me/244933934838?text=Confira%20meu%20portf%C3%B3lio%20profissional!%20https%3A%2F%2Fariclenesmaciel.github.io%2Fmodern-developer-portfolio%2F
```

### LinkedIn
```
https://ariclenesmaciel.github.io/modern-developer-portfolio/
```

### Facebook
```
https://ariclenesmaciel.github.io/modern-developer-portfolio/
```

### Instagram Bio Link
```
https://ariclenesmaciel.github.io/modern-developer-portfolio/
```

## 📝 Copiar e Colar Fácil

**Link Principal:**
```
https://ariclenesmaciel.github.io/modern-developer-portfolio/
```

**Descrição para Redes:**
```
Confira meu portfólio profissional! Desenvolvido com React, TypeScript e Vite. 
Tecnólogo em Análise e Desenvolvimento de Sistemas com experiência em Full Stack, 
ERP, Redes e Segurança Digital. 🚀

https://ariclenesmaciel.github.io/modern-developer-portfolio/
```

## 🔄 Atualizações Automáticas
Sempre que você fizer `git push` para a branch `main`, o workflow automático:
1. ✅ Faz o build do projeto
2. ✅ Publica automaticamente no GitHub Pages
3. ✅ Seu site estará atualizado em poucos minutos

## 📞 Suporte
Se tiver dúvidas sobre GitHub Pages: https://docs.github.com/pt/pages
