import * as React from "react";

export default function HoverButtonUiKit() {
  return (
    <div class="uk-inline">
      <button class="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div uk-drop="">
        <div class="uk-card uk-card-body uk-card-default">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
      </div>
    </div>
  );
}
