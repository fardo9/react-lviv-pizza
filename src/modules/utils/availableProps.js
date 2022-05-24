import cls from "classnames";

export const availableProps = (prop, activeType, types, onSelectType ) => {
    return prop.map((type, idx) => (
        <li
            key={idx}
            className={cls({
                'active': activeType === idx,
                'disabled': !types.includes(type) && !types.includes(idx)
            })}
            onClick={() => onSelectType(idx)}
        >
            {type}
        </li>
    ))
};
