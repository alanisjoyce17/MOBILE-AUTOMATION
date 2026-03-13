# 📱🤖 Automação Mobile com WebdriverIO, Appium e Cucumber

![Node](https://img.shields.io/badge/node-%3E%3D16-green)
![Appium](https://img.shields.io/badge/Appium-automation-blue)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-yellowgreen)
![CI](https://img.shields.io/github/actions/workflow/status/seu-usuario/seu-repo/ci.yml?label=CI)

Framework de automação de testes mobile utilizando **WebdriverIO**, **Appium** e **Cucumber (BDD)**.  
Relatórios gerados com **Allure Report** e integração contínua via **GitHub Actions**.

---

## 📂 Estrutura do projeto
| Pasta                | Descrição                                |
|-----------------------|------------------------------------------|
| `features/`           | Cenários de teste em BDD                 |
| `pages/`              | Page Objects da aplicação                |
| `step-definitions/`   | Implementação dos passos dos testes      |
| `.github/workflows/`  | Pipeline CI                              |

---

## ▶️ Como executar
Instalar dependências:
```bash
npm install

## ▶️ Executar testes:
npx wdio run wdio.conf.js