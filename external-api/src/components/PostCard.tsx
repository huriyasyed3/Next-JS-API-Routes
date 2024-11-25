import React from 'react'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card'

const PostCard = ({ body, title }: { body: string, title: string }) => {
  return <Card className='bg-gradient-to-r from-blue-100 to-white'>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{body}</CardDescription>
    </CardContent>
  </Card>
}

export default PostCard