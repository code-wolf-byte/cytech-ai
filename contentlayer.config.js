import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'date',
      required: true
    },
    summary: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    authorImg: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    image: {
      type: 'string',
    },        
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/blog\/?/, ''),
    },    
  },
}))

const Help = defineDocumentType(() => ({
  name: 'Help',
  filePathPattern: `help/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    updatedAt: {
      type: 'date',
      required: true
    },
    summary: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/help\/?/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Help],
})