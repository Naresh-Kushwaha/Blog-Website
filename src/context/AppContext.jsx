import { createContext, useState } from "react";


export const AppContext=createContext();
export default function AppContextProvider({children}){

    const [loading,setloading]=useState(false);
    const [posts,setposts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalpages,settotalpages]=useState(null);
    async function fetchblogposts(page=1){
        setloading(true);
        let url='https://codehelp-apis.vercel.app/api/get-blogs';
        try{
            const result=await fetch(`${url}?page=${page}`);
            const data=await result.json();
            console.log(data);
            setpage(data.page);
            setposts(data.posts);
            settotalpages(data.totalpages);
        }
        catch(error){
            console.log("Error in fetching data");
            setpage(1);
            setposts([]);
            settotalpages(null);

        }
        setloading(false);
    }
    function handlepagechange(page){
        setpage(page);
        fetchblogposts(page);



    }
    const value={
        posts,
        setposts,
        loading,
        setloading,
        page,
        setpage,
        totalpages,
        settotalpages,
        fetchblogposts,
        handlepagechange,
    };
    return <AppContext.Provider value={value}>
        {children}

    </AppContext.Provider>


}