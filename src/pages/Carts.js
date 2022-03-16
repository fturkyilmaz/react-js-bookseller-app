import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { DetailsList, SelectionMode } from "@fluentui/react";
import { BookSellerContext } from "../context";
import { Stack, PrimaryButton } from "@fluentui/react";

const columnProps = {
  tokens: { childrenGap: 20 },
  styles: { root: { width: 100 } },
};

export default function Carts() {
  const [state, dispatch] = useContext(BookSellerContext);

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
            text="Delete"
            onClick={() => console.log(item.id)}
            allowDisabledFocus
          />
        </Stack>
      ),
    },
  ];

  useEffect(() => {
    axios
      .get("https://book-store-api-test.herokuapp.com/carts")
      .then((response) => {
        dispatch({
          type: "FETCH_CARTS",
          payload: response.data,
        });
      });
  }, [dispatch]);

  return (
    <div>
      <div className="content">
        <div className="content-header">Carts</div>
        <DetailsList
          items={state.carts}
          columns={columns}
          selectionMode={SelectionMode.none}
        />
      </div>
    </div>
  );
}
