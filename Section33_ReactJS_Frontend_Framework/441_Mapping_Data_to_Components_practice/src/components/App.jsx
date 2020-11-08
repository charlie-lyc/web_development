import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiDetail) {
  return (
    <Entry
      key={emojiDetail.id}
      emoji={emojiDetail.emoji}
      name={emojiDetail.name}
      meaning={emojiDetail.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* <Entry
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}
        />
        <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        />
        <Entry
          emoji={emojipedia[2].emoji}
          name={emojipedia[2].name}
          meaning={emojipedia[2].meaning} */}
        />
      </dl>
    </div>
  );
}

export default App;

// 1. Create Entry Component
{
  /* Description List : 'dictionary'와 같은 구조의 사이트에 적합하다.*/
}
{
  /* Description Term */
}
{
  /* Description Detail */
}
// 2. Create props to replace hardcoded data
// 3a. Import the emojipedia const
// 3b. Map through the emojipedia array and render 'Entry' components
