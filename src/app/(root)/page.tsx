 import Hello from "../../../components/hello"

const Home = async () =>  {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums")
  if (!response.ok) throw new Error("Failure to fetch data")
  const data = await response.json()
  console.log("I am a server side component. SSR", data)
   return (
    <main>
     <div className="text-l">
      <div>Just do it!!! Do it unsure, scared and afraid!!!</div>
      <h1 className="text-2xl flex justify-center items-center">JSON Placeholder</h1>
       {data.map((dat: {id: number, title:string}) => (
        <div key={dat.id} className="flex">
          <p className="mr-3">{dat.id}.</p>
          <h2>{dat.title}</h2>
        </div>
       ))}
     </div>
     <Hello />
    </main>
   ) 
 }
 
 export default Home
