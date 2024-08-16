import React from 'react';
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#ffb5b5" },
        CSS: { backgroundColor: "#8dc6ff" },
        JavaScript: { backgroundColor: "#edb1f1" },
        React: { backgroundColor: "#ff8364" },
        default: { backgroundColor: "#f9f9f9" }
    };

    return (
        <button
            type="button"
            className="tag"
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}
        >
            {tagName}
        </button>
    );
}

export default Tag;
