import Link from 'next/link'
import Nav from '../components/Nav'

function Home(props) {
    return (
        <div className="container">
            <Nav />
            <h1>XKCD Comics Home</h1>
            <h2> Title: {props.comic.title} </h2>  
            <img src = {props.comic.img} alt={props.comic.alt}  />
            <Footer comicNum={props.comic.num}/>
        </div>
    )
}

// function ComicItem(props) {
//     return (
//         <li key={props.comic.id}>
//             <Link href="/comics/[id]" as={`/comics/${props.comic.id}`}>
//                 <a>
//                     {props.comic.name}
//                 </a>
//             </Link>
//         </li>
//     )
// }

export default Home

export async function getStaticProps() {
    // const url = "http://xkcd.com/info.0.json"
    const response = await fetch('https://xkcd.com/info.0.json');
    const data = await response.json();

    return {
        props: {
            comic : data,
        },
    }
}

function Footer(props) {

    const currentNum = props.comicNum;
    const nums = [];
    for(let n = currentNum; n > currentNum - 10; n--) {
        nums.push(n)
    }


    return( 
        <footer>
            <h2>Previous {nums.length}</h2>
        <ul>
            {nums.map(num => (
            <li key ={num}>
                <Link href="/comics/[id].js" as={`/comics/${num}`}>
                    <a>#{num}</a>
                </Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
            li {
                display: inline-block;
                margin-right: 5px;
            }
        `}
        </style>
        </footer>
    )
}