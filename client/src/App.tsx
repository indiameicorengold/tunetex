import React from "react";
import "./App.css";

function App() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form: HTMLFormElement = e.currentTarget;
    const formData: FormData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson: Record<string, string> = Object.fromEntries(
      formData.entries()
    ) as Record<string, string>;

    console.log(formJson);
  }

  return (
    <>
      <h1>Tunetex</h1>
      <form method="get" onSubmit={handleSubmit}>
        <textarea
          name="textarea"
          placeholder="paste text in here"
          rows={20}
          cols={50}
        />
        <hr />
        <button type="submit">generate!</button>
      </form>
    </>
  );
}

export default App;
