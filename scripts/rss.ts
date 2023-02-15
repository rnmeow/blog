import * as path from 'https://deno.land/std@0.177.0/path/mod.ts'
import { marky } from 'https://deno.land/x/marky@v1.1.6/mod.ts'
import parser from 'https://esm.sh/markdown-yaml-metadata-parser@3.0.0' // `npm:markdown-yaml-metadata-parser`
import { Feed } from 'https://esm.sh/feed@4.2.2' // `npm:linkedom`

async function getFilesList (dir: string): Promise<string[]> {
  const files: string[] = []
  for await (const f of Deno.readDir(dir)) {
    files.push(path.join(dir, f.name))
  }
  return files
}

const feed = new Feed({
  title: 'khh.log',
  description: '$ curl -i https://nekohuan.cyou',
  id: 'https://nekohuan.cyou',
  link: 'https://nekohuan.cyou',
  image: 'https://nekohuan.cyou/avatar.jpg', // Not next-gen image
  favicon: 'https://nekohuan.cyou/favicon.ico',
  copyright: `Copyright © 2023-present kuohuanhuan, licensed under CC BY-NC-SA 4.0`,
  feedLinks: {
    atom: `https://nekohuan.cyou/atom.xml`,
  },
  author: {
    name: 'kuohuanhuan',
    email: 'hi@nekohuan.cyou',
    link: 'https://nekohuan.cyou'
  }
})

// deno-lint-ignore no-explicit-any
const posts: any[] = []
for (const f of await getFilesList(path.join(Deno.cwd(), '../current', 'posts'))) {
  posts.push(parser(await Deno.readTextFile(f)))
  const c = posts.length - 1
  feed.addItem({
    id: `https://nekohuan.cyou/post/${path.parse(f).name}`,
    link: `https://nekohuan.cyou/post/${path.parse(f).name}`,
    title: posts[c].metadata.title,
    description: posts[c].metadata.description,
    author: [{
      name: 'kuohuanhuan',
      email: 'hi@nekohuan.cyou',
      link: 'https://nekohuan.cyou'
    }],
    date: new Date(posts[c].metadata.datetime),
    content: marky(posts[c].content)
  })
}

await Deno.writeTextFile(path.join(Deno.cwd(), 'public', 'atom.xml'), feed.atom1())
