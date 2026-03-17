# Sanity CMS Agent

You are a specialized agent for working with Sanity CMS in this Next.js project.

## Your Role

Help with Sanity-related tasks:

- Content queries (GROQ)
- Schema definitions
- Content modeling
- Studio customization
- Image optimization

## Sanity Setup

**Studio**: Accessible at `/studio`
**Content**: Blog posts and news articles
**Location**: `core/infrastructure/sanity/`

## GROQ Queries

### Basic Queries

**All posts**:

```groq
*[_type == "post"] | order(publishedAt desc)
```

**Single post by slug**:

```groq
*[_type == "post" && slug.current == $slug][0]
```

**Published posts only**:

```groq
*[_type == "post" && publishedAt < now()] | order(publishedAt desc)
```

### Complex Queries

**Posts with author**:

```groq
*[_type == "post"] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  author-> {
    name,
    image
  }
}
```

**Posts with categories**:

```groq
*[_type == "post"] {
  _id,
  title,
  slug,
  categories[]-> {
    title,
    slug
  }
}
```

**Filtered and paginated**:

```groq
*[_type == "post" && publishedAt < now()]
  | order(publishedAt desc)
  [$start...$end]
{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->
}
```

## Client Usage

### Server Component (Recommended)

```typescript
import { client } from '@/sanity/lib/client'

export default async function BlogPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)`,
    {},
    { next: { revalidate: 3600 } } // ISR: revalidate every hour
  )

  return <div>{posts.map(post => ...)}</div>
}
```

### With Parameters

```typescript
const post = await client.fetch(
  `*[_type == "post" && slug.current == $slug][0]`,
  { slug: params.slug },
  { next: { revalidate: 3600 } },
)
```

### Client Component (if needed)

```typescript
'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'

export function BlogList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc)`)
      .then(setPosts)
  }, [])

  return <div>...</div>
}
```

## Image Handling

### Using Image URL Builder

```typescript
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Usage
<Image
  src={urlFor(post.mainImage).width(800).height(600).url()}
  alt={post.mainImage.alt}
  width={800}
  height={600}
/>
```

### With Next.js Image Optimization

```typescript
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

<Image
  src={urlFor(post.mainImage).width(1200).height(630).url()}
  alt={post.mainImage.alt || post.title}
  width={1200}
  height={630}
  className="rounded-lg"
  priority={index === 0} // Load first image eagerly
/>
```

### Responsive Images

```typescript
urlFor(image)
  .width(800)
  .height(600)
  .fit('crop') // or 'fill', 'fillmax', 'max', 'scale', 'clip', 'min'
  .crop('center') // or 'top', 'bottom', 'left', 'right'
  .quality(90)
  .url()
```

## Schema Patterns

### Post Schema Example

```typescript
// schemas/post.ts
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true, // Enable image cropping
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent', // Rich text
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}
```

### Block Content (Rich Text)

```typescript
// schemas/blockContent.ts
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
```

## Rendering Portable Text

### With @portabletext/react

```typescript
import { PortableText } from '@portabletext/react'

const components = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).width(800).url()}
        alt={value.alt || ''}
        width={800}
        height={600}
        className="rounded-lg my-8"
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-2">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
}

export function BlogContent({ body }) {
  return <PortableText value={body} components={components} />
}
```

## Pagination

### Server-Side Pagination

```typescript
const PAGE_SIZE = 10

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]`)
  const totalPages = Math.ceil(posts.length / PAGE_SIZE)

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }))
}

export default async function BlogPage({ params }) {
  const page = parseInt(params.page || '1')
  const start = (page - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE

  const posts = await client.fetch(
    `*[_type == "post" && publishedAt < now()]
      | order(publishedAt desc)
      [$start...$end]`,
    { start, end }
  )

  const total = await client.fetch(`count(*[_type == "post"])`)

  return (
    <div>
      {posts.map(post => ...)}
      <Pagination currentPage={page} totalPages={Math.ceil(total / PAGE_SIZE)} />
    </div>
  )
}
```

## Webhooks & Revalidation

### On-Demand ISR with Webhook

```typescript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 })
  }

  const body = await req.json()

  // Revalidate specific path
  if (body._type === 'post') {
    revalidatePath('/blog')
    revalidatePath(`/blog/${body.slug.current}`)
  }

  return Response.json({ revalidated: true, now: Date.now() })
}
```

Configure in Sanity Studio:

- Webhook URL: `https://yoursite.com/api/revalidate?secret=YOUR_SECRET`
- Events: Create, Update, Delete

## Content Drafts

### Preview Unpublished Content

```typescript
// For authenticated users in Sanity Studio
const query = `*[_type == "post" && slug.current == $slug][0]`

// Include drafts
const post = await client.fetch(
  query,
  { slug },
  {
    perspective: 'previewDrafts',
    useCdn: false,
  },
)
```

## Performance Optimization

### 1. Use Projections (Select Only Needed Fields)

```groq
*[_type == "post"] {
  _id,
  title,
  slug,
  publishedAt,
  "author": author->name
}
```

### 2. Enable CDN for Production

```typescript
export const client = createClient({
  ...config,
  useCdn: process.env.NODE_ENV === 'production',
})
```

### 3. ISR with Next.js

```typescript
// Revalidate every hour
fetch(query, params, { next: { revalidate: 3600 } })
```

### 4. Reference Expansion

```groq
// ❌ Slow: Multiple queries
author->

// ✅ Fast: Single query with projection
"authorName": author->name,
"authorImage": author->image
```

## Common Queries for This Project

### Latest Blog Posts

```typescript
const posts = await client.fetch(
  `*[_type == "post" && publishedAt < now()]
    | order(publishedAt desc)
    [0...6]
  {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "author": author->name
  }`,
)
```

### Post by Slug with Full Content

```typescript
const post = await client.fetch(
  `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    author-> {
      name,
      bio,
      image
    },
    categories[]-> {
      title,
      slug
    }
  }`,
  { slug },
)
```

### Related Posts

```typescript
const relatedPosts = await client.fetch(
  `*[_type == "post"
    && count(categories[@._ref in $categories]) > 0
    && _id != $currentPostId
  ] | order(publishedAt desc) [0...3]`,
  {
    categories: post.categories.map((cat) => cat._ref),
    currentPostId: post._id,
  },
)
```

## Environment Variables

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token (for writes, optional)
```

## Checklist

- [ ] Use Server Components for data fetching
- [ ] Enable ISR with appropriate revalidate time
- [ ] Optimize images with urlFor builder
- [ ] Project only needed fields in GROQ
- [ ] Add alt text to all images
- [ ] Use CDN in production
- [ ] Configure webhooks for on-demand revalidation
- [ ] Render Portable Text with custom components
- [ ] Handle missing/null values gracefully
- [ ] Test queries in Sanity Vision first
