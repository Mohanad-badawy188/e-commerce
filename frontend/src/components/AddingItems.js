import React, { useState } from "react";
import styled from "styled-components";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import axios from "axios";

const Container = styled.form`
  height: 1100px;
  width: fit-content;
  margin: auto;
  margin-top: 100px;

  align-items: center;
`;
const InputDiv = styled.div`
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 40px;
`;
const InputName = styled.div`
  width: 400px;
`;
const Input = styled.input`
  height: 35px;
  border-radius: 10px;
  font-size: 20px;
`;
const BTN = styled.button`
  margin-top: 100px;
  height: 40px;
  width: 150px;
  border-radius: 10px;
  background-color: lightgreen;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: violet;
  }
`;
const ADD = styled.button`
  margin-left: 15px;
  margin-top: 20px;
  border: none;
  background-color: white;
`;
const Msg = styled.div`
  margin-left: 20px;
  color: red;
  margin-bottom: 5px;
  font-size: 20px;
`;
const Selection = styled.select`
  width: 250px;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  background-color: white;
  border: 3px solid black;
`;
const ArrayInput = styled.div`
  input {
    margin-top: 20px;
  }
  align-items: center;
`;
function AddingItems() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    onChange,
    onBlur,
    value,
    ref,
    formState: { errors },
  } = useForm({
    defaultValues: {
      discount: false,
      instock: true,
      rating: 5,
    },
  });
  const [discounts, setDiscount] = useState(false);
  const {
    fields: categoriesFields,
    append: categoriesAppend,
    remove: categoriesRemove,
  } = useFieldArray({
    control,
    name: "categories",
  });
  const {
    fields: sizeFields,
    append: sizeAppend,
    remove: sizeRemove,
  } = useFieldArray({
    control,
    name: "size",
  });
  const {
    fields: tagFields,
    append: tagAppend,
    remove: tagRemove,
  } = useFieldArray({
    control,
    name: "tag",
  });
  const {
    fields: colorFields,
    append: colorAppend,
    remove: colorRemove,
  } = useFieldArray({
    control,
    name: "color",
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/product/upload",
        data: formData,
      }).then(async (res) => {
        const img = (
          "http://localhost:5000/api/product/image/" + res.data.file.filename
        );

        data.imgURL = img;
      })

    } catch (e) {
      console.log(e);
    }
    try {
      await   axios({
        method: "post",
        url: "http://localhost:5000/api/product",

        data: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const handleClick = (e) => {
    setDiscount(!discounts);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit) }method='post'>
      <InputDiv>
        <InputName>Product Name :</InputName>
        <Input type="text" {...register("name")} defaultValue="" />
        {errors.name && <Msg>{errors.name.message}</Msg>}
      </InputDiv>
      <InputDiv>
        <InputName>Product img :</InputName>
        <Input type="file" name="file" {...register("file")} defaultValue="" />
      </InputDiv>
      <InputDiv>
        <InputName>Product price :</InputName>
        <Input
          type="number"
          {...register("price", {
            valueAsNumber: true,
          })}
          defaultValue="price"
        />
        {errors.price && <Msg>{errors.price.message}</Msg>}
      </InputDiv>
      <InputDiv>
        <InputName>Product desc :</InputName>

        <textarea rows="4" cols="50" {...register("desc")}></textarea>
      </InputDiv>

      <InputDiv>
        <InputName>Product categories :</InputName>
        <ArrayInput>
          {categoriesFields.map((item, index) => (
            <div key={item.id}>
              <Input {...register(`categories.${index}.categories`)} />
              <ADD
                onClick={(e) => {
                  categoriesRemove(index), e.preventDefault();
                }}>
                <RemoveOutlined sx={{ fontSize: "30px" }} />
              </ADD>
            </div>
          ))}
        </ArrayInput>
        <ADD
          onClick={(e) => {
            categoriesAppend({}), e.preventDefault();
          }}>
          <AddOutlined sx={{ fontSize: "30px" }} />
        </ADD>
      </InputDiv>
      <InputDiv>
        <InputName>Product color :</InputName>
        <ArrayInput>
          {colorFields.map((item, index) => (
            <div key={item.id}>
              <Input {...register(`color.${index}.color`)} />
              <ADD
                onClick={(e) => {
                  colorRemove(index), e.preventDefault();
                }}>
                <RemoveOutlined sx={{ fontSize: "30px" }} />
              </ADD>
            </div>
          ))}
        </ArrayInput>
        <ADD
          onClick={(e) => {
            colorAppend({}), e.preventDefault();
          }}>
          <AddOutlined sx={{ fontSize: "30px" }} />
        </ADD>
      </InputDiv>
      <InputDiv>
        <InputName>Product code :</InputName>
        <Input
          type="text"
          {...register("code", { valueAsNumber: true })}
          defaultValue=""
        />
        {errors.code && <Msg>{errors.code.message}</Msg>}{" "}
      </InputDiv>
      <InputDiv>
        <InputName>Product size :</InputName>
        <ArrayInput>
          {sizeFields.map((item, index) => (
            <div key={item.id}>
              <Input {...register(`size.${index}.size`)} />
              <ADD
                onClick={(e) => {
                  sizeRemove(index), e.preventDefault();
                }}>
                <RemoveOutlined sx={{ fontSize: "30px" }} />
              </ADD>
            </div>
          ))}
        </ArrayInput>
        <ADD
          onClick={(e) => {
            sizeAppend({}), e.preventDefault();
          }}>
          <AddOutlined sx={{ fontSize: "30px" }} />
        </ADD>
      </InputDiv>
      <InputDiv>
        <InputName>Product rating :</InputName>
        <Selection {...register("rating", { valueAsNumber: true })}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Selection>
      </InputDiv>
      <InputDiv>
        <InputName>Product discount :</InputName>
        <Input
          type="checkbox"
          onClick={handleClick}
          {...register("discount")}
          defaultValue=""
        />
      </InputDiv>
      <InputDiv style={{ display: discounts ? "flex" : "none" }}>
        <InputName>Product discountPercent :</InputName>
        <Input
          type="number"
          {...register("discountPercent", { valueAsNumber: true })}
        />
      </InputDiv>

      <InputDiv>
        <InputName>Product brand :</InputName>
        <Input {...register("brand")} />
      </InputDiv>
      <InputDiv>
        <InputName>Product tag :</InputName>
        <ArrayInput>
          {tagFields.map((item, index) => (
            <div key={item.id}>
              <Input {...register(`tag.${index}.tag`)} />
              <ADD
                onClick={(e) => {
                  tagRemove(index), e.preventDefault();
                }}>
                <RemoveOutlined sx={{ fontSize: "30px" }} />
              </ADD>
            </div>
          ))}
        </ArrayInput>
        <ADD
          onClick={(e) => {
            tagAppend({}), e.preventDefault();
          }}>
          <AddOutlined sx={{ fontSize: "30px" }} />
        </ADD>
      </InputDiv>

      <InputDiv>
        <InputName>Product inStock :</InputName>

        <p>
          <Controller
            control={control}
            name={"instock"}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                <label
                  style={{
                    marginRight: "20px",
                    display: "block",
                    marginBottom: "20px ",
                  }}>
                  In stock
                  <input
                    style={{ marginRight: "200px" }}
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(true)}
                    checked={value === true}
                  />
                </label>
                <label>
                  Out Of Stock
                  <input
                    type="radio"
                    onBlur={onBlur}
                    onChange={() => onChange(false)}
                    checked={value === false}
                  />
                </label>
              </>
            )}
          />
        </p>
      </InputDiv>
      <BTN type="submit">Submit</BTN>
    </Container>
  );
}

export default AddingItems;
