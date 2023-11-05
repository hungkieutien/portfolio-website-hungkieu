import React from "react";

export default function Section({children, id, mode, ...props}) {

    let cssContentClass = `${mode}-content`

    return (
        <>
            <section id={id} {...props}>
                <div className="container">
                    <div className={cssContentClass}>
                        {children}
                    </div>
                </div>
            </section>
        </>
    );
}