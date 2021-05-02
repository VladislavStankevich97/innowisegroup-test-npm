import * as React from 'react';
import "./Form.css";

interface Form {
}


const Form: React.FC<Form> = () => {
    return (
        <form>
            <input
                type="text"
                className="question" id="nme"
                required autoComplete="off" />
            <label
                htmlFor="nme">
                <span>Hi</span>
            </label>
            <hr />
            <textarea
                name="message"
                rows={1}
                className="question"
                id="msg"
                required
                autoComplete="off"></textarea>
            <label htmlFor="msg">
                <span>my name is Vlad, and you?</span>
            </label>
            <input type="submit" value="Text!" />
        </form>
    )
}

export default Form