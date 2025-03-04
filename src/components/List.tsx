import React, { Dispatch, SetStateAction, useState } from "react";
import { DataType } from "../App";

interface Props {
  listData: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const List = ({ listData, setData }: Props) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckBox: (e, number: number) => void = (e, id: number) => {
    const isChecked = e.target?.checked;
    setSelectedItems((prev) =>
      isChecked ? [id] : prev?.filter((item) => item !== id)
    );
  };

  const handleComplete: () => void = () => {
    setData((prev) => {
      const updateData = prev?.map((x) =>
        selectedItems?.includes(x?.id) ? { ...x, completed: true } : x
      );
      return [
        ...(updateData?.filter((list) => !list?.completed) as DataType[]),
        ...(updateData?.filter((list) => list?.completed) as DataType[]),
      ];
    });
    return setSelectedItems([]);
  };

  const handleDelete: (id?: number) => void = (id?: number) => {
    setData((prev) => {
      if (id) {
        const updatedData = prev?.filter((x) => x?.id !== id);
        return updatedData;
      }
      return prev?.filter((x) => !selectedItems?.includes(x?.id));
    });
    return setSelectedItems([]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <div style={{ display: "grid", justifyContent: "center" }}>
        {Array.isArray(listData) && !!listData?.length ? (
          listData?.map((x) => (
            <div
              key={x?.id}
              style={{
                display: "flex",
                gap: "20px",
                margin: "0 0 10px 0",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                onClick={(e) => {
                  handleCheckBox(e, x?.id);
                }}
                id={x?.id?.toString()}
                checked={selectedItems?.includes(x?.id)}
              />
              <button
                style={{ height: "2rem" }}
                onClick={() => handleDelete(x?.id)}
              >
                Delete
              </button>
              <div style={{ display: "grid" }}>
                <span
                  style={{
                    textDecorationLine: !!x?.completed
                      ? "line-through"
                      : "none",
                    fontWeight: "bold",
                  }}
                >
                  {x?.title}
                </span>
                <span
                  style={{
                    textDecorationLine: !!x?.completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {x?.description}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="">No Data available</div>
        )}
      </div>

      <div style={{ display: "grid", justifyContent: "center" }}>
        <button
          style={{ marginBottom: "20px", height: "2rem" }}
          disabled={!selectedItems?.length}
          onClick={handleComplete}
        >
          Completed
        </button>
        <button
          style={{ height: "2rem" }}
          onClick={() => handleDelete()}
          disabled={!selectedItems?.length}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
