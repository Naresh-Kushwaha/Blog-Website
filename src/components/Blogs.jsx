import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import './Spinner.css';
import Spinner from "./Spinner";
export default function Blog(){
    const {loading,posts}=useContext(AppContext);
    


    return(
        <div className=" flex  justify-center  p-5">
            <div className="Shadow">
            {
                
                loading?(<Spinner></Spinner>):(
                    
                        posts.length===0?(<div>
                            <p>No Post found</p>
                        </div>):(
                            posts.map((post)=>(
                                <div key={post.id}>
                                    <p className="text-xl font-sans font-semibold">{post.title}</p>
                                    <p>
                                        By <span className="font-mono text-xl "> {post.author}</span> on <span>{post.category}</span>
                                    </p>
                                    <p>Posted on {post.date}</p>
                                    <p className="pt-6 pb-3">{post.content}</p>
                                    <div>
                                        {post.tags.map((tag,index)=>{
                                            return<span className="text-[#3e85d5]" key={index}>{`#${tag}`}</span>
                                        })}
                                    </div>
                                    </div>
                            ))
                        )
                    




                )
            }
        </div></div>
    )
}