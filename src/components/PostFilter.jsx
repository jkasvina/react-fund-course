import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter, options}) => {
    return (
        <>
            <MyInput
                placeholder="Поиск..."
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по..."
                options={options}
            />
        </>
    );
};

export default PostFilter;