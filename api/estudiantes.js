import { Router } from 'express';
const router = Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Ruta madre Estudiantes')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Estudiantes')
})

export default router;