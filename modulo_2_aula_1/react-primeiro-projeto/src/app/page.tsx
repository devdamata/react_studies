import { Circle } from "./components/Circle";
import { GeoForm } from "./components/GeoForm";
import { Square } from "./components/Square";

//function Page (){} também posso declarar um componente dessa maneira!
const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>

      <GeoForm/>
    </div>
  ); 
}

export default Page;