import React from "react";

function Note() {
    return (
        // DOM일 때와 JSX일 때 태그 속성 이름이 다르다. 'class' vs. 'className'
        // 그런데 'class'로 해도 스타일이 적용된다...?
        <div className="note">
            <h1>This is note title</h1>
            <p>This is note content</p>
        </div>
    );
}

export default Note;