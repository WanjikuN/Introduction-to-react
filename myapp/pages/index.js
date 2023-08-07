export default function Home() {
  function ListItems(){
    const ints = [81,2,3];
    return(
      <>
      {
        ints.map(id =>{
          return(
            <li>{id}</li>
          )
        })
      }
      </>
    )
  }
  return (
  <ul>
   <ListItems/>
  </ul>
  )
}
