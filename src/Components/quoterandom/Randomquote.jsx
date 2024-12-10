import React, { useEffect, useState } from 'react'
import "./Randomquote.css"
import {useMediaQuery} from "react-responsive"
import twitter_icon from"../Asseset/twitter.png"
import facebook_icon from "../Asseset/facebook.png"
import instagram_icon from "..//Asseset/instagram.png"

const Randomquote = () => {
    
    const [quote,setquote] = useState("")
    const [author,setauthor] = useState("")
    
    const newquotegenerator = async() => {
        try{
            const response = await fetch("http://api.quotable.io/random")

            const data = await response.json()
            console.log(data.content)
            setquote(data.content)
            setauthor(data.author)
        }
        catch(error){
            console.error("error fetching data",error)
            setquote("while error")
        }
    }

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet/text = ${quote} - ${author}`)
    }
    const instagram = () => {
        window.open(`https://instagram.com/intent/post/text = ${quote} - ${author}`)
    }
    const facebook = () => {
        window.open(`https://facebook.com/intent/sharer = ${quote} - ${author}`);

    }
    useEffect(() => {
        newquotegenerator()
    },[])

    const ismobile = useMediaQuery({query : "(max-width : 460px)"})
   
    return(
    <>
        <div className={`app ${ismobile ? "mobile" : ""}`}>
            <div className="container">
                <div className="quote">{quote}</div>
                <div className="author">- {author}</div>
                <div className="line"></div>
                <div className="bottom">
                    <button className="refresh" onClick={newquotegenerator}>Refresh</button>
                    <div className="icons">
                        <img src={twitter_icon} alt="twitter" onClick = {twitter}/>
                        <img src={facebook_icon} alt="facebook image" onclick = {facebook} />
                        <img src={instagram_icon}  alt="instagram image" onClick={instagram} />
                    </div>
                </div>
            </div>  
        </div>
    </>
  )
}

export default Randomquote