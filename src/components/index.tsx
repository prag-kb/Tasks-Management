import React, { useEffect, useState } from "react";
import { DataType, SampleJSON } from "../App";
import List from "./List";
import Filter from "./filter";

const Tasks = () => {
  const [data, setData] = useState<DataType[]>(SampleJSON);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");

  const handleClearFields: () => void = () => {
    setTitle("");
    setDescription("");
  };

  const handleAdd: (title: string, description: string) => void = (
    title,
    description
  ) => {
    const defaultValues = {
      id: data?.length + 1,
      title,
      description,
    };
    setData((prev) => [defaultValues, ...prev] as DataType[]);
    return handleClearFields();
  };

  const handleFilter = (filterType: React.SetStateAction<string>) => {
    setFilter(filterType);
    if (filterType === "All") {
      setData(SampleJSON);
    } else if (filterType === "Completed") {
      setData(data?.filter((x) => x?.completed));
    } else if (filterType === "Pending") {
      setData(
        data?.filter((x) => !x?.completed).length > 0
          ? data?.filter((x) => !x?.completed)
          : SampleJSON
      );
    }
  };

  useEffect(() => {
    handleFilter(filter);
  }, [filter]);

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <div className="task-head">
          <div className="">
            <div>Title</div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value.trimStart())}
            />
          </div>
          <div className="">
            <div>Description</div>
            <input
              value={description}
              onChange={(e) => {
                setDescription(e.target.value.trimStart());
              }}
            />
          </div>
        </div>

        <div
          className="task-creation-action"
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            margin: "10px 0 0 0",
          }}
        >
          <button
            onClick={() => handleAdd(title, description)}
            disabled={!(title.length || description.length)}
          >
            Add
          </button>
          <button
            onClick={handleClearFields}
            disabled={!(title.length || description.length)}
          >
            Reset
          </button>
        </div>
      </div>
      <Filter handleFilter={handleFilter} />
      <List listData={data} setData={setData} />
    </div>
  );
};

export default Tasks;
