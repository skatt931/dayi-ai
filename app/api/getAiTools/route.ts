import { getAiTools } from '@/lib/getAiTools';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET() {
  const aiTools = await getAiTools();
  return Response.json({ aiTools });
}
