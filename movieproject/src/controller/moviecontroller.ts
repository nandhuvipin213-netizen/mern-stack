import express from "express"
import type {Request,Response} from "express"
import type{ movie } from "../types/movie.js"
import { movies } from "../models/moviemodel.js"

export const getmovie=(req:Request,res:Response)=>{
    const filteredmovive=movies.filter(movie =>movie.rating >4)
    if(filteredmovive.length>4){
    res.status(202).json({message:"movie found",movies:filteredmovive})
    }else{
        res.status(404).json({message:"movie not found"})
    }
}

export const getmoviee=(req:Request,res:Response)=>{
    res.status(202).json({message:"movie",movies})
}


export const getmovieid=(req:Request,res:Response)=>{
    const id=Number(req.params.id)
    const movie =movies.find(j=>j.id===id)
    if(!movie){
        res.status(404).json({message:"movie not found"})
        
    }
    res.json({movie})
}


export const addmovie=(req:Request,res:Response)=>{
    const {title,rating}=req.body
    const newmovie:movie={
        id:movies.length +1,
        title,
        rating

    }
    movies.push(newmovie)
    res.json({message:"movie added"})
} 

export const updatemovie=(req:Request,res:Response)=>{
    const id=Number(req.params.id)
    const movie:any=movies.find(d=>d.id===id)
    if(!id){
        res.json({message:"movie not found"})
    }
    movie.title=req.body.title
    movie.rating=req.body.rating
    res.json({message:"movie updated"})
}

export const deletemovie=(req:Request,res:Response)=>{
    const id=Number(req.params.id)
    const moviess:any=movies.findIndex(k=>k.id===id)
    if(!id){
        res.json({mesage:"movie not found"})
    }
    movies.splice(moviess,1)
    res.json({message:"movie deleted"})

}