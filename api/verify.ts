import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { butteryIds } from '../src/shared/butteries';

// Zod Types
const idSchema = z.enum(butteryIds);
const valueSchema = z.enum(['OPEN', 'CLOSED']);

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const { id, value } = request.query;
    // const calendarId = idSchema.parse(id);
    // const verifiedValue = valueSchema.parse(value);
    return response.end(`Hello ${id} ${value}!`);
  } catch (error) {
    return response.status(400).end(error.message);
  }
}
