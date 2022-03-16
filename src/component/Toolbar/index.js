import React from "react";
import { CommandBar } from "@fluentui/react";
import { useNavigate } from "react-router-dom";

export default function Toolbar() {
  const navigate = useNavigate();

  function handleClick(url) {
    navigate(url);
  }

  const commandBarItems = [
    {
      key: "newItem",
      text: "Create",
      iconProps: { iconName: "Add" },
      onClick: () => handleClick("/books/new"),
    },
  ];

  return (
    <div>
      <CommandBar items={commandBarItems} />
      <hr style={{ border: "1px solid #eee", margin: 0 }} />
    </div>
  );
}
