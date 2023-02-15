import * as path from 'https://deno.land/std@0.177.0/path/mod.ts'
import { encode } from 'https://deno.land/std@0.177.0/encoding/base64.ts'
import parser from 'https://esm.sh/markdown-yaml-metadata-parser@3.0.0' // `npm:markdown-yaml-metadata-parser`

async function getFilesList (dir: string): Promise<string[]> {
  const files: string[] = []
  for await (const f of Deno.readDir(dir)) {
    files.push(path.join(dir, f.name))
  }
  return files
}

// deno-lint-ignore no-explicit-any
const posts: any[] = []
for (const f of await getFilesList(path.join(Deno.cwd(), 'posts'))) {
  posts.push(parser(await Deno.readTextFile(f)))
  const c = posts.length - 1
  posts[c].slug = path.parse(f).name
  for (const k in posts[c].metadata) {
    posts[c][k] = posts[c].metadata[k]
  }
  delete posts[c].metadata
  delete posts[c].content
  posts[c].description = encode(posts[c].description)
}

await Deno.writeTextFile(path.join(Deno.cwd(), 'list.json'), JSON.stringify(posts))
