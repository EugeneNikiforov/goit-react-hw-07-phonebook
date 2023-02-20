import React from 'react';
import { selectFilter } from 'redux/filter/filterSelector';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsAction } from 'redux/filter/filter-slice';
import css from './Filter.module.scss';

export default function Filter() {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={css.filter}>Find contacts by name</p>
      <input type="text"
        name="found"
        className={css.filterFinder}
        value={filterValue}
        onChange={(e) => dispatch(filterContactsAction(e.target.value))} />
    </>
  );
}