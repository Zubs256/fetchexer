import Dogs from "@/components/Dogs.jsx";
import Memes from "@/components/Memes.jsx";
import Pokemon from "@/components/Pokemon.jsx";

export default function Home() {
  //const [pokemonName, setPokemonName] = useState("");
  return (
    <main>
      <h1>Can you catch them all?</h1>
      <Dogs />
      <Memes />
      <Pokemon />
    </main>
  );
}
