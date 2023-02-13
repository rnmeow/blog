import * as path from 'https://deno.land/std@0.97.0/path/mod.ts'
import { encode } from 'https://deno.land/std@0.177.0/encoding/base64.ts'

async function getFilesList (dir: string): Promise<string[]> {
  const files: string[] = []
  for await (const f of Deno.readDir(dir)) {
    files.push(path.join(dir, f.name))
  }
  return files
}

const posts: string[] = []
for (const f of (await getFilesList(path.join(Deno.cwd(), 'posts')))) {
  posts.push(encode(await Deno.readTextFile(f)))
}
await Deno.writeTextFile(path.join(Deno.cwd(), 'posts.json'), JSON.stringify(posts))
