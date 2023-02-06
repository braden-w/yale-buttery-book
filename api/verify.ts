import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { setButteryVerified } from './setButteryVerified';

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

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const { id, value } = request.query;
    const calendarId = idSchema.parse(id);
    const verifiedValue = valueSchema.parse(value);
    await setButteryVerified(calendarId, verifiedValue);
    return response.status(200).end(`Successfully set ${id} to ${value}`);
  } catch (error) {
    return response.status(400).end(error.message);
  }
}
