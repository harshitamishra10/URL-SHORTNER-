import express from 'express';
import { getBigURL, urlShort } from '../../../controllers/short-controller.js';

const shortRoute = express.Router();

shortRoute.post('/short-url', urlShort);
shortRoute.get('/small/:code', getBigURL)

export default shortRoute;
