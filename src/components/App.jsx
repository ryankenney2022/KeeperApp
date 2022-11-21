import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notes) => {
        return (
          <Note key={notes.key} title={notes.title} content={notes.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
