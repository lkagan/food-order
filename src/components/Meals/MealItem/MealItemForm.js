import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"
import { useRef, useState } from "react";

const MealItemForm = props => {
    const qtyInputRef = useRef()
    const [qtyIsValid, setQtyIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault()
        const enteredQty = +qtyInputRef.current.value;

        if (enteredQty < 0 || !enteredQty > 5) {
            setQtyIsValid(false);
            return;
        }

        props.onAddToCart(enteredQty)
    }

    return (
        <form
            className={ classes.form }
            onSubmit={ submitHandler }
        >
            <Input
                ref={ qtyInputRef }
                label={ "Amount" }
                input={ {
                    id: "amount_" + props.mealId,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                } }
            />
            <button>+ Add</button>
            { !qtyIsValid && <p>Please enter a valid quantity (1-5).</p> }
        </form>
    );
};

export default MealItemForm;