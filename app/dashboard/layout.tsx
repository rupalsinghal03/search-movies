import React from 'react'

interface layoutprops {
    children: React.ReactNode
}
const layout: React.FC<layoutprops> = (props) => {
    return (
        <div className='' >
            {props.children}</div>
    )
}
export default layout;