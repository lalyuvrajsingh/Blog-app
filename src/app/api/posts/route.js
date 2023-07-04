
import { NextResponse } from "next/server"
import connect from '@/utils/db'
import Post from "@/models/Post"

export const GET = async (request) => {

    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try{

        await connect()

        const posts = await Post.find(username && {username})

        return new NextResponse( JSON.stringify(posts), { status: 200 })

    }catch(err){
        return new NextResponse(err, { status: 500 })
    }
}

export const POST = async (request) => {

        const body = await request.json()
        const newPost = new Post(body)
        const { inputValue } = req.body

        const {db} = await connect() //connect to DB

    try{

        

        await newPost.save()

        const collection = db.collection('post');

        await collection.insertOne({ input: inputValue });

        return new NextResponse( "post has been created", { status: 201 })

    }catch(err){
        return new NextResponse(err, { status: 500 })
    }
}
