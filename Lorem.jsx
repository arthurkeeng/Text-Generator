import { useState } from "react";
import paragraph from "../data/textData";
const Lorem = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    setParagraphs(() => {
      let amount = count;
      if (count <= 0) {
        amount = 1;
      }
      if (count > paragraph.length) {
        amount = paragraph.length;
      }
      return paragraph.slice(0, amount);
    });
    setCount("");
  };
  return (
    <section>
      <h2>welcome to Lorem ipsum generator</h2>
      <h2>
        <span>No of paragraphs :</span>
        <form action="" onSubmit={submitForm}>
          <input
            type="number"
            value={count}
            onChange={(e) =>
              setCount(() => {
                let newValue = +e.target.value;
                return newValue;
              })
            }
          />
          <input type="submit" />
        </form>
      </h2>

      <div>
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
};

export default Lorem;
