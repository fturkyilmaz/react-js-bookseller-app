import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DetailsList, SelectionMode } from "@fluentui/react";
import { Stack, PrimaryButton } from "@fluentui/react";
import { BookSellerContext } from "../context";

const columnProps = {
  tokens: { childrenGap: 20 },
  styles: { root: { width: 100 } },
};

export default function Books() {
  const columns = [
    {
      key: "id",
      name: "Id",
      fieldName: "id",
      minWidth: 10,
      maxWidth: 50,
      isRowHeader: true,
    },
    {
      key: "imgUrl",
      name: "Image",
      fieldName: "imgUrl",
      minWidth: 200,
      maxWidth: 250,
      isRowHeader: true,
      onRender: (item) => (
        <img
          src={item.imgUrl}
          style={{ width: "200px", height: "250px" }}
          alt={`${item.name} - ${item.author}}`}
        />
      ),
    },
    {
      key: "name",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 150,
      isRowHeader: true,
    },
    {
      key: "author",
      name: "Author",
      fieldName: "author",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    },
    {
      key: "about",
      name: "About",
      fieldName: "about",
      minWidth: 300,
      maxWidth: 500,
      isRowHeader: true,
    },
    {
      key: "process",
      name: "Process",
      fieldName: "process",
      isRowHeader: true,
      minWidth: 50,
      maxWidth: 100,
      onRender: (item) => (
        <Stack {...columnProps} horizontal>
          <PrimaryButton
            text="Add Cart"
            onClick={() => console.log(item)}
            allowDisabledFocus
          />
          <PrimaryButton
            text="Delete"
            onClick={() => console.log(item.id)}
            allowDisabledFocus
          />
          <PrimaryButton text="Edit" onClick={() => console.log(item.id)} />
        </Stack>
      ),
    },
  ];

  const [state, dispatch] = useContext(BookSellerContext);

  useEffect(() => {
    axios
      .get("https://book-store-api-test.herokuapp.com/books")
      .then((response) => {
        dispatch({ type: "FETCH_BOOKS", payload: response.data });
      });
  }, [dispatch]);

  return (
    <div>
      <div className="content">
        <div className="content-header">Books</div>
        <DetailsList
          items={state.books}
          columns={columns}
          selectionMode={SelectionMode.none}
        />
      </div>
    </div>
  );
}
