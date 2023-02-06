import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// Zod Types
const idSchema = z.enum([
  'Benjamin Franklin',
  'Berkeley',
  'Branford',
  'Davenport',
  'Ezra Stiles',
  'Grace Hopper',
  'Jonathan Edwards',
  'Morse',
  'Pauli Murray',
  'Pierson',
  'Saybrook',
  'Silliman',
  'Timothy Dwight',
  'Trumbull',
  'The Acorn',
  'The Beanjamin',
]);
const valueSchema = z.enum(['OPEN', 'CLOSED'], {
  description: 'Value must be either "OPEN" or "CLOSED"',
});

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const { id, value } = request.query;
    console.log('🚀 ~ file: verify.ts:17 ~ id', id);
    const calendarId = idSchema.parse(id);
    const verifiedValue = valueSchema.parse(value);
    return response.end(`Hello ${calendarId} ${verifiedValue}!`);
  } catch (error) {
    return response.status(400).end(error.message);
  }
}
