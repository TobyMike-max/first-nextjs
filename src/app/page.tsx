 import Hello from "../../components/hello"

 const Home = () => {
  console.log("I am a server side component. SSR")
   return (
    <main>
     <div className="text-5xl underline font-extrabold">
       Welcome to Nextjs
     </div>
     <Hello />
    </main>
   ) 
 }
 
 export default Home
