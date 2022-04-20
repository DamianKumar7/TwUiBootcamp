import React from "react";
function DynamicElements({element}){
    const CustomTagName = element.htmlElementName
    const style = element.style
    const innerHtml = element.innerHTML

    return (
        <CustomTagName style = {style}>
            {innerHtml}
        </CustomTagName>
    )
}
export default DynamicElements