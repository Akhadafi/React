import { useState } from "react";
import Youtube from "./components/Youtube";

function App() {
  return (
    <div className="App">
      <Youtube
        durasi="11.01"
        judul="Programing Menyenangkan"
        kategori="programing"
      />
      <Youtube durasi="11.01" judul="Coding Wkwk" kategori="coding" />
      <Youtube durasi="11.01" judul="Jalan-Jalan" kategori="jalan" />
      <Youtube />
    </div>
  );
}

export default App;
