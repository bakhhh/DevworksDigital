import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { z } from 'zod';

// Simple in-memory storage for demo purposes
// In production, you'd use a proper database
let contacts: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      // Submit contact form
      const validatedData = insertContactSchema.parse(req.body);
      const contact = {
        id: Date.now().toString(),
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      contacts.push(contact);
      
      res.status(200).json({ success: true, contact });
    } else if (req.method === 'GET') {
      // Get all contacts
      res.status(200).json({ success: true, contacts });
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: 'Invalid form data', 
        errors: error.errors 
      });
    } else {
      console.error('API Error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  }
}