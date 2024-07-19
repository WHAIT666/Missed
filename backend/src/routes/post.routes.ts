import express, { Request, Response, NextFunction } from 'express';
import Post, { IPost } from '../models/post.model';
import authMiddleware from '../middleware/auth.middleware';
import { IGetUserAuthInfoRequest } from '../types/request.interface';

const router = express.Router();

// Create a post
router.post('/', authMiddleware, async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  const { title, description, location, date } = req.body;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  try {
    const post: IPost = new Post({
      userId,
      title,
      description,
      location,
      date,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Get all posts
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find().populate('userId', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Get posts by location
router.get('/location/:location', async (req: Request, res: Response, next: NextFunction) => {
  const { location } = req.params;

  try {
    const posts = await Post.find({ location }).populate('userId', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

export default router;
