import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas básicas
app.get('/user/:id', async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    // Aquí deberías consultar la base de datos para obtener el usuario
    res.json({
      id: userId,
      name: "Carlos Gómez",
      email: "cgomez@mail.com",
      birthdate: "1990-01-01",
      nDni: 12345678,
      turns: [
        {
          id: 1,
          date: "2021-01-01",
          time: "10:00",
          status: "active"
        },
        {
          id: 2,
          date: "2021-01-01",
          time: "11:00",
          status: "cancelled"
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/user/register', (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  if (!name || !email || !birthdate || !nDni || !username || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  // Aquí deberías procesar el registro de usuario
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/users/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  // Aquí deberías procesar el login del usuario
  res.status(200).json({
    login: true,
    user: {
      id: 1,
      name: "Carlos Gómez",
      email: "cgomez@mail.com",
      birthdate: "1990-01-01",
      nDni: 12345678
    }
  });
});

app.get('/turns', (req: Request, res: Response) => {
  try {
    // Aquí deberías consultar la base de datos para obtener los turnos
    res.json([
      {
        id: 1,
        date: "2021-01-01",
        time: "10:00",
        status: "active"
      },
      {
        id: 2,
        date: "2021-01-01",
        time: "11:00",
        status: "cancelled"
      }
    ]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/turns/schedule', (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  if (!date || !time || !userId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  // Aquí deberías procesar la creación de un nuevo turno
  res.status(201).json({ message: 'Turno creado exitosamente' });
});

app.put('/turns/cancel/:id', (req: Request, res: Response) => {
  const turnoId = req.params.id;
  try {
    // Aquí deberías procesar la cancelación del turno
    res.status(200).json({ message: `Turno ${turnoId} cancelado` });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Manejo de errores global
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
