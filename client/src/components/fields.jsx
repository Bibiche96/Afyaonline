

export default function Fields({ props, inputWidth }) {

    return (
        <>
            <label htmlFor={props.id}> {props.name} </label>
            {(props.type !== 'textarea') && <input
                type={props.type || 'text'}
                id={props.id}
                placeholder={props.placeholder || ''}
                className={`border shadow w-${inputWidth} h-16 text-center `}  />}
        </>
    )
}