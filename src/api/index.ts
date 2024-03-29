import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
	id: number
	title: string
	body: string
}

export const apiService = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: builder => ({
		getPosts: builder.query<Post[], number>({
			query: page => `posts?_page=${page}`,
		}),
		getPost: builder.query<Post, number>({
			query: id => `posts/${id}`,
		}),
	}),
})

export const { useGetPostsQuery, useGetPostQuery } = apiService
