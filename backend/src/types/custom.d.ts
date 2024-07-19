import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: { id: string }; // Adjust the type according to your user object structure
  }
}