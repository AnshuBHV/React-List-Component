import React from "react";

import "./GoalList.css";

function GoalList({
  button1OnClick,
  button1Text,
  button2OnClick,
  button2Text,
  listContent,
  objBoolean,
  obj,
}) {
  if (objBoolean == true) {
    var k = 0;
    obj.forEach(() => {
      k++;
    });
  }

  if (!objBoolean) {
    return (
      <ul className="goal-list">
        <li>
          {listContent}

          <button className="btn1" onClick={button1OnClick}>
            {button1Text}
          </button>
          <button className="btn1" onClick={button2OnClick}>
            {button2Text}
          </button>
        </li>
      </ul>
    );
  } else {
    return (
      <div>
        {[...Array(k)].map((e, i) => {
          return (
            <ul className="goal-list" key={i}>
              <li key={i}>
                {obj[i]}
                <button className="btn1" onClick={button1OnClick}>
                  {button1Text}
                </button>
                <button className="btn1" onClick={button2OnClick}>
                  {button2Text}
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default GoalList;
