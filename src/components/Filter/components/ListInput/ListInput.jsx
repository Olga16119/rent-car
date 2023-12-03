import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ListInput.module.css';


import { setFilter } from 'redux/filter/filterReducer'; 

const ListInput=({ list, isSubmenuOpened, name })=> {
  const dispatch = useDispatch();

  const setText = ({ target }) => {
    if (target.tagName === "LI") {
      dispatch(setFilter({ name, value: target.innerText }));
    }
  };

  return (
    <div className={`${css['sub-list-box']} ${isSubmenuOpened ? css["active"] : ""}`}>
      <ul onClick={setText} className={css['sub-list']}>
        {list.map(e => {
          return (
            <li key={nanoid()}>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListInput;