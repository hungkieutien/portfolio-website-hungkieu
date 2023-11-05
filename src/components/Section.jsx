import React from "react";

export default function Section({children, id, mode, title, ...props}) {

    let cssContentClass = `${mode}-content`

    return (
        <>
            <section id={id} {...props}>
                <div className="container">
                    <div className={cssContentClass}>
                        <h2>{title}</h2>
                        {children}
                    </div>
                </div>
            </section>
        </>
    );
}