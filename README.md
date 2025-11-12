# Transfer & Shuttle Brazil - Website

Um website moderno e responsivo para serviços de transporte premium no Brasil, inspirado no design do Rolzo.

## 📋 Estrutura do Projeto

```
TransferShuttleBrazil/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   └── style.css          # Estilos CSS
│   ├── js/
│   │   └── main.js            # JavaScript
│   └── images/                # Pasta para imagens
└── README.md                  # Documentação
```

## 🎨 Seções do Website

### 1. Header & Navigation
- Logo da marca
- Menu de navegação
- Links para principais seções
- CTA (Call-to-Action)

### 2. Hero Section
- Título principal "Elevando Cada Jornada"
- Subtítulo descritivo
- Dois botões: "Reservar Agora" e "Falar com Especialista"
- Background gradient profissional

### 3. Serviços (6 cards)
- **Transfers** - Transporte entre pontos
- **Transfers Aeroporto** - Especializado para aeroportos
- **Transporte por Hora** - Aluguel por período
- **Shuttle Service** - Transporte contínuo
- **Serviços VIP** - Atendimento premium
- **Soluções Corporativas** - Pacotes para empresas

### 4. Seção de Reserva
- Formulário com campos:
  - Tipo de Serviço
  - Data de Saída
  - Hora de Saída
  - Local de Saída
  - Local de Chegada
  - Número de Passageiros
- Submit button para buscar disponibilidade

### 5. Por Que Escolher
- 4 motivos com emojis:
  1. Fácil de Usar
  2. Eficiente
  3. Confiável
  4. Global

### 6. Estatísticas
- 27 Estados Cobertos
- 500 Cidades Atendidas
- 150 Aeroportos
- 10000 Passageiros Mensais

### 7. Depoimentos
- 3 testimoniais de clientes
- Nome e profissão de cada um

### 8. CTA Final
- Chamada final para ação
- Botões de reserva e contato por telefone

### 9. Footer
- 4 colunas de links
- Contato
- Links de termos e privacidade

## 🎯 Funcionalidades

### Design Responsivo
- Mobile-first approach
- Funciona em todos os tamanhos de tela
- Grid system moderno

### Interatividade
- Smooth scroll
- Menu móvel (preparado)
- Formulário interativo
- Contador de números animado
- Lazy loading de imagens

### Performance
- CSS otimizado
- JavaScript minimalista
- Sem dependências externas
- Carregamento rápido

### SEO
- Meta tags otimizadas
- Schema.org pronto para implementação
- URLs semânticas
- Open Graph tags

## 🎨 Paleta de Cores

- **Azul Primário:** #1a5490
- **Laranja Secundário:** #f39c12
- **Vermelho Accent:** #e74c3c
- **Texto Escuro:** #2c3e50
- **Texto Claro:** #ecf0f1
- **Branco:** #ffffff

## 📱 Breakpoints

- Desktop: 1400px
- Tablet: 768px
- Mobile: < 768px

## 🚀 Como Usar

### 1. Abrir o Website
```
Abra index.html em seu navegador
```

### 2. Customizar
- Edite `assets/css/style.css` para mudar cores e estilos
- Edite `assets/js/main.js` para adicionar funcionalidades
- Edite `index.html` para mudar conteúdo

### 3. Adicionar Imagens
- Coloque imagens em `assets/images/`
- Referencie em HTML: `<img src="assets/images/seu-arquivo.jpg">`

### 4. Publicar
- Faça upload dos arquivos para seu servidor
- Compatível com GitHub Pages, Vercel, Netlify, etc.

## 📧 Funcionalidades JavaScript

### Booking Form
```javascript
- Validação de campos obrigatórios
- Coleta de dados de reserva
- Feedback ao usuário
```

### Smooth Scroll
```javascript
- Navegação suave entre seções
- Links de âncora funcionais
```

### Counter Animation
```javascript
- Anima números estatísticos
- Ativa quando seção fica visível
```

### Lazy Loading
```javascript
- Carrega imagens sob demanda
- Melhora performance
```

## 🔧 Customizações Comuns

### Mudar Logo
```html
<a href="#" class="logo">Seu Logo <span>Aqui</span></a>
```

### Mudar Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-color: #1a5490;
    --secondary-color: #f39c12;
    /* ... */
}
```

### Adicionar Novo Serviço
```html
<div class="service-card">
    <div class="service-icon">🚐</div>
    <h3>Novo Serviço</h3>
    <p>Descrição</p>
    <a href="#booking">Saiba mais →</a>
</div>
```

### Conectar Formulário
No `main.js`, edite a função `bookingForm`:
```javascript
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        // Adicione seu código aqui
    });
}
```

## 📊 Integração com Backend

### Enviar dados para servidor
```javascript
fetch('/api/booking', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
```

### Conectar API de Pagamento
- Stripe
- PayPal
- Mercado Pago

### Integrar CRM
- HubSpot
- Salesforce
- Pipedrive

## 🔒 Segurança

- Validação de entrada no formulário
- CSRF protection (implementar no backend)
- HTTPS recomendado
- Sanitização de dados

## ♿ Acessibilidade

- Semântica HTML correta
- ARIA labels onde necessário
- Contraste de cores adequado
- Navegação por teclado

## 📈 SEO

Para melhorar SEO:

1. **Meta Tags**
   - Title tags únicos
   - Meta descriptions
   - Open Graph tags

2. **Content**
   - H1, H2, H3 hierárquicos
   - Keywords relevantes
   - URLs descritivas

3. **Técnico**
   - Sitemap.xml
   - Robots.txt
   - Schema.org markup
   - Mobile-friendly

## 🚀 Deployment

### GitHub Pages
1. Crie repositório
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

### Netlify
1. Conecte seu repositório
2. Configure build settings
3. Deploy automático

### Vercel
1. Importe projeto
2. Configure environment
3. Deploy

## 📞 Suporte

Para adicionar número de telefone:
```html
<a href="tel:+551133334444">Ligar Agora</a>
```

Para WhatsApp:
```html
<a href="https://wa.me/551133334444">WhatsApp</a>
```

## 📅 Futuras Melhorias

- [ ] Integração com sistema de reservas
- [ ] Dashboard para gerenciar reservas
- [ ] Aplicativo móvel
- [ ] Chat ao vivo
- [ ] Rastreamento em tempo real
- [ ] Programa de fidelidade
- [ ] Múltiplas línguas

## 📝 Licença

Todos os direitos reservados © 2024 Transfer & Shuttle Brazil

## 👥 Créditos

Desenvolvido por: GitHub Copilot
Inspirado em: Rolzo.com
Data: 11 de Dezembro de 2024

---

**Pronto para elevar suas jornadas!** 🚐
