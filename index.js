import express from 'express';

const app = express();

app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.status(200).json({menssagem: 'Rota de GET- usuários'});
});

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({menssagem: `Rota de GET- usuário ${id}`});
});

app.post('/usuarios/criar', (req, res) => {
    const { nome, email } = req.body;
    res.status(201).json({menssagem: `Usuário ${nome} criado com sucesso!`, email});
});

app.listen(3000)
