# PartyTime

* Aplicação **fullstack** composta por **Backend (Express)** e **Frontend (React + Vite)**.
* Este README explica **detalhadamente** como configurar e iniciar o projeto **do zero**, pensando em quem nunca rodou a aplicação antes.


# 📁 Estrutura do Projeto

```
partytime/
├── backend/        # API (Express)
├── frontend/       # Aplicação web (React + Vite)
└── README.md
```


# ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* **Node.js** (versão 18 ou superior recomendada)
* **NPM** (vem junto com o Node)
* **MongoDB** (ter uma conta no MongoDB Atlas)
* **Git**

Verifique no terminal:

```bash
node -v
npm -v
git -v
```



# 🚀 Backend 

A partir da raiz do projeto:

```bash
cd backend
```

### 📦 Instalar dependências

```bash
npm install
```

# ⚠️ Configuração Obrigatória do MongoDB
Se você não configurar isso corretamente, o `backend` não vai iniciar.

### 🔗 Passo a passo (MongoDB Atlas)

1. Acesse o `MongoDB Atlas` pelo seu navegador
2. Crie uma conta (ou faça login)
3. Clique em `Create Cluster` (use o plano gratuito)
4. Vá em `Database Access`
5. Crie um usuário e senha
5. Vá em `Network Access`

Adicione: 
```
0.0.0.0/0
```

### 🔗 Pegando a connection string

1. Clique em Connect
2. Escolha MongoDB Driver para conectar sua aplicação

Copie algo assim:
```
mongodb+srv://user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

# 🔐 Variáveis de Ambiente (Backend)

Crie um arquivo chamado **`.env`** na raiz do projeto dentro da pasta `backend`.

### 📄 Siga o exemplo do `.env.example`

```env
MONGO_URI="mongodb+srv://usuario123:<senha123>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
FRONTEND_URL=http://localhost:5173
```

### ⚠️ Regras Importantes:

1. Substitua: 
* `user` → seu usuário do MongoDB
* `password` → sua senha
2.  Nunca suba o arquivo `.env` para o GitHub
3. Use o `.env.example` apenas como modelo


## ▶️ Rodar o Backend

```bash
npm run start
```

📍 O backend será iniciado em:

```
http://localhost:3000
```


# 🎨 Frontend


A partir da raiz do projeto:

```bash
cd frontend
```


## 📦 Instalar dependências

```bash
npm install
```


# 🔐 Variáveis de Ambiente (Frontend)

Crie um arquivo chamado **`.env`** dentro da pasta `frontend`.

### 📄 Siga o exemplo do `.env.example`

```env
VITE_API_URL=http://localhost:3000/api/
```

📌 Observação:

* O Vite exige que as variáveis comecem com `VITE_`


## ▶️ Rodar o Frontend

```bash
npm run dev
```

📍 A aplicação estará disponível em:

```
http://localhost:5173
```


# 🔁 Fluxo de Inicialização

```bash
# Clonar o projeto
git clone https://github.com/mateuslucasjm/partytime.git

# Backend
cd partytime/backend
npm install
npm run start

# Frontend
cd ../frontend
npm install
npm run dev
```

# 🧪 Tecnologias Utilizadas

### Backend

* Node.js
* Express
* MongoDB

### Frontend

* React
* Vite
* CSS
* HTML

---

# 📌 Observações Importantes

* Backend e Frontend devem estar rodando **simultaneamente**
* Certifique-se de que as portas **3000** e **5173** estejam livres
* Caso altere portas, atualize os arquivos `.env`

---

# ✅ Pronto!

Com isso, o projeto estará totalmente funcional em ambiente local.

Se tiver qualquer dúvida ou problema na inicialização, revise os passos acima ou as variáveis de ambiente.

